# promise 가 아닌 비동기 함수를 동기적으로 사용하기

<br />

```
function getHello() {
    setTimeout(()=>{console.log("3초뒤 안녕")},3000);
    console.log("바로 안녕");
}
getHello();
```

setTimeout은 비동기 함수이기 떄문에 '바로 안녕'은 setTimeout안의 콜백함수`()=>{console.log("3초뒤 안녕")}`가 실행되기까지의 3초를 기다리지않는다.
따라서 비동기 함수에 대한 동기처리가 필요하다.
<br />

이럴 떄 async, await를 사용하면 된다. await는 promise 객체를 반환하는 함수 앞에 사용할 수 있는 키워드이다.
하지만 setTimeout함수는 비동기 함수이지만 promise를 반환하지 않는다.

<br />
따라서 promise를 반환하지 않는 비동기 함수들은 promise를 반환하도록 만들어 주어야 한다.

```
function setTimeoutPromise(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function getHello() {
  try {
    await setTimeoutPromise(3000);
    console.log("3초뒤 안녕");
  } catch (e) {
    console.log(e);
  }
}
getHello();
```
