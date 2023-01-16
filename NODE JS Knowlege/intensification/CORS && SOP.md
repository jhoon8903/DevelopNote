#API #server #백엔드 #CORS 

# 교차 출처 리소스 공유 ( CORS ) [ Cross- Origin Resource Sharing ]

HTTP 헤더를 사용하여, ' 한 출처 (SOP)'에서 실행 중인 웹 어플리케이션이 다른 출처의 
선택한 자원에  '접근할 수 있는 권한'을 부여하도록 '브라우저'에 알리는 체제

웹 어플리케이션은 리소스가 자신의 출처 (도메인 , 프로토콜 , 포트 )와 다를 때 
출처 HTTP 요청(CORS)을 실행


교차 출처 요처의 예시 :  `https://domain-a.com`의 프론트 엔드 JavaScript 코드가 [`XMLHttpRequest`](https://developer.mozilla.org/ko/docs/Web/API/XMLHttpRequest)를 사용하여 `https://domain-b.com/data.json`을 요청하는 경우.
![](https://i.imgur.com/56tcuGt.png)

																					    [이미지 출처 : MDN]
보안상의 이유로, 브라우저는 스크립트에서 시작한 교차 출처 HTTP 요청을 제한
`XMLHttpRequest`와 [Fetch API](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API)는 [동일 출처 정책( SOP )](https://developer.mozilla.org/ko/docs/Web/Security/Same-origin_policy)을 따릅니다.
이 API를 사용하는 웹 애플리케이션은 자신의 출처와 동일한 리소스만(SOR) 불러올 수 있으며, 다른 출처의 리소스(CORS)를 불러오려면 그 출처에서 올바른 CORS 헤더를 포함한 응답을 반환해야한다.

## 기본적으로 CORS를 지원 하는 요소들
[`<script> <img> <video> <link>`]

## CORS를 필요로 하는 요소들 ( 기본적으로 SOP 정책을 따르는 요소들 )
-  [`XMLHttpRequest`](https://developer.mozilla.org/ko/docs/Web/API/XMLHttpRequest)와 [Fetch API](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API) 호출
- 웹 폰트 (CSS 내부에 @font-face에서 교차 도메인 폰트 사용시)
- [WebGL 텍스쳐](https://developer.mozilla.org/ko/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL)
- [`drawImage()` (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage "Currently only available in English (US)")를 사용해 캔버스에 그린 이미지/비디오 프레임
- [이미지로부터 추출하는 CSS Shapes. (en-US)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Shapes/Shapes_From_Images "Currently only available in English (US)")
- 자바스크립트에서의 요청은 기본적으로 서로 다른 도메인에 대한 요청을 보안상 제한한다.
- 브라우저는 기본적으로 하나의 서버 연결만 허용되도록 설정되어 있기 때문( 주로 자신의 서버 )

## 출처 ( Origin )

1. Origin : Protocol + Host + Port
	출처라는 것은 Protocol , Host, Port 모두를 합친 URL을 의미

## SOP (Same Origin Policy) 동일 출처 정책

![](https://i.imgur.com/iXtkJAL.png)
" 동일한 출처(origin)에서만 리소스를 공유할 수 있다. "

SOP가 필요한 이유
해커가 악의적으로 홈페이지에 접속하는 상황을 막기 위한 기본적 조치
![](https://i.imgur.com/5ehx3cA.png)
[`출처: inpa Dev`](https://inpa.tistory.com/entry/WEB-%F0%9F%93%9A-CORS-%F0%9F%92%AF-%EC%A0%95%EB%A6%AC-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95-%F0%9F%91%8F#thankYou)

동일한 출처란
URL 구성요소 중 Protocol(Schema), Host, Port 가 동일하면 같은 출처로 인지
![](https://i.imgur.com/DinqPKp.png)
[`출처: inpa Dev`](https://inpa.tistory.com/entry/WEB-%F0%9F%93%9A-CORS-%F0%9F%92%AF-%EC%A0%95%EB%A6%AC-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95-%F0%9F%91%8F#thankYou)

출처에 대한 비교는 서버가 아닌 브라우저에서 실행한다.
![](https://i.imgur.com/tFJ3fNo.png)
[`출처: inpa Dev`](https://inpa.tistory.com/entry/WEB-%F0%9F%93%9A-CORS-%F0%9F%92%AF-%EC%A0%95%EB%A6%AC-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95-%F0%9F%91%8F#thankYou)
응답 데이터는 요청 받은데로 정상적으로 전달하지만 브라우져에서 해당 reponse를 
동일출처정책으로 차단한다.

*CORS는 SOP로 막혀 받아올 수 없는  response 를 받을 수 있는 방법 중 하나 SOP 정책을 위반 
하더라도 CORS 정책을 따르면 받아 다른 출처의 리소스 허용이 가능하다*

## 브라우저 CORS 기본 동작

1. Client에서 HTTP 요청의 header에 Origin을 담아 전달
	1. Origin Field에 출처를 담아 보낸다.
![](https://i.imgur.com/jTxRTN6.png)

2. Server는 response header에 Access-Control-Allow-Origin을 담아 클라이어트로 전달
	1. ' 이 리소스를 접근하는 것이 허용된 출처'
![](https://i.imgur.com/seGzNK8.png)

3. 클라이언트에서 자신이 보냈던 request Origin 과 
      === 서버가 보내준 Access-Control-Allow-Origin 을 비교한다.
      1. 유효하지 않다면 ( !== ) CORS ERROR!
      2. 유효하다면 ( === ) 다른출처의 리소스를 가져온다.
![](https://i.imgur.com/IaffwCV.png)


*서버에서 해야할 일은 이  response "Access-Control-Allow-Origin" 을 헤더에  허용할 출처를 기재해서 클라이언트에 응답을 하면 된다. *