let Person = {
    name: "张三",
    sex: "男",
    hobby: "篮球",
    speak(){
        console.log("我的名字叫："+this.name);
    }
};

let zhangsan = Object.create(Person);
console.log(zhangsan);
zhangsan.speak();
console.log("类型："+typeof zhangsan);