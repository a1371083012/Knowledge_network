function User(name){
    this.name = name;
};

User.prototype = {
    constructor: User,
    show(){
        console.log(this.name);
    }
}

// 创建一个名为"张三"的实例
let zhangsan = new User("张三");
console.log(zhangsan);

// 创建实例函数
function createByObject(obj, ...args){
    const constructor = Object.getPrototypeOf(obj).constructor;
    return new constructor(...args);
}

// 通过函数创建一个名为"李四"的实例
let lisi = createByObject(zhangsan, '李四');
lisi.show();