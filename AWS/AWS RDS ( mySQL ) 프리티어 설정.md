#AWS #RDS #server 
# 기본 DB 생성
![](https://i.imgur.com/XGIIk3o.png)
[mySQL 버전에 관한 정보](https://docs.aws.amazon.com/ko_kr/AmazonRDS/latest/UserGuide/MySQL.Concepts.VersionMgmt.html)

1. AWS RDS 서비스 접속
2. 베이터베이스 생성 방식 선택 > 손쉬운 생성 ( 추후 옵션 변경 가능 ) 또는 표준 생성
3. 구성 서버 선택 > 본인은 mySQL

# 티어 선택 및 계정정보 설정
![](https://i.imgur.com/C5m07DQ.png)

1. DB 인스턴스 크기 : 개발단계에서는 프리티어 선택	
   - 프리티어 기준 [ db.t3.micro ]
     - 매월 750 시간 
     - 20gb 저장공간
     - 가끔 삭제 했다가 다시 생성하자
2. DB 인스턴스 식별자 : 생성할 DB의 이름
3. 마스터 사용자 이름 : DB접속시 사용할 계정이름 ( 기억하거나 적어둘 것 )
4. 마스터 암호 : DB 접속시 사용할 비밀번호 ( 노출 안되도록 주의 왠만하면 대소문자 섞어 쓰자 )


# DB생성 후 대기 (  잠시 시간이 걸린다 )
![](https://i.imgur.com/qNptsS8.png)

# DB 생성 중
![](https://i.imgur.com/ZEE6wmL.png)

# DB 생성 후
![](https://i.imgur.com/ATURz8c.png)

1. 엔드포인트 : 접속 HOST로 사용 됨 ( 노출 주의 )
2. 포트 : 접속 포트 ( 기본은 3306 )
3. 퍼블릭 액세스 : ' 예 '로 되어 있어야 외부 접속 가능
		- 대부분 만들고 접속이 안되면 이게 문제다.

## 퍼블릭 액세스가 '예' 가 아닐때

![](https://i.imgur.com/gzou09R.png)

![](https://i.imgur.com/kdQ65yJ.png)

📍 '계속' 누른 다음 수정예약을 '즉시 수정'으로 해주자
![](https://i.imgur.com/yC9UI0Q.png)
