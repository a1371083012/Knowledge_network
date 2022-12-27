// 声明权限原型：Address
function Address(){};
Address.prototype.getAddress = function(){
    console.log("权限功能");
}

// 声明积分原型：Credit
function Credit(){};
extend(Credit, Address);
Credit.prototype.total = function(){
    console.log("积分统计");
}

// 声明请求原型：Request
function Request(){};
extend(Request, Credit);
Request.prototype.ajax = function(){
    console.log("请求后台");
}

// 声明父原型：User
function User(name, age){
    this.name = name;
    this.age = age;
};
extend(User, Request);
User.prototype.show = function(){
    console.log(this.name, this.age);
}

// 声明子原型：Admin
function Admin(...args){
    User.apply(this, args);
}
extend(Admin, User);
Admin.prototype.description = function(){
    return "管理员";
}

// 声明子原型：Member
function Member(...args){
    User.apply(this, args);
}
extend(Member, User);
Member.prototype.description = function(){
    return "成员";
}

// 封装继承
function extend(sub, sup){
    sub.prototype = Object.create(sup.prototype);
    sub.prototype.constructor = sub;
    Object.defineProperty(sub.prototype, "constructor", {
        value: sub,
        enumerable: false
    })
}

let zhangsan = new Admin('张三', 18);
let lisi = new Member('李四', 25);
zhangsan.show();
zhangsan.ajax();
zhangsan.total();
lisi.show();