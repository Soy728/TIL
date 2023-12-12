# SOP & CORS

### CORS(Cross Origin Resource Policy)

다른 출처간의 리소스 공유를 가능하도록 해줌.

### SOP(Same Origin Policy)

동일 출처 정책
origin으로 부터 로드된 document 또는 script가 다른 origin의 리소스와 상호작용 할 수 있는 방법을 **제한**하는 보안 메커니즘.
악의적인 리소르를 분리해서 공격의 경로를 줄일 수 있음.

프로토콜, 호스트, 포트를 비교하여 Same Origin을 가지는지 판단한다.

```
 https://www.soyStudyWeb.com:443/path/test.html

https -> 프로토콜
www.soyStudyWeb.com -> 호스트
443 -> Port

```

<br />

```
SOP가 없다면 발생할 수 있는 시나리오.

해커가 하나의 해킹 사이트를 만든다. 유저는 구글에 로그인이 된 상태로 해당 사이트에 들어간다.
사이트에는 유저의 브라우저에 저장된 쿠키를 가지고 구글 메일 서버에 요청을 보낸뒤 결과 값을 자신의 서버로 보낸다.

-> 사이트 한번만 클릭 했을 뿐인데 다 털릴 수 있겠네여ㅠㅠ
```

<br />

- SOP가 적용되어 크로스 도메인이 불가능한 경우

1. API 요청: Ajax(XMLHttpRequest, XHR), Fetch API

```
fetch('https://api.testcode.com/profile')
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.error('에러 발생:', error)); -> 에러
```

2. 다른 origin의 도큐먼트 접근

```
const windowOrigin = window.open('https://testcode.com');
console.log(windowOrigin.location.href);
-> null, undefined
```

open은 되나 값 접근 불가.

<br />

`VM8129:1 Uncaught DOMException: An attempt was made to break through the security policy of the user agent.
    at <anonymous>:1:35`

3. iframe내에서 도큐먼트 불러오기.

```
- <iframe id='test' src='https://testcode.com'/>

-> 접근은 됨.
그러나 test 도큐먼트의 값에 접근하는 것은 불가능함.

```

4. 브라우저의 데이터베이스 접근

   로컬 스토리지, 세션스토리지와 같은 웹 자체의 데이터베이스는 origin 마다 하나씩 생성이 되고, 생성된 데이터베이스는 same-origin을 갖는 도큐먼트나 스크립트만 접근이 가능하다.

<br/>

- SOP가 적용되지 않는 경우.
  Cross-origin embedding

  - <script src=""></script>
    script 태그로 다른 도메인을 요청하는 방식은 JSONP라고 한다. JSONP는 CORS가 활성화 되기 이전의 데이터 요청 방법이다. 이제는 보안상의 이슈로 사용 X.
  - `<img>` `<video>` `<audio>`
  - <iframe>
       ...

    Cross-origin writes (preflight 제외)

    - CSRF 정책 : cross origin일 경우에 데이터에 write는 가능함. 이를 이용한 범죄를 막기 위한게 CSRF 정책.

<br/>
<br/>

- 해결방안

### CORS

서버에서 response를 줄 때, response 헤더에 허용할 origin 만을 "Access-Control-Allow-Origin"에 추가해 주면 크로스 오리진일 경우에도 데이터를 받아올 수 있다.

Access-Control-Allow-Origin:\*
모든 사이트의 접근을 허용.

Access-Control-Allow-Origin": https://www.naver.com/
특정 사이트만을 허용

<br/>

참고: https://www.youtube.com/watch?v=6QV_JpabO7g&t=648s

<br/>
