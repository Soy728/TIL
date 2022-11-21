# Async & await

Async & await를 사용하면 비동기 함수를 동기 함수 처럼 사용 할 수 있다.

### Async 함수

async 함수는 promise를 반환한다. 따라서 후속처리메서드 (then, catch, finally)를 사용할 수 있다.

```
async function foo(n){ return n; }
foo(1).then(v => console.log(v));

const foo = async function (n){ return n; }
foo(1).then(v => console.log(v));

const foo = async (n) => { return n; }
foo(1).then(v => console.log(v));
```

### await 키워드

await 키워드는 프로미스가 settled 상태가 될 때 까지 대기하다가 settled 상태가 되면 resolve한 처리 결과를 반환한다. 따라서 비동기 함수를 동기함수처럼 사용할 수 있게 해준다. await는 async함수 안에서만 사용할 수 있으며, promise앞에서만 사용할 수 있다.

- 병렬처리 프로미스

```
// Promise.all 안에 배열로 프로미스들을 묶은 뒤, await 키워드를 앞에 붙인다.
async function foo(){
    const res = await Promise.all([
        new Promise(resolve => setTimeout(() => resolve(1), 3000)),
        new Promise(resolve => setTimeout(() => resolve(1), 2000)),
        new Promise(resolve => setTimeout(() => resolve(1), 1000)),
    ]);

    console.log(res);
}
```

- 순서가 보장되어야하는 프로미스

```
async function foo(){
    const a = await new Promise(resolve => setTimeout(() => resolve(1), 3000));
    const b = await new Promise(resolve => setTimeout(() => resolve(1), 2000));
    const c = await new Promise(resolve => setTimeout(() => resolve(1), 1000));

    console.log([a,b,c]);
}
```

### 에러처리

async 함수 내에서 catch문을 사용하여 에러처리를 하지 않으면 async 함수는 발생한 에러를 reject하는 프로미스를 반환한다. 따라서 async 함수를 호출하고 후속처리메서드(catch)를 사용해도 된다.

```
//try catch
const fetch = require("~~");

const foo = async() => {
    try{
        const URL = "~~";
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data);
    } catch(err){
        console.error(err);
    }
}

foo();
```

```
//후속 처리 메서드
const fetch = require("~~");

const foo = async() => {

    const URL = "~~";
    const response = await fetch(URL);
    const data = await response.json();

    return data;

}

foo().then(console.log).catch(console.error);
```

<br />

`모던 자바스크립트 deep dive을 읽고 정리하였습니다.`
