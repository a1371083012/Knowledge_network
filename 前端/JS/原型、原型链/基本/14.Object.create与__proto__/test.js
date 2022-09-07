// 声明父原型：User
function User(){}
User.prototype = {
    constructor: User,
    name(){
        console.log("user name method");
    }
}

// 声明子原型：Admin
function Admin(){}
Admin.prototype = {
    constructor: User,
    level(){
        console.log("level: 100");
    }
}
// Admin原型指向User原型（继承）
Object.setPrototypeOf(Admin.prototype, User.prototype);

// 声明子原型：Vistor
function Vistor(){}
Vistor.prototype = {
    constructor: Vistor,
    level(){
        console.log("level: 1");
    }
}
// Vistor原型指向User原型（继承）
Object.setPrototypeOf(Vistor.prototype, User.prototype);

let zhangsan = new User();
zhangsan.name();

let lisi = new Admin();
lisi.level();

let wangwu = new Vistor();
wangwu.level();


