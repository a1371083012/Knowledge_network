// php: trait mixin 混合功能

// 封装继承
function extend(sub, sup){
    sub.prototype = Object.create(sup.prototype);
    sub.prototype.constructor = sub;
    Object.defineProperty(sub.prototype, "constructor", {
        value: sub,
        enumerable: false
    })
}

const Address = {
    getAddress(){
        console.log("获取地址");
    }
}
const Credit = {
    total(){
        console.log("积分统计");
    }
}
const Request = {
    ajax(){
        console.log("请求后台");
    }
}

// 声明父原型：User
function User(name, age){
    this.name = name;
    this.age = age;
};
User.prototype.show = function(){
    console.log(this.name, this.age);
}

// 声明子原型：Admin
function Admin(...args){
    User.apply(this, args);
}
extend(Admin, User);
Admin.prototype = Object.assign(Admin.prototype, Address, Request, Credit);
Admin.prototype.description = function(){
    return "管理员";
}
console.dir(Admin);

// 声明子原型：Member
function Member(...args){
    User.apply(this, args);
}
extend(Member, User);
Member.prototype.description = function(){
    return "成员";
}


let zhangsan = new Admin('张三', 18);
let lisi = new Member('李四', 25);
zhangsan.show();
zhangsan.ajax();
zhangsan.total();
zhangsan.getAddress();
lisi.show();