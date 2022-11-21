# 동기, 비동기

**비동기처리** : 현재 실행중인 태스크가 종료되지않은 상태라 해도 다음 태스크를 실행하는 방식.

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

**동기처리**: 현재 실행중인 태스크가 종료할때까지 다음에 실행될 태스크가 대기하는 방식
자바스크립트는 동기적이다.

```
function c(){
    //젼래 오래 걸리는 함수
}

c();
a();

//c -> a
```

**비동기 함수**: 함수내에 비동기적으로 동작하는 코드를 포함한 함수
<br />
비동기 함수를 호출하면 함수 내부의 비동기로 동작하는 코드가 완료되지 않았다 해도 기다리지 않고 즉시 종료 된다.
<br />

ex) setTimeout은 비동기 함수이다. `콜백함수의 호출`이 **비동기**로 동작하기 때문이다. 비동기 함수 내부에서 비동기로 동작하는 코드는 비동기 함수가 종료된 이후에 완료된다. 즉, setimeout이 종료된 후에 비동기 콜백함수가 호출된다.

<br />
비동기 함수는 비동기 처리 결과를 외부에 반환할 수 없고, 상위 스코프의 변수에 할당할 수도 없다. 따라서 비동기 함수의 처리 결과에 대한 후속처리는 비동기 함수 내부에서 수행해야한다.

<br />
이때 비동기 함수를 범용적으로 사용하기 위해 비동기 함수에 비동기 처리 결과에 대한 후속처리를 수행하는 콜백함수를 전달하는 것이 일반적이다. 비동기 함수 안에 콜백함수 형태.

<br />
이처럼 콜백 함수를 통해 비동기 처리 결과에 대한 후속 처리를 수행하는 비동기함수가 비동기 처리 결과를 가지고 또 다시 비동기 함수를 호출해야 한다면 콜백헬이 발생한다.
<br />
<br />
콜백 헬은 보기에도 복잡하고 에러 처리 한계가 존재한다.

- 콜백 함수를 이용한 비동기 처리의 한계(에러 처리)

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

- **프로미스의 상태**

`pending` : 비동기 처리가 아직 수행되지 않은 상태
<br />
`fulfilled` : 비동기 처리가 수행된 상태(성공) -> resolve 함수 호출시
<br />
`rejected` : 비동기 처리가 수행된 상태(실패) -> reject 함수 호출

<br />
<br />

프로미스 객체는 프로미스의 상태(pending, fulfilled, rejected)와 결과 값(undefined, value, error)을 가진다.
즉, 프로미스는 비동기 처리 상태와 처리 결과를 관리하는 객체이다.

```
const promise = new Promise(resolve => resolve(1));

console.log(promise);

Promise {<fulfilled>: 1}
[[Prototype]]: Promise
[[PromiseState]]: "fulfilled" //프로미스의 상태
[[PromiseResult]]: 1 //프로미스의 값
```

<br />
<br />

## promise의 후속처리 메서드

<br />

프로미스의 비동기 처리 상태가 변화하면 이에 따른 후속 처리를 해야한다.
fulfilled, reject 상태에 따른 후속 처리가 필요하다.

### then, catch, finally

- **then (Promise.prototype.then)**

```
new Promise(resolve => resolve('성공'))
.then(v => console.log(v), e => console.log(e)); //fulfilled

new Promise(_, reject => reject(new Error('실패')))
.then(v => console.log(v), e => console.log(e)); //fulfilled

```

then 메서드는 두 개의 콜백 함수를 인수로 전달 받는다.

첫번째 콜백 함수는 프로미스가 fulfilled 상태(resolve 함수가 호출된 상태)가 되면 호출된다. 이때 콜백 함수는 프로미스의 비동기 처리 결과를 인수로 전달받는다.

두 번째 콜백 함수는 프로미스가 reject상태(reject함수가 호출된 상태)가 되면 호출된다. 이때 콜백 함수는 프로미스의 에러를 인수로 전달받는다.

- **catch (Promise.prototype.catch)**

catch메서드는 한 개의 콜백함수를 인수로 전달받는다. catch 메서드의 콜백함수는 프로미스가 rejected 상태인 경우만 호출된다.

```
new Promise(_,reject => reject(new Error('실패')))
.then( undefined, e => console.log(e)); //Error: rejected

new Promise(_, reject => reject(new Error('실패')))
.catch( e => console.log(e));  //Error: rejected

```

- **finally (Promise.prototype.finally)**

finally메서드는 한 개의 콜백 함수를 인수로 전달 받는다. finally메서드의 콜백 함수는 프로미스의 성공이나 실패에 상관없이 무조건 한 번만 호출된다.

### 프로미스 체이닝

```
//promise의 후속 처리 메서드

promiseGet()
.then(() => {어쩌구 저쩌구})
.then(()=>{저쩌구 양양})
.catch(err => console.log(err));
```

then, catch, finally는 모두 `promise`를 반환한다. 따라서 프로미스 체이닝이 가능하다. 하지만 가독성이 좋지 않으므로 async/await 키워드를 사용하면 좋다. 후속처리 메서드 없이 마치 동기 처리 처럼 **프로미스가 처리 결과를 반환**하도록 구현 할 수 있다.

```
//async/await

(async () =>{
    const ID = await promiseGet();
    const nickname = await promiseGet('~~/ ${ID}');
})
```

### 프로미스 정적 메서드

- **Promise.resolve, Promise.reject**

```
//기존 코드
const resolvedPromise  = new Promise(resolve => resolve([1,2,3]));

// Promise.resolve
const resolvedPromise = Promise.resolve([1,2,3]);

```

```
//기존 코드
const rejectedPromise  = new Promise((_,reject) => reject(new Error('error')));

// Promise.resolve
const rejectedPromise = Promise.reject(new Error('error'));

```

- **Promise.all**

  여러 개의 비동기 처리를 모두 **병렬처리**할 때 사용한다. 복수 개의 비동기 처리들이 서로 의존하지 않고 개별적으로 수행될 때 사용하며, 소요시간을 단축 할 수 있다.
  <br />

  복수 개의 프로미스 요소를 갖는 배열(혹은 이터러블)을 인수로 받는다. 전달받은 모든 프로미스가 모두 fulfilled 상태가 되면 모든 처리 결과를 배열에 저장해 새로운 프로미스를 반환한다. 첫 번째 프로미스가 가장 나중에 fulfilled 되어도 배열의 맨 첫번째 요소에 값이 담겨서 반환된다.

```
const data1 = () => {
    return new Promise(resolve => setTimeout(()=>resolve(1), 3000));
}
const data2 = () => {
    return new Promise(resolve => setTimeout(()=>resolve(1), 2000));
}
const data3 = () => {
    return new Promise(resolve => setTimeout(()=>resolve(1), 1000));
}


Promise.all([data1(), data2(), data3()]).
then(console.log) // [1,2,3]
.catch(console.error);

```

프로미스 객체들 중에서 reject되는 결과를 반환하는 프로미스가 섞여있으면, 나머지 프로미스가 fulfilled 상태가 되는 것을 기다리지 않고 즉시 종료한다. 또한, reject보다 먼저 처리된 resolve된 값이 있더라도 에러로 처리된다.

```
data3이 resolve 상태이고 제일 빠름에도 error를 출력한다.

const data1 = new Promise(resolve => setTimeout(()=>resolve(1), 5000));
const data2 = new Promise((_,reject)=> setTimeout(()=>reject(new Error('error')), 2000));
const data3 = new Promise(resolve => setTimeout(()=>resolve(3), 1000));

Promise.all([data1, data2, data3]).
then((e)=>console.log(e))
.catch((e)=>console.error(e));


```

 <br />
 <br />

- **Promise.race**
  <br />

  프로미스를 요소로 갖는 배열(혹은 이터러블)을 인수로 전달 받고 가장 먼저 fulfilled 상태가 된 프로미스의 처리 결과를 반환한다.
  만약, reject된 프로미스가 가장 먼저 값을 반환하면 그 즉시 reject하는 프로미스를 반환한다.
  reject되는 프로미스가 인수에 포함되더라도 resolve되는 프로미스가 가장 먼저 처리된다면 가장 먼저 resolved된 값을 반환한다.

```
Promise.race([
    new Promise((_,reject) => setTimeout(()=>reject(new Error('error')),4000)),
    new Promise((resolve) => setTimeout(()=>resolve('solved'),2000))
]).then(console.log)
.catch(console.error);

// solved

Promise.race([
    new Promise((_,reject) => setTimeout(()=>reject(new Error('error')),1000)),
    new Promise((resolve) => setTimeout(()=>resolve('solved'),2000))
]).then(console.log)
.catch(console.error);

// Error
```

 <br />
 <br />

- **Promise.allSettled**
  <br />
  프로미스를 요소로 갖는 배열(혹은 이터러블)을 인수로 전달 받고 전달 받은 프로미스가 모두 settled된 상태가 되면 처리 결과를 배열로 반환한다. Promise.all은 reject된 프로미스가 있으면 먼저 resolve된 프로미스가 있더라도 Error를 출력하는 반면에, Promise.allSettled는 resolve, reject에 상관없이 모든 값을 배열에 담아서 리턴한다.

```
const data1 = new Promise(resolve => setTimeout(()=>resolve(1), 5000));
const data2 = new Promise((_,reject)=> setTimeout(()=>reject(new Error('error')), 2000));
const data3 = new Promise(resolve => setTimeout(()=>resolve(3), 1000));

Promise.allSettled([data1, data2, data3]).
then((e)=>console.log(e))
.catch((e)=>console.error(e));

// 0: {status: 'fulfilled', value: 1}
// 1: {status: 'rejected', reason: Error: error at <anonymous>:3:62}
// 2: {status: 'fulfilled', value: 3}
```

 <br />
 <br />

### 마이크로태스크 큐

```
setTimeout(()=>console.log(1),0);

Promise.resolve()
.then(() => console.log(2))
.then(() => console.log(3));

// 2 -> 3 -> 1
```

마이크로태스크 큐는 태스크 큐와 별도의 큐이다. 프로미스의 후속 처리 메서드의 콜백함수는 마이크로매서드의 큐에 저장되고,
그 외의 비동기 함수의 콜백 함수나 이벤트 핸들러는 태스크 큐에 저장된다.

**마이크로태스크 큐가 태스크 큐보다 우선순위가 높다.** 이벤트 루프는 콜스택이 비면 마이크로태스크 큐에서 대기하고 있는 함수를 가져와 실행한다. 마이크로태스크 큐가 비면, 태스크 큐에서 대기하고 있는 함수를 가져와 실행한다.
