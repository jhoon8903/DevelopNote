
https://better-together.tistory.com/140
# TCP (Transmission Control Protocol)
	- 서버와 클라이언트간 신뢰성이 있는 데이터 송 • 수신을 위해 만들어진 Protocol
	- 연결 지향성 ( Connection Oriented ) Protocol
	- data를 나눠서 보낼 수 있으며(Inititor), 받는쪽(Receiver)에서 나누어 받은
		  데이터를 제조립, 누락이 있으면 재요청하여 완전한 Data를 만듬
	- TCP로  Server ⌁ Client 된 경우 데이터를 양방향으로 주고 받을 수 있다.
	- Data의 순서가 뒤바뀌는 일이 없어 신뢰가 가능
	- UDP에 비해 송수신 Cost가 큼
	- UDP에 비해 전송 속도가 느림

# UDP ( User Datagram Protocol )
	- 비연결성 단방향 통신 Protocol
	- Data를 보내도 제대로 recive 했는지 확인이 되지 않아 신뢰도가 떨어짐
	- Inititor가 순차적으로 Data를 보내도 Reciver는 다른 순서로 전달 받을 수 있음
	- Data를 보내기만 하고 별도의 처리가 없어 TCP에 비해 Cost 발생이적음
	- TCP 보다 전송속도가 빠름
	