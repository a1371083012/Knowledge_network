function* fun(f1, f2){
    yield f1();
    yield f2();
}

function fun1(){
    console.log("调用了fun1");
}

function fun2(){
    console.log("调用了fun2");
}

let iterator = fun(fun1, fun2);
iterator.next();
iterator.next();