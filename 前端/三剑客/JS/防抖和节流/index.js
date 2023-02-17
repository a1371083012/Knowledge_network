// 需要执行的函数
let say = function(){
    console.log("say");
}

// 覆写按钮点击事件
let debounceButton = document.querySelector("#debounceButton");
debounceButton.onclick = debounce(say, 1000);
// 防抖方式：使用定时器
function debounce(fn, delay) {
    let timeout = null;
    return function(){
        // 每次点击时，都会清除上一次点击时产生的定时器
        clearTimeout(timeout);
        // 重新设置定时器，覆盖上一次的定时器
        timeout = setTimeout(() => {
            fn.apply(this, arguments);
        }, delay);
    }
}


// 覆写按钮点击事件
let throttleButton = document.querySelector("#throttleButton");
throttleButton.onclick = throttle1(say, 1000);
// throttleButton.onclick = throttle2(say, 1000);
// 节流方式一：使用定时器+锁
function throttle1(fn, delay) {
    // 默认锁是打开的
    let lock = true;
    return function(){
        // 如果锁是打开的，则可以继续执行函数
        if(lock){
            setTimeout(() => {
                fn.apply(this, arguments);
                // 函数执行完成，将锁打开
                lock = true;
            }, delay);
            // 执行函数期间，把锁关上
            lock = false;
        }
    }
}


// 节流方式二：使用时间戳
function throttle2(fn, delay) {
    // 定义一个值为0的时间戳
    let time = 0;
    return function(){
        // 获取现在的时间戳
        let now = Date.now();
        // 当【现在时间戳】与【前一段时间戳】差值大于【节流时间】时，代表间隔已过，可以执行函数
        if(now - time > delay){
            // 更新【前一段时间戳】
            time = now;
            fn.apply(this, arguments);
        }
    }
}

