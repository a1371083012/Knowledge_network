// 父类
function Animal(name){
    this.name = name;
}
Animal.prototype.who = ()=>{
    console.log("我的名字叫：" + this.name);
}

// 子类
function Cat(name){
    Animal.call(this, name);
}

// 继承
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.walk = ()=>{
    console.log(this.name + "正在走...");
}
Cat.prototype.constructor = Cat; // 修复Cat原型的构造指向

// 实例化
let xiaohua = new Cat("小花");
console.log(xiaohua);
xiaohua.who();
xiaohua.walk();