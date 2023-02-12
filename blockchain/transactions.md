# Transactions

트렌젝션은 application에서 end-user에 의해 상태가 변화되었을때 생성된다.

사용자가 application을 통해 상태를 변경하려고 한다면(e.g.코인을 보내는 것) 트렌젝션을 만들어야 한다. 각 트렌젝션의 sdk.Msg는 네트워크에 브로드캐스트 되기전에 계좌와 연관된 개인키를 통해 서명이 되어야 한다. 트렌젝션은 블록안에 포함되어야 하고 consensus 과정을 통해 검증이 되어야한다.

### Signing transactions

트랜잭션의 모든 메시지는 `GetSigners`가 지정한 주소로 서명되어야 합니다. 코스모스 SDK는 현재 두 가지 다른 방식으로 서명 트랜잭션을 허용한다.

1. SIGN_MORE_DIRECT (preferred)

가장 많이 사용되는 tx 인터페이스는 SIGN_MODE_DIRECT에서 사용되는 Protobuf Tx이다.

protobuf 직렬화는 deterministic하지 않다. 따라서 cosmos sdk에서는 추가적으로 트랜젝션이 서명되었다는 것을 뜻하는 고정된 바이트를 표시하시 위해 `TxRaw`타입을 사용한다.

어떤 유저든 유효한 트랜젝션을 위한 `body`와 `auth_info`를 만들 수 있고, protobuf를 통해 두개의 메세지로 직렬화된다.
그런 다음 `TxRaw`는 `body`와 `auth_info`의 사용자의 정확한 이진 표현을 각각 `body_bytes`와 `auth_info_bytes`라고 하는 핀으로 고정합니다

모든 서명자들에 의해 서명이 되면 `body_bytes` 와 `auth_info_bytes`, `signatures`는 `TxRaw`로 합쳐진다. 그 다음에 네트워크로 브로드 캐스트 된다.


2. SIGN_MODE_LEGACY_AMINO_JSON

