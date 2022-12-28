"use strict";
(function () {
    // 定义一个表示人的类
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        /*
          getter方法用来读取属性
          setter方法用来设置属性
            - 它们被称为属性的存取器
        */
        // 定义方法，用来获取age属性
        // getAge(){
        //   return this._age
        // }
        // // 定义方法，用来设置age属性
        // setAge(value: number){
        //   // 判断年龄是否合法
        //   if(value >= 0){
        //     this._age = value;
        //   }
        // }
        // TS中设置getter方法的方式
        get age() {
            return this._age;
        }
        set age(value) {
            if (value >= 0) {
                this._age = value;
            }
        }
    }
    const per = new Person('张三', 18);
    /*
      现在属性是在对象中设置的，属性可以任意的被修改
        属性可以任意被修改将会导致对象中的数据变得非常不安全
    */
    // per._name = '李四';
    // console.log(per.getAge());
    // per.setAge(19)
    // console.log(per);
    per.age = 24;
    console.log(per.age);
    // protected属性实例
    class A {
        constructor(num) {
            this.num = num;
        }
    }
    class B extends A {
        test() {
            console.log(this.num);
        }
    }
    const b = new B(123);
    // b.num = 33; // 报错
    class C {
        // 可以直接将属性定义在构造函数中
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
})();
