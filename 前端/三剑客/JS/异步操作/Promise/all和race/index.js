const promiseA = new Promise(function(resolve, reject) {
    if (1 == "1"){
        resolve("执行A成功！");
    } else {
        reject("执行A失败！");
    }
});
const promiseB = new Promise(function(resolve, reject) {
    if (1 == "2"){
        resolve("执行B成功！");
    } else {
        reject("执行B失败！");
    }
});

/* 
    Promise.all接收一个包含多个 promise 对象的数组
    待全部完成之后，统一执行 success 
*/
Promise.all([promiseA, promiseB]).then(datas =>{
    console.log(datas[0]);
    console.log(datas[1]);
}).catch(datas =>{
    console.log(datas);
});

/* 
    Promise.race接收一个包含多个 promise 对象的数组
    只要有一个完成，就执行 success，返回最先变的 promise 返回的状态
*/
// Promise.race([promiseB, promiseA]).then(datas =>{
//     console.log(datas);
// }).catch(datas =>{
//     console.log(datas);
// });