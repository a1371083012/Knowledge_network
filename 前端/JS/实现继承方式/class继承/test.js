// 父类
class Animal{
    constructor(name){
        this.name = name;
        this.who = ()=>{
            console.log("我的名字叫：" + this.name);
        }
    }
}

// 子类
class Cat extends Animal{
    constructor(name){
        super(name);
        this.walk = ()=>{
            console.log(this.name + "正在走...");
        }
    }
}

// 实例化
let xiaohua = new Cat("小花");
console.log(xiaohua);
xiaohua.who();
xiaohua.walk();