#API #nodeJS #expressJS #백엔드 #API_Specification 

# Representational State Transfer

URI를 통해 자원을 표시하고, HTTP Method를 이용하여 해당 자원의 행위를 규정하여 
그 결과를 받는것

## URI || URL || URN

![400](https://i.imgur.com/hCzFxRi.png)

URI : 자원의 식별자
URL : 자원을 위치
URN : 자원의 이름

### URI (Uniform Resource Identifier) 통합 자원 식별자
	- 통합 자원 식별자는 인터넷에 있는 자원을 어디에 있는지 '자원 자체를 식별하는 방법'
		+ Unirorm : Resource를 식별하는 통일된 방식
		+ Resource : 자원 / URI로 식별 할 수 있는 모든 것
								   L: 웹브라우저의 파일만이 아닌 실시간 교통정보 등 우리가 구분할 수 있는
									     모든것이 Resource
		+ Identifier : 다른 항목과 구분하는데 필요한 정보
	- URI는 인터넷에서 요구되는 기본조건으로 인터넷 프로토콜에 항상 붙어 다님
		+ 프로토콜 (Protocol) : 컴퓨터간에 원활한 통신을 위해 지키기로 약속한 규약,
												신호처리법, 오류처리, 암호, 인증, 주소 등을 포함한다.
			++ 원활한 통신을 위해선 반드시 프로토콜을 통일시켜야 한다. 
				  그래서 전세계에서 쓰이는 프로토콜을 통합시킨 국제 표준 통신규약이 존재한다. 
				  이 표준 프로토콜은 UN 산하의 ITU라는 기관에서 국제통신규약을 만들어 사용한다.
				  +++ 인터넷 프로토콜 : HTTPS / HTTP / feed / tel / mailto / IPFS
	- 하위개념으로 URN / URL이 있다 (사진 참조)

## URL (Uniform Resource Locator) 파일 식별자
	- 네트워크 상에서 자원이 어디 있는지 위치를 알려주기 위한 규약
	- Computer 와 Network 