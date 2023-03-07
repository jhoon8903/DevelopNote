#postgresql #트러블슈팅 #백엔드 

---

# CENTOS 7.6 / Postgresql -14.7 기준

## 공통 (Master, Slave1, Slave2)

## 만약 password 과련 error 발생시

### PGPASSWORD=비밀번호 를 명령 앞에 같이 적어주길 바람

## repmgr 설치
```
sudo yum install -y repmgr_14.x86_64 repmgr_14-devel.x86_64
```


## symbolic link 생성
- 원하지 않는다면 안해줘도 되지만 커맨드를 실행할 때 /usr/pgsql-14/bin/repmgr 를 입력하면서 해주어야 한다.
```
ln -s /usr/pgsql-14/bin/repmgr /usr/bin/repmgr
```

```
ln -s /usr/pgsql-14/bin/repmgrd /usr/bin/repmgrd
```

### sudoers 권한 주기 (기본값은 Read Only)

```
sudo chmod 700 /etc/sudoers
```

### sudoers 수정하기
```
vim /etc/sudoers
```
### sudoers 내용 (마지막에 넣으면 됨)
```
postgres ALL=NOPASSWD: /usr/bin/systemctl stop postgresql-14.service, /usr/bin/systemctl start postgresql-14.service, /usr/bin/systemctl restart postgresql-14.service, /usr/bin/systemctl reload postgresql-14.service, /usr/bin/systemctl start repmgr14.service, /usr/bin/systemctl stop repmgr14.service
```

```
sudo chmod 440 /etc/sudoers
```

# Master 설정
### 계정생성

```
su - postgres
```

```
createuser --superuser 유저명
```

```
createdb --owner=유저명 db이름
```

```
vim /var/lib/pgsql/14/data/postgresql.conf
```

## 각각의 옵션을 찾아서 수정해줘도 되지만 기본이 주석처리라 마지막 에서 커스텀입력을 해줘도 된다
```
max_wal_senders = 10 
max_replication_slots = 10 
wal_level = 'replica' 
hot_standby = on 
archive_mode = on 
archive_command = '/bin/true' 
wal_log_hints = on 
shared_preload_libraries = 'repmgr'
```

## pg_hba.conf 수정
```
vim /var/lib/pgsql/14/data/pg_hba.conf
```

```
# for repmgr
# TYPE  DATABASE        USER            ADDRESS                 METHOD
 local  replication     유저명                                    trust
 host   replication     유저명            127.0.0.1/32            trust
 host   replication     유저명            마스터 아이피/24           trust
 host   replication     유저명            슬레이브1아이피/24          trust
 host   replication     유저명            슬레이브2아이피/24          trust
 local  DB이름           유저명                                    trust
 host   DB이름           유저명            127.0.0.1/32            trust
 host   DB이름           유저명            마스터 아이피/24           trust
 host   DB이름           유저명            슬레이브1아이피/24          trust
 host   DB이름           유저명            슬레이브2아이피/24          trust
```

## repmgr.conf 수정
```
vim /etc/repmgr/14/repmgr.conf

```

```
################################################################################################
#                                       CUSTOM SETTING                                         #
################################################################################################

node_id=1
node_name='노드이름 (여기선 master '서버의 호스트명 추천')'
conninfo='host=마스터 아이피 user=계정명 dbname=DB 이름 connect_timeout=2'
data_directory='/var/lib/pgsql/14/data'
service_start_command = 'sudo systemctl start postgresql-14.service'
service_stop_command = 'sudo systemctl stop postgresql-14.service'
service_restart_command = 'sudo systemctl restart postgresql-14.service'
service_reload_command = 'sudo systemctl reload postgresql-14.service'
```

### 환경변수에 비밀번호 입력
```
su - postgres
```

```
export PGPASSWORD=포스트그래스 비밀번호
```

### repmgr master 서버를 primary 로 등록
```
repmgr primary register
```

###  상태확인
```
repmgr cluster show
```

![](https://i.imgur.com/NDUICyu.png)

### data 폴더 .postgresql.conf.swp 권한 조정
```
chown postgres:postgres /var/lib/pgsql/14/data
```
```
chown postgres:postgres /var/lib/pgsql/14/data/.postgresql.conf.swp
```
```
chmod 700 /var/lib/pgsql/14/data/.postgresql.conf.swp
```
```
sudo chmod 750 /var/lib/pgsql/14/data
```

```
sudo rm /var/lib/pgsql/14/data/.pg_hba.conf.swo
```

## master 재시작
```
systemctl restart postgresql-14.service
```
---

# Slave 서버 설정

## postgres 종료

```
systemctl stop postgresql-14.service
```

```
vim /etc/repmgr/14/repmgr.conf
```

### slave 1
```
#################################################################################################
##  CUSTOM SETTING      repmgr slave1 setting                                                  ##
#################################################################################################
#
node_id=2
node_name='slave1'
conninfo='host=SLAVE1 아이피 user=계정명 dbname=DB이름 connect_timeout=2'
data_directory='/var/lib/pgsql/14/data'
service_start_command = 'sudo systemctl start postgresql-14.service'
service_stop_command = 'sudo systemctl stop postgresql-14.service'
service_restart_command = 'sudo systemctl restart postgresql-14.service'
service_reload_command = 'sudo systemctl reload postgresql-14.service'
```
### slave 2
```
#################################################################################################
##  CUSTOM SETTING      repmgr slave2 setting                                                  ##
#################################################################################################
#
node_id=3
node_name='slave2'
conninfo='host=SLAVE2 아이피 user=계정명 dbname=DB이름 connect_timeout=2'
data_directory='/var/lib/pgsql/14/data'
service_start_command = 'sudo systemctl start postgresql-14.service'
service_stop_command = 'sudo systemctl stop postgresql-14.service'
service_restart_command = 'sudo systemctl restart postgresql-14.service'
service_reload_command = 'sudo systemctl reload postgresql-14.service'
```

## master data 복사

```
	su - postgres
```

```
repmgr -h 마스터아이피 -U 유저이름 -d DB이름 standby clone --force
```

### swp error 발생시 
vi / vim 파일 수정 및 작성 중 정상적으로 작성하지 않고 얘기치못하게 종료되거나 하면 swp || swn || swo 등의 임시파일을 만드는데 
이것을 삭제 해주면 됨 파일을 확인 하는방법은 
vim 들어갔을 때 Warning  문구가 나오면 R 을 눌러 리커버리 창을 확인하고 
swp 파일의 디렉토리와 이름을 기록하고 다시 터미널에 나와서 삭제 하면됨
```
Using swap file "/var/lib/pgsql/14/data/.pg_hba.conf.swo"

Original file "/var/lib/pgsql/14/data/pg_hba.conf"

E308: Warning: Original file may have been changed

E309: Unable to read block 1 from /var/lib/pgsql/14/data/.pg_hba.conf.swo
```

### db 재실행
```
 systemctl start postgresql-14.service
```

### DB(노드) 등록
```
PGPASSWORD=비밀번호 repmgr standby register 
```

### 정상적으로 등록되면 
```
PGPASSWORD=비밀번호 repmgr cluster show
```

![](https://i.imgur.com/4CBqN8k.png)


---

# Fail over 

# 공통 (master && slave)

## repmgr.conf 설정

```
vim /etc/repmgr/14/repmgr.conf
```

```
failover='automatic'
promote_command='repmgr standby promote'
follow_command='repmgr standby follow --upstream-node-id=%n'
repmgrd_service_start_command = 'sudo systemctl start repmgr14.service'
repmgrd_service_stop_command = 'sudo systemctl stop repmgr14.service'
log_file='/var/log/repmgr/repmgrd.log'
reconnect_attempts = 3
reconnect_interval = 5
```

### 전에 설정한 파일과 같이보면 master node의 모습은 다음과 같다

![](https://i.imgur.com/2G81z3Z.jpg)

### log 설정
로그가 쌓이지 않고 주기적으로 정리될 수 있도록 설정
주기는 공식 홈페이지 설정

```
vim /etc/logrotate.d/repmgr
```

```
/var/log/repmgr/repmgrd.log { 
		missingok 
		compress 
		rotate 52 
		maxsize 100M 
		weekly 
		create 0600 postgres postgres 
		postrotate /usr/bin/killall -HUP repmgrd 
		endscript 
}
```

-----

## 설치 

```
yum install centos-release-scl-rh
```

```
yum install https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm -y
```

```
yum install -y llvm5.0-devel 
```

```
yum install llvm-toolset-7-clang -y
```

```
dnf install postgresql14-devel -y
```

```
systemctl start repmgr14.service
```

##  systemctl start repmgr14.service 실행 실패시
```
vim /etc/systemd/system/repmgr14.service
```

```
[Unit] 
Description=REPMGR for PostgreSQL 14 

[Service] 
Type=simple 
User=postgres 
Group=postgres 
ExecStart=/usr/pgsql-14/bin/repmgr -f /etc/repmgr/14/repmgr.conf daemon start
ExecStop=/usr/pgsql-14/bin/repmgr -f /etc/repmgr/14/repmgr.conf daemon stop 
Restart=on-failure 
RestartSec=5s 

[Install] 
WantedBy=multi-user.target
```

작성 후 
```
systemctl daemon-reload
```

```
sudo systemctl start repmgr14.service
```
```
sudo systemctl stop repmgr14.service
```

---

# Fail over test

```
su - postgres
```

```
repmgr cluster show
```
## Master
![](https://i.imgur.com/ZP3F3k7.png)

## Slave
![](https://i.imgur.com/vGLaw93.png)


## Master 를 정지해서  Slave가 활성화 되는지 확인 해야 함

### Slave는 처음 Read Only 로 데이터 입력이 되지 않는다

![](https://i.imgur.com/TVYyuu4.jpg)

### Master 만 입력 가능한 상황
![](https://i.imgur.com/ugK20vc.jpg)


###  Master Server 정지

#### Master 정지 전 Slave cluster show
![](https://i.imgur.com/ovbq09g.jpg)

#### Master 정지 후 Slave cluster show
![](https://i.imgur.com/LI6oMvx.png)

### Slave DB에서 입력이 가능해짐
![](https://i.imgur.com/rVybWNN.jpg)


### Master Server 실행

#### Master 실행 후 Slave Cluster Show
![](https://i.imgur.com/a0yGuWu.png)

원래 Master 정지후 Slave로 낮춰 주어야 함

```
systemctl stop postgresql-14.service
```

```
repmgr -h {Slave IP} -U {유저명} -d {DB명} standby clone --force
```

```
systemctl start postgresql-14.service
```

```
repmgr standby register -F
```

다시 cluster show를 확인하면

## Slave 였던 Server
![](https://i.imgur.com/LDefjMe.png)

## Master 였던 Server

![](https://i.imgur.com/1sLmUmR.png)


하지만 우리에게 필요한건 자동화

---

# Failover 자동화

```
vim /etc/repmgr/14/repmgr.conf
```

```
event_notification_command='/var/lib/pgsql/failover_promote.sh %n %e'
```

```
event_notifications='standby_promote'
```

### failover_promote 스크립트 만들기

```
vi /var/lib/pgsql/failover_promote.sh
```

```
#!/bin/bash
up_id=$1
name=$2
if [ $name == 'standby_promote' ]; then
declare -A servers
if [ $up_id == 1 ] ; then
        down_id=2
else
        down_id=1
fi
servers[2]="2번 노드 아이피"
servers[1]="1번 노드 아이피"
while [[ `(ssh -o ConnectTimeout=5 ${servers[$down_id]} echo ok 2>&1)` != 'ok' ]]
do
sleep 2
echo Failed node ${servers[$down_id]} is not reachable >> /var/log/repmgr/repmgrd.log
done
ssh -T ${servers[$down_id]} << EOF
 sleep 5
 sudo systemctl stop postgresql-14.service && sleep 10
 rm -rf /var/lib/pgsql/14/data
 repmgr -h ${servers[$up_id]} -d testdb -U dbuser standby clone --force &&
 sudo systemctl start postgresql-14.service && sleep 2
 repmgr standby register -F
EOF
echo ${servers[$up_id]}
fi
```

```
chmod +x /var/lib/pgsql/failover_promote.sh
```
