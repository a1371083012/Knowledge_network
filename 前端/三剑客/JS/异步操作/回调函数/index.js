function fun1(callback){
    setTimeout(function(){
        console.log("调用了fun1");
        callback();
    }, 1000);
}

function fun2(){
    console.log("调用了fun2");
}

fun1(fun2);