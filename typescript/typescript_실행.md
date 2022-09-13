# typescript 실행

```
//전역으로 타입스크립트 설치
npm install -g typescript
```

### 1. javascript로 compile후 실행하는 방법

```
//컴파일 실행, 에러가 있어도 컴파일 된다.
tsc 파일이름.ts

//컴파일 실행, 에러가 있으면 컴파일 되지 않는다.
tsc --noEmitOnError 파일이름.ts
```

컴파일시 config.json 파일을 참조하여 파일이름.js 파일이 생성된다.

```
//node로 js파일을 실행한다.
node 파일이름.js
```

### 2. typescript 파일로 직접 실행하는 방법

node는 typescript를 해석하지 못하므로 ts-node 라이브러리를 설치해주어야 한다.

```
//ts-node 설치
npm install -g ts-node
```

```
ts-node 파일이름.ts
```
