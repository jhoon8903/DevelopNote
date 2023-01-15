#API #백엔드 #server #통신 #HTTP 

# 예비요청 (Preflight Request)

브라우저는 Request를 진행 할때 예비요청 (Preflight)를 먼저 보내 서버와 통신이 잘 되는지 확인 후
본 요청을 보내게 된다. ( 브라우저가 안전한지 미리 확인하는 과정 )
*특별한 점은 HTTP Method가 GET / POST 등의 방식이 아닌 "OPTION" 이라는 요청을 사용*

