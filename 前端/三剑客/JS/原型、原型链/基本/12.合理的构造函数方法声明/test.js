function User(name){
    this.name = name;
    // ①：构造函数中的方法是额外的内存开销
    // this.show = function(){
    //     console.log(this.name);
    // }
}

// ②：最好的做法是在将函数配置在原型当中
// User.prototype.show = function(){
//     console.log(this.name);
// }

// ③：当需要声明多个方法时可以这样写
User.prototype = {
    constructor: User,
    show(){
        console.log(this.name);
    },
    get(){
        console.log('get');
    }
}

let zhangsan = new User("张三");
let lisi = new User("李四");

zhangsan.show();