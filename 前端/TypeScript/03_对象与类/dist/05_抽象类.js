"use strict";
(function () {
    /*
      以abstract开头的类是抽象类
        抽象类和其他类区别不大，只是不能用来创建对象
        抽象类就是专门用来被继承的
    */
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        sayHello() {
            console.log("汪汪汪！");
        }
    }
    class Cat extends Animal {
        sayHello() {
            console.log("喵喵喵！");
        }
    }
    const dog = new Dog('旺财');
    dog.sayHello();
    const cat = new Cat('咪咪');
    cat.sayHello();
})();
