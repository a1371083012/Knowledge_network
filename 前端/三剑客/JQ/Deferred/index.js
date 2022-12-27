// 写法一：基本写法
var ajax1 = $.ajax({
    url: 'http://127.0.0.1:8080/getMethod',
    success: function(data){
        console.log(data);
    },
    error: function(){
        console.log('error');
    }
});
console.log(ajax1);

// 写法二：done - fail写法
var ajax2 = $.ajax({url: 'http://127.0.0.1:8080/getMethod'});
ajax2.done(function(data) {
    console.log(data);
}).fail(function(){
    console.log('error');
})
console.log(ajax2);

// 写法三：then写法
var ajax3 = $.ajax({url: 'http://127.0.0.1:8080/getMethod'});
ajax3.then(function(data) {
    console.log(data);
}, function(){
    console.log('error');
})
console.log(ajax3);
// 上面的ajax返回的就是Deferred对象，Deferred就是相当于原生JS的异步操作

// 利用Deferred对象进行异步操作
function waitHandle(){
    var dtd = $.Deferred();

    function wait(dtd){
        var task = function(){
            console.log('执行完成');
            dtd.resolve()
        }
        setTimeout(task, 2000);
        return dtd;
    }

    return wait(dtd);
}

var w = waitHandle();
w.then(function(){
    console.log(1);
}, function(){
    console.log('err1');
}).then(function (){
    console.log(2);
}, function(){
    console.log('err2');
});

// 对比Promise的异步操作
function fun(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(11);
            resolve();
        }, 2000)
    });
}
fun().then(()=>{
    console.log(22);
})