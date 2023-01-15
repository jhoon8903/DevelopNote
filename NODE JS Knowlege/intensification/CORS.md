#API #server #백엔드 

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
해커가 
