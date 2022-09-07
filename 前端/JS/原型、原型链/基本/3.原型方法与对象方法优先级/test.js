
let a = {
    show(){
        console.log('你好啊');
    },
    // 直接在a的内部定义一个render函数
    render(){
        console.log('世界1');
    }
};

// 在a的原型定义一个render函数
a.__proto__.render = function(){
    console.log('世界2');
}

// 情况一：a内部有对应函数，直接调用自己的函数
// 情况二：a内部没有对应函数时，回找到对应原型调用对应函数
// 情况三：a内部和对应原型都没有对应函数时，会直接报错
a.render();