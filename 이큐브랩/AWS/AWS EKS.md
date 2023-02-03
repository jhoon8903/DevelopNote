#AWS #kubernetes #Docker

# Amazon Elastic Kubernetes Service(EKS)

![](https://i.imgur.com/YyheV1e.png)

## EKS 아키텍쳐
![](https://i.imgur.com/XPOWy9Y.png)

## EKS workflow
![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FqlLrf%2FbtrcokNqKPw%2FPkRgdRIkfrhYTAcotPeveK%2Fimg.png)
-   쿠버네티스의 api 서버를 각 가용영역에 배포
-   api 데이터, 쿠버네티스의 상태 데이터를 확인하기 위해 etcd를 같이 배포
-   쿠버네티스에서 오는 call 에 대한 IAM 구성
-   쿠버네티스 마스터 노드의 오토스케일링 설정
-   클러스터가 안정적으로 구현하도록 여기에 연결할 수 있는 로드밸런서를 구성

Amazon Elastic Kubernetes Service(Amazon EKS)는 AWS와 **온프레미스**에서 손쉽게 Kubernetes를 실행할 수 있는 관리형 [[Kubernetes (k8s)]] 서비스입니다.


## Amazon EKS 관리형 서비스
컨트롤 플레인을 직접 구서하지 않고서 [[Kubernetes (k8s)]]를 손쉽세 사용할 수 있도록 편리함을 제공
AWS에서 제공하는 [[AWS VPC]] , [[AWS ELB]] , [[AWS IAM]] 등 특정 기능들을 같이 활용하고자 할 때 유용

## EKS 특징

### 1. VPC(Virtual Private Cloud)와 통합
![](https://blog.kakaocdn.net/dn/bDGONb/btrcoletEn9/RL4k7sWzikrQRu3xqDyPxk/img.png)

일반적으로 k8s 클러스터에서는 파드 네트워크로 워커 노드의 네트워크와는 다른 자체 네트워크 체계를 배치.
	클러스터 자체 네트워크를 사용하기 때문에 명시적으로 엔드포인트를 설정하지 않으면 **클러스터 외부에서 
Pod 에 통신이 불가능, **EKS에서는 Amazon VPC 통합 네트워킹을 지원하고 있어 파드에서 VPC 내부 주소 대역을 사용할 수 있고 **클러스터 외부와의 통신이 가능**하고 심리스(Seamless)하게 구현할 수 있다.
[출처-집주변이최고야]('https://nearhome.tistory.com/128')
**심리스(Seamless): 서비스 접근을 단순하게 하는 것 혹은 복잡한 기술이나 기능을 설명하지 않아도 서비스 기능을 직관적으로 구현하는 뜻**

### 2. ELB와의 연계
![](https://blog.kakaocdn.net/dn/unW1I/btrcb81PoHK/BU6gLjl9lsIPqryVdKRv8k/img.png)
EKS 에서는 k8s의 서비스 타입 중 하나인 [[로드밸런서]]를 설정하면 **자동적으로 AWS의 로드밸런서 서비스인 
ELB가 생성** 이것으로 HTTPS나 경로 기반 라우팅 등 L7 로드밸런서 기능을 AWS 서비스로 구현 가능

### 3. IAM을 통한 인증과 인가
![](https://blog.kakaocdn.net/dn/TgQk5/btrcrNBwy1T/VkKmG1XxEjtOwX7QR5X8K1/img.png)
EKS 에서는 AWS IAM을 통한 인증과 인가를 제공

### 4. 워커노드 (Worker Node)
![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcRMPjV%2Fbtrci96Pw4z%2FjKHDvkCWdyUFHT897JczZk%2Fimg.png)

**워커노드 Customize 서비스** 생성 가능
![](https://blog.kakaocdn.net/dn/cCDoFd/btrcp1z9hp6/mjdujAJDHN7riBBF5d6KLK/img.png)

EKS 클러스터의 유지 관리나 버전 업그레이드할 때 필요한 가상 머신 설정을 쉽게 해주는 
관리형 노드 그룹 구조와 가상 머신을 의식하지 않고 Pod 를 배포할 수 있는 **파게이트(Fargate)**

하지만, 파게이트는 워커 노드 관리가 필요 없는 만큼 Pod가 배포되는 호스트에 사용자 접근도 제한되며 거기에 따른 제약도 있다.
![](https://i.imgur.com/cKOgiA3.png)

### 5. 저장소

#### Case 1 - Container Volume
![200](https://i.imgur.com/iINtpXW.png)

- 컨테이너가 종료되면 소실
- 호스트 노드의 메모리를 임시 캐시로 사용가능

#### Case 2 - Host Volume
![200](https://i.imgur.com/huHRJm5.png)

- 컨테이너가 다른 호스트에 재배치되면 접근 불가
- 컨테이너의 이미지 경량화를 위해 사용

#### Case 3 - Network Volume
![200](https://i.imgur.com/WImO6vD.png)

- 호스트에 독립적
- 컨테이너가 다른 쪽으로 스케줄링 되도 문제없음

1,2는 호스트의 가용성에 의존되어 있음.
Stateless 애플리케이션에 적합

### 6. 로깅 && 모니터링
![](https://blog.kakaocdn.net/dn/bTipAY/btrcea6a9qw/g0PuPq6VfrKZA93cdXSdF0/img.png)

![](https://blog.kakaocdn.net/dn/Nw4DA/btrctapJlnd/MIyVkEDmTq7a8nAQu30ksK/img.png)

![](https://blog.kakaocdn.net/dn/Nw4DA/btrctapJlnd/MIyVkEDmTq7a8nAQu30ksK/img.png)

![](https://blog.kakaocdn.net/dn/c84Kyv/btrceb46CNY/zTVJuuCUnwRqkSmtk2ADA1/img.png)
