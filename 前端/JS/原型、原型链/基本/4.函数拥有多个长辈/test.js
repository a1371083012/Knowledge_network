function User(){}
console.dir(User);

// prototype是为实例化对象服务的
User.prototype.show = function(){
    console.log("show");
}
// __proto__是为自己服务的
User.__proto__.talk = function(){
    console.log("talk");
}

// User.show(); // error
User.talk(); // talk

let user = new User();
user.show(); // show
// user.talk(); // error