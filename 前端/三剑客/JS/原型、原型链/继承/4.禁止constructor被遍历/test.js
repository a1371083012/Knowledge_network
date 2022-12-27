// 声明父原型：User
function User(){}
User.prototype = {
    constructor: User,
    go(){
        console.log("user name method");
    },
}

function Admin(){}

Admin.prototype = Object.create(User.prototype);
// 将Admin原型的构造函数指向Admin
Admin.prototype.constructor = Admin;
// console.log(Object.getOwnPropertyDescriptors(Admin.prototype));
Object.defineProperty(Admin.prototype, 'constructor', {
    value: Admin,
    enumerable: false
})

Admin.prototype = {
    constructor: Admin,
    name(){
        console.log("admin name method");
    }
}

let a = new Admin()
for (const key in a) {
    console.log(key);
}

console.dir(Admin);



