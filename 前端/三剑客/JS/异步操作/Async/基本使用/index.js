function funA(){
    setTimeout(()=>{
        console.log("执行A成功！");
    }, 1000);
}

function funB(){
    setTimeout(()=>{
        console.log("执行B成功！");
    }, 3000);
}

async function fun() {
    await funB();
    await funA();
}
fun();