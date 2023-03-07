#server #postgresql #Naver

---
# CentOS 7.8 기준

```
sudo yum install -y https://download.postgresql.org/pub/repos/yum/reporpms/EL-7-x86_64/pgdg-redhat-repo-latest.noarch.rpm
```

```
yum install -y centos-release-scl-rh https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
```

```
yum install -y postgresql14-server.x86_64 postgresql14-contrib.x86_64 llvm5.0-devel llvm-toolset-7-clang
```

```
yum install -y postgresql14-devel 
```

```
$ psql --version
> psql (PostgreSQL) 14.7
```

```
$ /usr/pgsql-14/bin/postgresql-14-setup initdb
> Initializing database ... OK
```

```
systemctl enable postgresql-14
```

```
sudo systemctl start postgresql-14
```

```
sudo systemctl status postgresql-14
```

![](https://i.imgur.com/b1dvfho.jpg)
////////// 생략
```
sudo -u postgres psql
```

```
postgres=# alter user postgres password 'fb8684gt';

> ALTER ROLE

postgres=# create user root with superuser createdb password 'fb8684gt';

> CREATE ROLE

postgres=# create database cai with owner postgres encoding 'UTF8';

> CREATE DATABASE
```

```
$ vim /var/lib/pgsql/14/data/postgresql.conf
```
///////// 생략
아래 명령어 잘 찾아서 수정 '#'은 지워야 함
```
listen_address = '*'
post = 5432
```

```
echo "host all all 0.0.0.0/0 trust" >> /var/lib/pgsql/14/data/pg_hba.conf
```

```
systemctl restart postgresql-14
```

# DBeaver
![](https://i.imgur.com/uVml2kY.png)
