#API #백엔드 #server #통신 #HTTP 

# 예비요청 (Preflight Request)

브라우저는 Request를 진행 할때 예비요청 (Preflight)를 먼저 보내 서버와 통신이 잘 되는지 확인 후
본 요청을 보내게 된다. ( 브라우저가 안전한지 미리 확인하는 과정 )
*특별한 점은 HTTP Method가 GET / POST 등의 방식이 아닌 "OPTION" 이라는 요청을 사용*

![](https://i.imgur.com/nij2J7p.png)
[`출처: inpa Dev`](https://inpa.tistory.com/entry/WEB-%F0%9F%93%9A-CORS-%F0%9F%92%AF-%EC%A0%95%EB%A6%AC-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95-%F0%9F%91%8F#thankYou)

![](https://i.imgur.com/dsGndcO.png)
[`출처: inpa Dev`](https://inpa.tistory.com/entry/WEB-%F0%9F%93%9A-CORS-%F0%9F%92%AF-%EC%A0%95%EB%A6%AC-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95-%F0%9F%91%8F#thankYou)

# 단순 요청 (Simple Request)

예비요청을 생략하고 본 요청을 보내는 방식
![](https://i.imgur.com/YQFmSzW.png)
[`출처: inpa Dev`](https://inpa.tistory.com/entry/WEB-%F0%9F%93%9A-CORS-%F0%9F%92%AF-%EC%A0%95%EB%A6%AC-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95-%F0%9F%91%8F#thankYou)

단순요청은 특별한 경우를 만족해야만 실행 가능한 방법이다.
1. 요청의 method가 'GET, HEAD, POST' 중 하나여야 한다.
2. Accept, Accept-Language, Content-Language, 
   Content-Type, DPR, Downlink, Save-Data, Viewport-Width, Width 
   헤더일 경우에만 적용된다
3. Content-Type 헤더가 application / x-www-form-urlencoded, 
   multipart / form-data, text / plain중 하나여야한다. 아닐 경우 예비 요청으로 동작된다.
   
   위 조건을 모두 만족되어 단순 요청이 일어나는 상황은 드물다고 보면 된다.
   왜냐하면 대부분 HTTP API 요청은 text / xml 이나 application / json 으로 통신하기 때문에 
   3번째 Content-Type이 위반되기 때문이다.

**따라서 대부분의 API 요청은 그냥 예비 요청(preflight)으로 이루어진다 라고 이해하면 된다.**

# 인증된 요청 (Credentialed Request)

인증된 요청은 클라이언트에서 서버에게 **자격 인증 정보(Credential)**를 실어 요청할때 
사용되는 요청이다.

**자격 인증 정보**란 세션 ID가 저장되어있는 쿠키(Cookie) 혹은 Authorization 헤더에 설정하는 
토큰 값 등을 일컫는다.

즉, 클라이언트에서 일반적인 JSON 데이터 외에도 쿠키 같은 인증 정보를 포함해서 
다른 출처의 서버로 전달할때 CORS의 세가지 요청중 하나인 인증된 요청으로 동작된다는 말이며, 
이는 기존의 단순 요청이나 예비 요청과는 다른 인증 형태로 통신하게 된다.

1. 클라이언트에서 인증 정보를 보내도록 설정하기
