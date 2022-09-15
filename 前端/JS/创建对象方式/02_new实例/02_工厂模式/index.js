let Person = function(name, sex, hobby){
    let person = new Object(); 
    person.name = name;
    person.sex = sex;
    person.hobby = hobby;
    person.speak = function(){
        console.log("我的名字叫："+person.name);
    }
    return person;
};

let zhangsan = Person("张三", "男", "篮球");
console.log(zhangsan);
zhangsan.speak();
console.log("类型："+typeof zhangsan);