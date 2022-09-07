// 声明父原型：User
function User(){}
User.prototype = {
    constructor: User,
    name(){
        console.log("user name method");
    },
}

function Admin(){}
Admin.prototype = {
    constructor: Admin,
    name(){
        console.log("admin name method");
    }
}

let a = new Admin();

// Admin.prototype = Object.create(User.prototype);
Object.setPrototypeOf(Admin.prototype, User.prototype);

User.prototype.show = function(){
    console.log("show");
}
a.show();



