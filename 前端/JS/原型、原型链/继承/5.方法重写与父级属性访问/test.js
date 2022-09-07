// 声明父原型：User
function User(){}
User.prototype = {
    constructor: User,
    go(){
        console.log("user name method");
    },
}
User.prototype.site = function(){
    return "Loze";
}

function Admin(){};
Admin.prototype = Object.create(User.prototype);
Admin.prototype = {
    constructor: Admin,
    name(){
        console.log(User.prototype.site()+"admin name method");
    }
}


let a = new Admin();
a.name();




