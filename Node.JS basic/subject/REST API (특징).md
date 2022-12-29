#API #nodeJS #expressJS #백엔드 #API_Specification 
# Representational State Transfer

URI를 통해 자원을 표시하고, HTTP Method를 이용하여 해당 자원의 행위를 규정하여 
그 결과를 받는것이다 

구성 
[[자원 Resource]] :  URI
행위 Verb : HTTP Method
표현 Representations

# REST 특징
## Uniform
	- Uniform Interface : URI로 지정한 리소스에 대한 조작을 통일되고 한정적인 
											  인터페이스로 수랭하는 아키텍쳐

## Stateless
	- 무상태성 성격을 갖는다. 작업을 위한 상태 정보를 따로 저장하고 관리하지 않는다.
	- 세션 정보나 쿠키 정보를 별도로 저장하고 관리하지 않기 때문에 API 서버는 들어오는 요청만을 
	    단순히 처리하면 된다. 
	- 서비스의 자유도가 높아지고 서버에서 불필요한 정보를 관리하지 않음으로써 구현이 단순해진다.

## Cacheable
	- TTP라는 기존 웹 표준을 그대로 사용하기 때문에, 웹에서 사용하는 기존 인프라를 그대로 활용
	- HTTP가 가진 캐싱 기능 적용이 가능하다.
	- HTTP 프로토콜 표준에서 사용하는 Last-Modified 태그나 E-Tag를 이용해 구현할 수 있다.

## Self - descriptiveness
	- REST API 메시지만 보고도 이를 쉽게 이해할 수 있는 자체 표현 구조로 되어 있다.

## Client - Server 구조
	- REST서버는 API 제공, 클라이언트는 사용자 인증이나 컨텍스트(세션, 로그인 정보) 등을 
	    직접 관리하는 구조로 각각의 역할을 확실하게 구분한다.
	- 클라이언트와 서버에서 개발해야 할 내용이 명확해지고 서로 간 의존성이 줄어든다.

## 계층형 구조
	- REST 서버는 다중 계층으로 구성될 수 있으며 보안, 로드 밸런싱, 암호화 계층을 추가해 구조 
	    상의 유연성을 둘 수 있고 PROXY, 게이트웨이 같은 네트워크 기반의 중간 매체를 사용할 수 
	    있게 한다.


# 설계원칙

1. URI 는 정보의 리소스를 표현해야 한다.
		- 행위에 대한 표현이 아닌 리소스를 표현하는데 중점을 두어야 한다.
		- 리소스명은 동사보다 명사를 사용한다.

2. 리소스에 대한 행위는 HTTP Method로 표현한다.
		Method [ Create / Read / Update / Delete ]  통칭 'CRUD'
			- POST : 리소스의 입력
			- GET : 리소스의 출력
			- PUT / PATCH : 리소스의 수정  (PUT은 전체수정) / (PATCH는 일부수정) 
			- DELETE : 리소스의 삭제

3. ( / ) 구분자는 계층 관계를 내포
4. URI의 마지막 문자로 ( / )를 포함하지 않는다.
5. ( - )은 URI의 가독성을 높이는데 사용 할 수 있다.
6. ( _ )는 URI에 사용하지 않는다.
7. URI 경로는 소문자를 사용한다,
		- RFC3986(URI 문법 형식)은 schema 와 Host를 제외하고는 upper와 lower를 
	  구별하도록 규정
8. 파일확장자는 URI에 포함시키지 아니한다.\
		- 