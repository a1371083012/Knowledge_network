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
    const instance = Object.create(User.prototype);
    User.apply(instance, args);
    instance.role = function(){
        console.log("role");
    }
    return instance;
}
let zhangsan = Admin("张三", 19);
zhangsan.show();
zhangsan.role();

// 声明子原型：Member
function Member(...args){
    const instance = Object.create(User.prototype);
    User.apply(instance, args);
    return instance;
}
let lisi = Member("李四", 25);
lisi.show();