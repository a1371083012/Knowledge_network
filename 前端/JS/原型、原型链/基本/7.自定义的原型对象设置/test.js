let obj1 = {
    name: "obj1"
};

let obj2 = {
    name: "obj2",
    show(){
        // this指向是谁调用就打印谁的name
        console.log(this.name);
    }
};
Object.setPrototypeOf(obj1, obj2);

console.dir(obj1);
console.dir(obj2);

obj1.show(); // obj1
obj2.show(); // obj2

console.log(Object.getPrototypeOf(obj1)==obj1.__proto__);