# Bundling

<br /> !! 번들러공부는 더 필요함
<br />
<br />

모듈들의 의존성 관계를 파악하여 그룹화시켜주는 작업.
쉽게 말해 지정한 메인 파일에서 시작하여 자바스크립트의 require과 import(ES6)문을 참고하여 프로젝트의 모든 의존성을 조사하고 로더를 이용해 처리한 후 번들로 묶은 자바스크립트 파일을 생성한다.
<br />
`모듈: 분리된 파일`
<br />
<br />

- 모듈의 개념이 생기기 이전

```
<script src="jquery.js"></script>
<script src="zepto.js"></script>
<script>
window.$ // ???
</script>
```

import, export가 생성되기 이전에 js를 불러오는 레거시 방식이다. 순수한 자바스크립트에는 모듈이라는 개념이 분명하게 존재하지 않는다.
document.~~로 돔을 직접 건들이고, 파일이 늘어나며 어떤 파일을 먼저 불러오는지에따라 결과가 달라진다.

<br />

1. 여러개의 파일을 브라우저에서 로딩한다면 네트워크가 그만큼 소모되어 속도가 저하된다.
   <br />
2. 각 js파일 간의 변수 충돌 등의 위험성이 존재한다.
   <br />

js파일을 효율적으로 관리하기 위한 것이 CommonJS이다.

### CommonJS

모듈의 dependency를 정의하는 명세.
모듈간 어떻게 의존성을 가지게 할지 정의한다.

- commonJS

`require`와 `module.exports` | `exports`

export 와 module.export차이

```
// exports로 내보내기
//func.js
function func1 (param) {
	// ...
}

function func2 (param) {
	// ...
}

exports.func1 = func1
exports.func2 = func2
```

```
//require로 가져오기
const obj = require('./func')

obj.func1(10)
obj.func2(20)
```

```
// module.exports로 내보내기
// func.js
const obj = {

    func1: function (num) {
    	// ...
    },

    func2: function (num) {
    	// ...
    }
}

module.exports = obj
```

```
//require로 가져오기
const obj = require('./func')

obj.func1(10)
obj.func2(20)
```

<br />

- 모듈화

```
스코프(Scope): 모든 모듈은 자신만의 독립적인 실행 영역이 있어야 한다.
정의(Definition): 모듈 정의는 exports 객체를 이용한다.
사용(Usage): 모듈 사용은 require 함수를 이용한다.
```

ES2015(ES6)에서 모듈(module)을 도입함.

<br />

## bundling

<br />

![bundler](https://blog.kakaocdn.net/dn/cNBE4q/btq4K9syJFE/KboaLr30F7STXxdVqsLUI0/img.png)

**번들링 필요성**: 모듈의 수가 늘어나고 모듈간의 종속성이 문제가 됨. 모듈간의 의존성을 분석하여 여러개의 모듈을 하나의 chunk로 묶는 모듈 번들러가 필요하게 됨. entry point(진입점)만 지정하면 된다.

**번들러 종류**

1. Webpack
2. browserify
3. Parcel

   ...

**번들러의 작업**

1. 의존성 그래프 생성
   entry point에서 시작하여 모든 코드의 종속성을 해결하고 그래프로 구성한다.
   의존성 그래프를 생성하기 위해서는 파일의 이름, 식별자, 파일의 경로, 파일의 코드, 파일의 의존성 정보가 필요하다. js에서는 객체를 통해 나타낸다.

   ![](https://velog.velcdn.com/images/wynter_j/post/b2b6eb32-b95a-4b38-9cf8-b0b3174cec1e/image.png)

   위 정보를 바탕으로 앤트리 파일을 중심으로 관계성 맵을 그린다.
   각 파일에 고유한 id를 부여하면서 종속성을 탐색한다.
   이때 생성되는 것이 module map이다.

   ![](https://velog.velcdn.com/images/wynter_j/post/1f26d9c2-ae3f-485d-a23d-ebae4eb3196b/image.png)

<br />

2. 번들링
   ![](https://velog.velcdn.com/images/wynter_j/post/35fa60c4-d6cf-4091-a614-6f0e597477ec/image.png)
