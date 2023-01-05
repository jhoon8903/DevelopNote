#API #expressJS #백엔드 #nodeJS 

# Express의 Middleware

express 자체가 자체적으로 최소한 Routing 및 Middleware 기능을 갖춘 WEB Framework 
req, res 이후 일반적으로 next라는 변수로 표시

각 미들웨어를 모듈화하면 각 각의 기능을 효율적으로  재사용 가능


## 종류 
 - application middleware
 - router middleware
 - error handling middleware
 - basic middleware
 - third-party middleware

Application middleware
- 어플리케이션 전역에서 처리 가능 - app에 대한 req발생할 때 마다 실행
- app.use( ) 또는 app.method ( get, post, put 등 소문자 http 메소드)  
![](https://i.imgur.com/CT2YU0Y.png)

Router middleware
- router 단위로 req 발생하면 실행
![](https://i.imgur.com/ukGyyXp.png)


Error Handling middleware
- 