GET
- 리소스를 조회한다.  
- 서버에 전달하고 싶은 데이터는 qeury(쿼리 파라미터, 쿼리 스트링)를 통해서 전달한다.  
- 메시지 바디를 사용해서 데이터를 전달할 수 있지만, 지원하지 않는 곳이 많아서 권장되지 않는다.

POST
- 새 리소스를 생성할 때 사용한다.  
- 메시지 바디를 통해 서버로 요청 데이터를 전달하고 처리하는데 사용한다. 단순히 데이터를 생성하거나 변경하는 것을 넘어서 프로세스를 처리해야 하는 경우가 해당한다. POST의 결과로 항상 새로운 리소스가 생성되는 것은 아니다.  
- JSON으로 조회 데이터를 넘겨야 하는데 GET 메서드를 사용하기 어려운 경우 등, 다른 메서드로 처리하기 애매한 경우 사용한다.

PUT
- 리소스를 대체한다.  
- 리소스가 없는 경우 생성한다.  
- 클라이언트가 리소스 위치를 알고 URI를 지정하는 점이 POST와의 차이점이다.  
- PATCH와의 차이점은, 리소스를 일부만 변경하는 경우에도 바뀌지 않는 속성을 모두 보내야 한다는 점이다.

PATCH
- 리소스를 부분적으로 변경한다.  
- PUT과 달리, 변경할 값만 보내면 된다.

DELETE
- 리소스를 삭제한다.

HEAD
- GET과 동일하지만 메시지 부분을 제외하고, 상태 줄과 헤더만 반환한다.

OPTIONS
- 대상 리소스에 대한 통신 가능 옵션(메서드)을 설명한다.  
- 주로 CORS에서 사용한다.

CONNECT
- 대상 자원으로 식별되는 서버에 대한 터널을 설정한다.

TRACE
- 대상 리소스에 대한 경로를 따라 메시지 루프백 테스트를 수행한다.


