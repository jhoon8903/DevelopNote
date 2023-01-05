#API #expressJS #백엔드 #nodeJS 

# Express의 Middleware


## 종류 
 - application middleware
 - router middleware
 - error handling middleware
 - basic middleware
 - third-party middleware

Application
- 어플리케이션 전역에서 처리 가능 - app에 대한 req발생할 때 마다 실행
- app.use( ) 또는 app.method ( get, post, put 등 소문자 http 메소드)  
![](https://i.imgur.com/CT2YU0Y.png)

Router 
- router 단위로 req 발생하면 실행

