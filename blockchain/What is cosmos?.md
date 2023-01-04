# What is Cosmos?

### 1세대 비트코인

비트코인은 2008년에 등장한 Proof of Work 기반 블록체인 암호화폐이다. 비트코인은 network, consensus, application 계층이 혼합된 코드 베이스를 가졌다. script 언어가 제한적이고 유저 친화적이지 않았다.

### 2세대 이더리움

2014년, 이더리움이 스마트 컨트랙트와 함께 등장한다. 스마트 컴트렉트는 블록체인 기술을 활용해 제 3의 인증기관없이 개인 간 계약이 이루어질 수 있도록 하는 기술이다. 이더리움은 application layer를 스마트 컨트랙트 기술을 탑재한 Ethereum Virtual Machine (EVM)으로 탈바꿈 하였다. 이를 통해 많은 개발자들이 dApp을 만들 수 있게 되었다.
비트코인은 암호화폐의 거래만 가능한 반면 이더리움은 dApp 개발이 가능하다.
dApp은 soliditiy라는 프로그래밍 언어로 작성되고 솔리디티로 작성된 dApp을 이더리움 네트워크에 배포한다. 솔리디티는 고급언어이므로 solc을 이용해 컴파일하여 EVM이 읽을 수 있는 바이너리 코드로 만든후 geth를 이용해 이더리움 네트워크에 배포한다.
블록체인에 저장된 바이트코드 형태의 dApp은 EVM에서 Opcode로 변환하여 실행하게 된다.

EVM: 이더리움 코드를 어떤 하드웨어에서든지 동일하게 실행시킬 수 있는 환경을 제공. 이더리움의 각 노드는 EVM을 포함하고 있다. 즉, 모든 이더리움 네트워크 참여자의 컴퓨터는 EVM을 갖게 된다.

이더리움 블록체인은 거래에 기반을 둔 상태머신이다. 상태머신이란 일련의 입력(트랜젝션)을 읽고 그 입력을 기반으로 새로운 상태로 전환하는 것을 의미한다. Genesis State에서 시작하여 트랜잭션이 실행되면, 다음 상태로 전환, 더이상 트랜잭션이 들어오지 않은 마지막 상태가 바로 이더리움 블록의 현재 상태이다.

#### 이더리움 계정

이더리움의 주소와 개인키의 조합을 계정이라고 한다.
이더리움에는 `외부 소유 계정`, `컨트랙트 계정`이 존재한다.


- 외부소유계정(EOA)
공개 이더리움 주소와 개인키의 조합. 지갑주소라고 이해하면 된다.
다른 계정과 이더리움을 송수신하고, 스마트 컨트랙트에 트랜젝션을 보낼 수 있다. 

- 컨트랙트 계정(CA)
개인키가 존재하지 않고, 스마트 컨트랙트를 블록체인에 배포할 때 생성된다.즉, 스마트 컨트랙트 계정.
CA는 EOA가 만든 컨트랙트만 실행이 가능하며 생성 할 수 없다. 

EOA는 사람이 소유한 계정으로 보면 되고 CA는 스마트 컨트랙트 계정으로 이해하면 됩니다. 이더리움의 스마트 컨트랙트는 솔리디티 같은 프로그래밍 언어로 작성해서 사람이 이더리움에 배포합니다(배포할때 EOA계정이 필요하겠죠). 컨트랙트를 배포하면 CA가 생성됩니다.

사용자들이 스마트 컨트랙트를 통해 어떤 "계약"을 한다는 의미는 각 EOA계정이 스마트 컨트랙트에 뭔가 기록을 하고, 그렇게 위변조가 불가능한 "코드"에 의해 계약이 실행된다는 의미입니다.  물론 우리가 흔히 생각하는 법적인 강제성이 있는 계약은 아니지만 최소한 이더리움 안에서는 "self-executed"되는 코드입니다.

사용자들이 이더리움과 정보를 주고 받을 수 있도록 하는 것은 일종의 애플리케이션이고 그것을 탈중앙화 애플케이션 "Dapp"이라고 합니다. 당연히 애플리케이션은 CA계정주소를 알아야 하겠죠.

사용자 간 "계약"이라고 이해하면 어려우니 그냥 애플리케이션을 통해 사용자들이 이더리움 상에서 서로 데이터를 주고 받는다고 생각하면 됩니다. 일반적인 애플리케이션과의 차이점은 스마트 컨트랙트에 한번 저장된 코드와 데이터는 임의로 위변조가 불가능하고 데이터 변경은  EOA 계정의 전자서명으로 이루어지므로 마치 계약처럼 동작한다고 할 수는 있겠습니다.