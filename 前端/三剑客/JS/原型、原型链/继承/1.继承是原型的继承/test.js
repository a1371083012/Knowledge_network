function User(){}
User.prototype = {
    constructor: User,
    name(){
        console.log("user name method");
    }
}

function Admin(){}
Admin.prototype = {
    constructor: User,
    level(){
        console.log("level: 100");
    }
}
Object.setPrototypeOf(Admin.prototype, User.prototype);

function Vistor(){}
Vistor.prototype = {
    constructor: Vistor,
    level(){
        console.log("level: 1");
    },
    show(){
        console.log("level: 1");
    }
}
Object.setPrototypeOf(Vistor.prototype, User.prototype);

let zhangsan = new User();
zhangsan.name();

let lisi = new Admin();
lisi.level();

let wangwu = new Vistor();
wangwu.level();


