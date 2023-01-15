#API #server #백엔드 

# 교차 출처 리소스 공유 ( CORS ) [ Cross- Origin Resource Sharing ]

HTTP 헤더를 사용하여, ' 한 출처 (SOR)'에서 실행 중인 웹 어플리케이션이 다른 출처의 선택한 자원에 
'접근할 수 있는 권한'을 부여하도록 '브라우저'에 알리는 체제

웹 어플리케이션은 리소스가 자신의 출처 (도메인 , 프로토콜 , 포트 )와 다를 때 
출처 HTTP 요청(CORS)을 실행

[이미지 출처 : MDN]
교차 출처 요처의 예시 :  `https://domain-a.com`의 프론트 엔드 JavaScript 코드가 [`XMLHttpRequest`](https://developer.mozilla.org/ko/docs/Web/API/XMLHttpRequest)를 사용하여 `https://domain-b.com/data.json`을 요청하는 경우.

