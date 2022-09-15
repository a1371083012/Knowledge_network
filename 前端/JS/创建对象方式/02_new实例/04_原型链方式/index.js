let Person = function(){};
Person.prototype.name = "张三";
Person.prototype.sex = "男";
Person.prototype.hobby = "篮球";
Person.prototype.speak = function(){
    console.log("我的名字叫："+this.name);
}

let zhangsan = new Person();
console.log(zhangsan);
zhangsan.speak();
console.log("类型："+typeof zhangsan);