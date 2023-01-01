#백엔드 #mySQL #server 

I. 성이 남씨인 유저의 이메일만 추출하기
- SELECT email FROM users WHERE name = '남**'
	![](https://i.imgur.com/XfREiUV.png)

II. Gamil 유저중 2020/07/12 ~ 13에 입력된 data 추출하기
- SELECT * FROM users WHERE email LIKE '%gmail.com' and created_at BETWEEN '2020-07-12 00:00:00' and '2020-07-13 23:59:59'
	
![](https://i.imgur.com/OdLMwAG.png)


III.  Gamil 유저중 2020/07/12 ~ 13에 입력된 data의 Count 하기
- SELECT COUNT(*) FROM users WHERE email LIKE '%gmail.com' and created_at BETWEEN '2020-07-12 00:00:00' and '2020-07-13 23:59:59'
	
![](https://i.imgur.com/WVBEnk0.png)


IV. naver eamil 을 사용하면서 웹개발 종합반을 신청하고, 결제는 kakaopay로 이루어진 데이터
