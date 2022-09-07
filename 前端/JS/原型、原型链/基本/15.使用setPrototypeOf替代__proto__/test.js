let User = {
    show(){
        return this.name;
    }
}

// __proto__
let lisi = { name: "李四" };
lisi.__proto__ = User;
console.dir(lisi.__proto__.__proto__);
console.log(lisi.show());

// setPrototypeOf
let zhangsan = { name: "张三" };
Object.setPrototypeOf(zhangsan, User);
console.log(zhangsan.show());