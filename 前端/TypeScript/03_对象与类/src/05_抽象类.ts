(function(){

  /* 
    以abstract开头的类是抽象类
      抽象类和其他类区别不大，只是不能用来创建对象
      抽象类就是专门用来被继承的
  */
  abstract class Animal{
    name: string;

    constructor(name: string){
      this.name = name;
    }

    // 定义一个抽象方法
    // 抽象方法使用abstract开头，没有方法体
    // 抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写
    abstract sayHello():void;
  }

  class Dog extends Animal{
    sayHello(): void {
      console.log("汪汪汪！");
    }
  }

  class Cat extends Animal{
    sayHello(): void {
      console.log("喵喵喵！");
    }
  }

  const dog = new Dog('旺财');
  dog.sayHello();
  const cat = new Cat('咪咪');
  cat.sayHello();

})();