# 동기, 비동기

`비동기처리` : 현재 실행중인 태스크가 종료되지않은 상태라 해도 다음 태스크를 실행하는 방식.

```
function a() {
  console.log("a");
}

setTimeout(() => {
  console.log("b");
}, 2000);

a();

// a -> b
```

`동기처리`: 현재 실행중인 태스크가 종료할때까지 다음에 실행될 태스크가 대기하는 방식
자바스크립트는 동기적이다.

```
function c(){
    //젼래 오래 걸리는 함수
}

c();
a();

//c -> a
```

`비동기 함수`: 함수내에 비동기적으로 동작하는 코드를 포함한 함수
<br />
비동기 함수를 호출하면 함수 내부의 비동기ㅣ로 동작하는 코드가 완료되지 않았다 해도 기다리지 않고 즉시 종료 된다.
<br />

ex) setTimeout은 비동기 함수이다. `콜백함수의 호출이 비동기`로 동작하기 때문이다.비동기 함수 내부에서 비동기로 동작하는 코드는 비동기 함수가 종료된 이후에 완료된다. 즉, setimeout이 종료된 후에 비동기 콜백함수가 호출된다.

<br />
비동기 하수는 비동기 처리 결과를 외부에 반환할 수 없고, 상위 스코프의 변수에 할당할 수도 없다. 따라서 비동기 함수의 처리 결과에 대한 후속처리는 비동기 함수 내부에서 수행해야한다.

<br />
이때 비동기 함수를 범용적으로 사용하기 위해 비동기 함수에 비동기 처리 결과에 대한 후속처리를 수행하는 콜백함수를 전달하는 것이 일반적이다. 비동기 함수 안에 콜백함수 형태.

<br />
이처럼 콜백 함수를 통해 비동기 처리 결과에 대한 후속 처리를 수행하는 비동기함수가 비동기 처리 결과를 가지고 또 다시 비동기 함수를 호출해야 한다면 콜백헬이 발생한다.
<br />
<br />
콜백 헬은 보기에도 복잡하고 에러 처리 한계가 존재한다.

```
try{
    setTimeout(()=> {throw new Error('Error!');, 1000});
}
catch(e){
    //에러를 캐치하지 못한다.
    console.log(e);
}

//
```

setTimeout 함수의 콜백 함수가 실행될때 setTimeout 함수는 이미 콜 스택에서 제거된 상태다. 이것은 setTimeout 함수의 콜백함수를 호출 한 것이 setTimeout 함수가 아니라는 것을 의미한다..(?)
setTimeout의 콜백함수의 호출자가 setTimeout 함수라면, 콜스택의 현재 실행중인 컨텍스트가 콜백함수의 실행 컨텍스트일때, 그 하위 콘텍스트각 setTimeout 함수 여야한다.

```
<에러를 캐치하기 위해 기대하는 call stack>

|                                  |
| ()=> {throw new Error('Error!')  |
| setTimeout                       |
|                                  |
 ----------------------------------


 <실제 call stack>

|                                  |
| ()=> {throw new Error('Error!')  |
 ----------------------------------
```

에러는 호출자 방향으로 전파된다. 즉, 콜 스택의 아래 방향으로 전파된다. 하지만 setTimeout 함수의 콜백 함수를 호출 한 것은 setTimeout 함수가 아니다. 띠라서 setTimeout 함수의 콜백 함수가 발생시킨 에러는 catch 블록에서 캐치되지 않는다.

<br />
<br />
<br />

# Promise

```
const promise = new Promise((resolve,reject) => {
    if(비동기 처리 성공){
        resolve('result');
    }else{
        reject('fail');
    }
})
```

Promise 생성자 함수를 new 연산자와 함께 호출하면 `Promise 객체`를 생성한다.
Promise 생성자 함수는 비동기 처리를 수행할 콜백함수를 인수로 전달 받는데 이 콜백 함수가 resolve와 reject executor 함수이다.

<br />

- 프로미스의 상태

`pending` : 비동기 처리가 아직 수행되지 않은 상태
<br />
`fulfilled` : 비동기 처리가 수행된 상태(성공) -> resolve 함수 호출시
<br />
`rejected` : 비동기 처리가 수행된 상태(실패) -> reject 함수 호출

```
const promise = new Promise(resolve => resolve(1));

console.log(promise);

Promise {<fulfilled>: 1}
[[Prototype]]: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: 1
```

promise 객체는 비동기 처리 상태와 처리 결과를 관리하는 객체이다.

<br />
<br />

## promise의 후속처리 메서드

<br />

프로미스의 비동기 처리 상태가 변화하면 이에 따른 후속 처리를 해야한다.
fulfilled, reject 상태에 따른 후속 처리가 필요하다.

### then, catch, finally

- then (Promise.prototype.then)

```
new Promise(resolve => resolve('성공'))
.then(v => console.log(v), e => console.log(e)); //fulfilled

new Promise(_, reject => reject(new Error('실패')))
.then(v => console.log(v), e => console.log(e)); //fulfilled

```

then 메서드는 두 개의 콜백 함수를 인수로 전달 받는다.

첫번째 콜백 함수는 프로미스가 fulfilled 상태(resolve 함수가 호출된 상태)가 되면 호출된다. 이때 콜백 함수는 프로미스의 비동기 처리 결과를 인수로 전달받는다.

두 번째 콜백 함수는 프로미스가 reject상태(reject함수가 호출된 상태)가 되면 호출된다. 이때 콜백 함수는 프로미스의 에러를 인수로 전달받는다.

- catch (Promise.prototype.catch)

catch메서드는 한 개의 콜백함수를 인수로 전달받는다. catch 메서드의 콜백함수는 프로미스가 rejected 상태인 경우만 호출된다.

```
new Promise(_,reject => reject(new Error('실패')))
.then( undefined, e => console.log(e)); //Error: rejected

new Promise(_, reject => reject(new Error('실패')))
.catch( e => console.log(e));  //Error: rejected

```

- finally (Promise.prototype.finally)

finally메서드는 한 개의 콜백 함수를 인수로 전달 받는다. finally메서드의 콜백 함수는 프로미스의 성공이나 실패에 상관없이 무조건 한 번만 호출된다.

### 프로미스 체이닝

```
//promise의 후속 처리 메서드

promiseGet()
.then(() => {어쩌구 저쩌구})
.then(()=>{저쩌구 양양})
.catch(err => console.log(err));
```

then, catch, finally는 모두 `promise`를 반환한다. 따라서 프로미스 체이닝이 가능하다. 하지만 가독성이 좋지 않으므로 async/await 키워드를 사용하면 좋다. 후속처리 메서드 없이 마치 동기 처리 처럼 `프로미스가 처리 결과를 반환`하도록 구현 할 수 있다.

```
//async/await

(async () =>{
    const ID = await promiseGet();
    const nickname = await promiseGet('~~/ ${ID}');
})
```

### 프로미스 정적 메서드
