# Promise

Promise는 비동기를 처리하는 객체이다.

### promise의 3가지 상태

- pending
- fulfilled
- reject

1. Producer

```
//new Promise가 만들어지면 executor는 즉시(자동으로) 실행된다.
//executor = resolve, reject
//resolve, reject는 콜백함수이다.

const promise = new Promise((resolve,reject) => {
    // doing something (network,read files ... )
    console.log("Doing something")
    setTimeout(() => {
        //resolve("success");
        //reject(new Error('no network'));
    }, 2000)

})
```

2. Consumers: then, catch, finally <br/>
   = 후속 처리 메서드<br/>
   프로미스로 구현된 비동기 함수를 호출하는측에서는 프로미스 객체의 후속처리메서드(then, catch)를 통해 비동기 처리 결과 또는 에러메세지를 전달 받는다.

```
//resolve callback함수를 통해 전달된 값이 value로 들어온다.
promise.then((value) => {
    console.log(value);
})

```

```
//reject callback 함수를 사용하면 Uncaught Error가 발생한다.
promise.then((value) => {
    console.log(value);
})

```

```
//Chaining
promise.then((value) => {
    console.log(value);
})
.catch(error => {
    console.log(error);
})
.finally(() => {
    console.log("finally");
})
```

# Async / Await

```
// promise
function fetchUser(){
    return new Promise(resove,reject){
        resolve('sohee');
    }
}


const user = fetchUser().then((e) => {console.log(e);})
```

```
// async
async function fetchUser(){
    return 'sohee'
}


const user = fetchUser().then((e) => {console.log(e);})
```

async 키워드를 함수 앞에 쓰면 promise로 변환된다. return 타입이 promise가 된다.

```
// await

function delay(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function getApple(){
    await delay(3000);
    return 'apple';
}

function getBanana(){
    return delay(3000).then(()=>'banana');
}

getApple();
getBanana();
```

await 키워드는 async 가 붙은 함수 안에서만 사용이 가능하다.

```
//Error 처리

function delay(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function getApple(){
    await delay(3000);
    throw 'error';
    return 'apple';
}
async function getBanana(){
    await delay(3000);
    return 'banana';
}

async function pickFruit(){
    try{
        const apple = await getApple();
        const banana = await getBanana();
    } catch(){

    }
}
```

위 코드에서는 `getApple()`과 `getBanana()`를 실행하는데 각각 1초씩, 총 2초의 시간이 걸린다. 하지만 `getApple()`과 `getBanana()`는 각각 실행되어야하는 함수이다. 따라서 병렬적인 처리가 필요하다.

```
//병렬적 처리, 추천하진 않는 방법

function delay(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function getApple(){
    await delay(3000);
    return 'apple';
}
async function getBanana(){
    await delay(3000);
    return 'banana';
}

async function pickFruit(){
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;

}
```

```
//Promise APIs

function delay(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function getApple(){
    await delay(3000);
    return 'apple';
}
async function getBanana(){
    await delay(3000);
    return 'banana';
}

async function pickFruit(){
   return Promise.all([getApple(), getBanana()])
   .then(fruits => fruits.join('+'));

}

pickFruit().then(console.log);
```
