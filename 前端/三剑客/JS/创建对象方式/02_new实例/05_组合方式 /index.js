let Person = function(name, sex, hobby){
    this.name = name;
    this.sex = sex;
    this.hobby = hobby;
};
Person.prototype.speak = function(){
    console.log("我的名字叫："+this.name);
}

let zhangsan = new Person("张三", "男", "篮球");
console.log(zhangsan);
zhangsan.speak();
console.log("类型："+typeof zhangsan);