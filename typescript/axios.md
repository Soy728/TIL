# Axios

- Promise(ES6) API 사용
- 내장 함수은 fetch와 비슷하지만 axios의 브러우저 호환성이 더 좋다.

<br />

#### 서버에서 axios 설치

```
npm install axios
```

#### axios 문법

```
axios({
    method: "get", // 통신 방식
    url: "www.naver.com", // 서버
    headers: {'X-Requested-With': 'XMLHttpRequest'} // 요청 헤더 설정
    params: { api_key: "1234", langualge: "en" }, // ?파라미터를 전달
    responseType: 'json', // default

    maxContentLength: 2000, // http 응답 내용의 max 사이즈
    validateStatus: function (status) {
      return status >= 200 && status < 300; // default
    }, // HTTP응답 상태 코드에 대해 promise의 반환 값이 resolve 또는 reject 할지 지정
    proxy: {
      host: '127.0.0.1',
      port: 9000,
      auth: {
        username: 'mikeymike',
        password: 'rapunz3l'
      }
    }, // proxy서버의 hostname과 port를 정의
    maxRedirects: 5, // node.js에서 사용되는 리다이렉트 최대치를 지정
    httpsAgent: new https.Agent({ keepAlive: true }), // node.js에서 https를 요청을 할때 사용자 정의 agent를 정의
})
.then(function (response) {
    // response Action
});
```

params는 URL 파라미터 ( ?key=value 로 요청하는 url get방식을 객체로 표현한 것)

GET : 클라이언트에서 서버로 정보를 요청하기 위해 사용되는 메서드,
GET은 요청을 전송할 때 URL 주소 끝에 파라미터로 포함되어 전송된다.

```
# query : ? 뒤에오는 문자열, key value형태. 여러개의 쿼리가 존재하면 & 로 연결
# params : http://api/mintscan.io/v1/${chainId}/block
```

POST: 리소스를 생성/업데이트하기 위해 서버에 데이터를 보내는 데 사용된다. GET과 달리 전송해야될 데이터를 HTTP 메세지의 Body에 담아서 전송,
HTTP 메세지의 Body는 길이의 제한없이 데이터를 전송할 수 있습니다. 그래서 POST 요청은 GET과 달리 대용량 데이터를 전송할 수 있는 이유도 이 때문입니다.

#### axios 단축 메서드, CRUD

<br />

`create` :post <br />
`read`: get <br />
`update`: put <br />
`delete`: delete<br />

- get
  단순 데이터를 요청하는 경우, 파라미터 데이터를 포함하는 경우

```
axios.get(url[, config])
```

params 옵션을 주는 경우

```
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
```

axios는 promise이므로 후속처리함수, 혹은 async 함수내부에서 사용할 수 있다.

1. 후속처리함수

```
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

```

2. async 함수 (try, catch로 예외처리 해야함)

```
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

```

- post

```
axios.post(url[, data[, config]])
```

```
//데이터를 message body에 포함시켜 보낸다.

axios.post("url", {
		firstName: 'Fred',
		lastName: 'Flintstone'
    })
    .then(function (response) {
        // response
    }).catch(function (error) {
        // 오류발생시 실행
    })
```

- put

```
axios.put(url[, data[, config]])
```

- delete

```
axios.delete(url[, config])
```

#### create

```
// axios 인스턴스 생성

const instance = axios.create({
  baseURL: 'https://api.mintscan.io/',
  headers: { 'X-Custom-Header': 'foobar' },
  timeout: 1000,
})
```

인스턴스를 생성하여 axios 기본 세팅을 할 수 있다.

```
export async function getMintscanAPI<T>(arg: {
	path: string;
	query?: Record<string | number, string | number | undefined>;
}) {
	const { path, query } = arg;


	try {
		const ret = await axiosMintscan.get<T>(path, {
			params: query
		});
		return ret.data;
	} catch (e) {
		const error: any = e;
		if (axios.isAxiosError(e)) {
			//네트워크 애러, http error == status error == axis error
			//throw: 에러를 하위로 던짐. 하위에서 에러를 처리함.

			throw createHttpError(e.status || 400, e.message || '');
		} else {
			//네트워크 에러가 아닌, 컴퓨터의 문제. 코드가 잘못되었거나 시스템 메모리의 문제
			throw createHttpError(32, error?.message || 'Inline Error', error.stack || '');
		}
	}
}
```
