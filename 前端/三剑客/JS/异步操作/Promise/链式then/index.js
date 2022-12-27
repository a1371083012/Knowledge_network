// 封装函数
function print(text, ms){
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            console.log(text);
            resolve();
        }, ms);
    });
}

print(1, 3000).then(()=>{
    return print(2, 1000);
}).then(()=>{
    print(3, 2000);
});

// 如果使用async解决的话，就是以下代码：
async function asyncFunc() {
    await print("First", 3000);
    await print("Second", 1000);
    await print("Third", 2000);
}
asyncFunc();
