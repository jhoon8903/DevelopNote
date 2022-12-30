#API #nodeJS #expressJS #백엔드 #API_Specification 

# Representational State Transfer

URI를 통해 자원을 표시하고, HTTP Method를 이용하여 해당 자원의 행위를 규정하여 
그 결과를 받는것이다 

# 여기서 URI 란?

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

### URL (Uniform Resource Locator) 파일 식별자
	- 네트워크 상에서 자원이 어디 있는지 위치를 알려주기 위한 규약
	- Computer Network와 검색 메커니즘에서의 위치를 지정하는, Web Resource에 대한 참조
	- 웹 사이트의 주소 뿐만 아니라, Computer Network상의 모든 자원을 나타내는 표기법
	- 해당 주소에 접속하려면, URL에 맞틑 Protocol (http / sftp / smp... 등등등)을
	  알아야하고, 그와 동일한 Protocol로 접속해야한다.

### URN (Uniform Resource Name) 통합 자원이름
	- urn:scheme을 사용하는 URI를 위한 역사적 이름
	   + 스킴(scheme) : 구체적이고 확정 된것 / 자료구조, 리스트를 편하게 쓰기위한 
								     고급프로그래밍 언어 (AI분야에서 많이 쓰임)  !== Schema
	- URL이 위치를 지정한다면, URN은 Resource에 이름을 부여하는 것
	- URN은 영속적이며 위치에 도릭접인 자원을 위한 지시자로 사용하기 위해서 
	    1997년 RFC 2141 문서서 정의됨.
	    + IETF 표준규격 [RFC 2141, RFC 3406] 
	    + URN은 유일성, 영속성ㆍ확 장성ㆍ융통성ㆍ규모성 등을 제공할 수 있어야 한다라는 내용.
	- Resource가 Name에 Mapping 되어 있어야 하기에 거의 찾기가 힘들다.
	   그래서 대부분 URL을 사용

### 각 요소 구분하기

![](https://i.imgur.com/YkhU9Hj.png)
