const promise = new Promise(function(resolve, reject) {
    if (1 == "1"){
        resolve("执行成功！");
    } else {
        reject("执行失败！");
    }
});

promise.then(function(value) {
    console.log(value);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("完成");
});