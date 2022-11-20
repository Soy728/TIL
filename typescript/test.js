Promise.race([
    new Promise((_,reject) => setTimeout(()=>reject(new Error('error')),2000)),
    new Promise((resolve) => setTimeout(()=>resolve('solved'),2000))
]).then(console.log)
.catch(console.log);


// const data1 = new Promise(resolve => setTimeout(()=>resolve(1), 5000));

// const data2 = new Promise((_,reject)=> setTimeout(()=>reject(new Error('error')), 2000));

// const data3 = new Promise(resolve => setTimeout(()=>resolve(3), 1000));

// Promise.all([data1, data2, data3]).
// then((e)=>console.log(e))
// .catch((e)=>console.error(e));


 // [
 //   1,
 //   Error: error
 //       at Timeout._onTimeout (/Users/isohui/Develop/TIL/typescript/test.js:12:55)
 //       at listOnTimeout (node:internal/timers:564:17)
 //       at process.processTimers (node:internal/timers:507:7),
 //   3
 // ]