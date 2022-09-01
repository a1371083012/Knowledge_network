// 构造函数
function User(name){
    this.name = name;
    this.show = ()=>{
        console.log("我的名字叫："+ this.name);
    }
}

// 编写new操作符
function create(fn, ...args){
    // 1.创建了一个空的对象
    let f = {};
    // 2.将空对象的原型隐式地指向构造函数的原型
    Object.setPrototypeOf(f, fn.prototype);
    // 3.将空对象作为构造函数的上下文（改变this指向）
    var result = fn.apply(f, args);
    // 4.对构造函数有返回值的处理判断
    return result instanceof Object ? result : f;
}

let xiaoming = create(User, "小明");
console.log(xiaoming);

let xiaohong = new User("小红");
console.log(xiaohong);