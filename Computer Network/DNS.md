# DNS

### URL과 도매인

![](https://velog.velcdn.com/images%2F0sunset0%2Fpost%2F5e75cb81-982a-44d6-bf7c-8c6b6c433c4b%2Fimage.png)

URL: http://opentutorials.org:2000/main?d=HTML&page=12

<br />

# DNS란?

모든 웹 사이트의 호스팅 서버는 IP주소(127.111.111.111)가 할당되어있다.
서버의 IP주소로 접속하기 위해 서버의 IP주소를 알아야 한다.
IP주소를 외우는 것은 쉽지 않기에 우리는 naver.com과 같은 도메인의 이름을 이용한다.
도메인이름으로 검색을 하였을 때, 해당 도메인의 이름과 IP주소를 mapping하는 것이 DNS(Domain Name System)이다.

\*\* IP: internet protocol, 고유한 주소를 의미

DNS는 (1) DNS 서버들의 계층구조로 구현된 분산 데이터베이스이고, (2) 호스트가 분산 데이터베이스로 질의하도록 허락하는 애플리케이션 계층 프로토콜이다.

### DNS name servers

DNS는 분산된 데이터베이스로 계층적으로 구성된다.

- Top level domain name

![](https://velog.velcdn.com/images%2Fckstn0777%2Fpost%2Fd8c3ac1e-36ee-4ecb-93dc-1d37669c4928%2Fimage.png)

DNS 서버는 하나가 아닌, 분산 계층 데이터베이스이다.

### 동작과정

1. Local DNS server
2. Root DNS server
3. TLD DNS server
4. Authoritive DNS server

<br />

- iterative 방법

  ![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbjPBu0%2FbtquRckHLhL%2FwPLSr0kMmA3m4izOaHFwU0%2Fimg.png)

  1. host가 가까운 local DNS 서버에게 www.naver.com을 아냐고 물어본다.
  2. local DNS 서버가 캐시해둔 것이 없으면 Root DNS 서버에게 물어본다.
  3. Root DNS 서버는 '.com'의 서버에 대한 정보를 알고있고, 이를 local DNS 서버에게 보낸다.
  4. local DNS 서버가 TLD DNS 서버에게 naver.com을 책임지는 서버를 물어보고 TLD DNS 서버가 해당 서버를 알려준다.
  5. Authoritive DNS server는 www.naver.com의 IP주소를 가지고 있으며 이를 local DNS 서버에게 알려준다.
  6. local DNS 서버가 host에게 ip주소를 알려준다.
  7. host는 해당 ip주소를 가진 서버에게 웹 페이지를 요청한다. (request)

<br />

- recursive 방법
  ![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FEA4rc%2FbtquSqPRO2a%2Fz4MLeK00VQk3R7suDgAlBK%2Fimg.png)

<br />

실제 DNS 서버의 동작 방식은 iterative, recursive 를 함께 사용함으로써 효율성을 높인다.
