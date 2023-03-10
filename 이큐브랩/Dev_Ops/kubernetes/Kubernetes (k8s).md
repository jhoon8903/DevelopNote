#kubernetes #AWS 
k8s = Kubernetes의 k [u b e r n e t e] s 사이에 8글자가 있어서 줄여서 k8s라고 쓰이는 경우가 있음

# Kubernetes 쿠버네티스

![](https://i.imgur.com/mjVCFhk.png)

![](https://i.imgur.com/1HJ2Kkt.png)
[컨테이너 개발 시대]('https://kubernetes.io/ko/docs/concepts/overview/')

## Container Deployment (중요하다고 생각 되는 것)

- 기민한 애플리케이션 생성과 배포 : 가상환경개발 이미지를 사용하는 것에 비해 컨테이너 이미지 생성이 보다
							  쉽고 효율적 (별도의 OS설치가 없어 무게가 가볍다)
- 지속적인 개발, 통합 및 배포 : 이미지의 불변성으로 쉽고 빠르게 롤백이 가능하다.
- 개발, 테스팅 및 운영 환경에 걸친 일관성 : 노트북,  데스크탑, 해외 등 장소에 구애받지 않고 동일하게 작동
- 애플리케이션 중심 관리 : OS를 실행하는 수준이 아닌 애플리케이션을 실행하는 수준으로 추상화 수준향상
- 자유로운 마이크로서비스 : 단일목적의 머신에서 모놀리식 스택으로 구동 되지 않고 마이크로 단위의 동적 배포
- 리소스 격리 : 애플리케이션 성능을 예측이 가능

## k8s는 무엇을 할 수 있나.

- 서비스 디스커버리와 로드밸런싱 : k8s는 DNS 및 자체 IP 주소를 사용하여 컨테이너를 노출시킬 수 있음
							  컨테이너에 대한 트래픽이 많으면, k8s는 네트워크 트래픽을 로드밸런싱
							  하고 배포하여 배포가 안정적으로 이루어질 수 있다.
- 스토리지 오케스트레이션 : 로컬저장소, 공용 클라우드 공급자 등과 같이 원하는 저장소 시스템을 자동으로
						  탑재할 수 있다.
	- k8s는 단순 오케스트레이션 시스템이 아니다. k8s는 오케스트레이션의 필요성을 없애준다. 
	  오케스트레이션의 기술적인 정의는 A를 먼저 한 다음, B를 하고, C를 하는 것과 같이 정의된 
	  워크플로우를 수행하는 것이다. 
	  반면에, k8s 독립적이고 조합 가능한 제어 프로세스들로 구성되어 있다. 
	  이 프로세스는 지속적으로 현재 상태를 입력받은 의도한 상태로 나아가도록 한다. 
	  A에서 C로 어떻게 갔는지는 상관이 없다. 중앙화된 제어도 필요치 않다. 
	  이로써 시스템이 보다 더 사용하기 쉬워지고, 강력해지며, 견고하고, 회복력을 갖추게 되며, 
	  확장 가능해진다.
	  
- 자동화된 롤아웃과 롤백 : 자동화해서 배포용 새 컨테이너를 만들고, 기존 컨테이너를 제거하고, 
					  모든 리소스를 새 컨테이너에 적용할 수 있다.
- 자동화 된 bin packing : 컨테이너화된 작업을 실행하는데 사용할 수 있는 쿠버네티스 클러스터 노드를 
					  제공한다. 각 컨테이너가 필요로 하는 CPU와 메모리(RAM)를 쿠버네티스에게 
					  지시한다. 쿠버네티스는 컨테이너를 노드에 맞추어서 리소스를 가장 잘 사용할 수 
					  있도록 해준다.
- 복구 자동화 self-healing : 쿠버네티스는 실패한 컨테이너를 다시 시작하고, 컨테이너를 교체하며, 
						'사용자 정의 상태 검사'에 응답하지 않는 컨테이너를 죽이고, 서비스 준비가 
						끝날 때까지 그러한 과정을 클라이언트에 보여주지 않는다.
- 보안구성 관리 : 쿠버네티스를 사용하면 암호, OAuth 토큰 및 SSH 키와 같은 중요한 정보를 저장하고 
			  관리 할 수 있다. 컨테이너 이미지를 재구성하지 않고 스택 구성에 보안사항을 노출하지 않고도 
			  보안 및 애플리케이션 구성을 배포 및 업데이트 할 수 있다. 

## k8s에서 지원하지 않는 것
### [[AWS EKS]]에서 추가적인 서비스를 제공한다.
- 애플리케이션 레벨의 서비스를 제공하지 않는다.
	  - 미들웨어(메세지 버스)
	  - 데이터처리 프레임워크
	  - 데이터베이스
	  - 캐시 또는 클러스터 스토리지 시스템(Ceph)
- 로깅, 모니터 또는 경보 솔루션을 포함하지 않는다. 개념증명을 위한 일부 통합이나. Metric를 수집하고
  노출하는 메커니즘을 제공
- 포괄적 머신 설정, 유지보수, 관리, 자동 복구 시스템을 제공하지 않음