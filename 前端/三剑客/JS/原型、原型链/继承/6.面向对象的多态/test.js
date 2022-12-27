// 声明父原型：User
function User(){};
User.prototype.show = function(){
    console.log(this.description());
}

function Admin(){}
Admin.prototype = Object.create(User.prototype);
Admin.prototype.description = function(){
    return "管理员";
}

function Member(){};
Member.prototype = Object.create(User.prototype);
Member.prototype.description = function(){
    return "我是会员";
}

function Enterprise(){};
Enterprise.prototype = Object.create(User.prototype);
Enterprise.prototype.description = function(){
    return "企业账户";
}

for(const obj of [new Admin(), new Member(), new Enterprise()]){
    obj.show();
}



