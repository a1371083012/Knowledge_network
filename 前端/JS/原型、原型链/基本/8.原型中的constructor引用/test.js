function User(name){
    this.name = name;
    this.show = function(){
        console.log(this.name);
    }
};
// 这里是重新创建了一个新分配的原型，User并指向这个新的原型
User.prototype = {
    constructor:User, // 由于这是一个全新的原型,所以要让新原型的构造指回原构造
    show(){
        console.log(this.name);
    },
    sblj: "123"
}
console.dir(User.prototype);
// console.log(User.prototype.__proto__ == Object.prototype);
// console.log(User.prototype.constructor == User);

let lisi = new User('李四');
console.log(lisi);
lisi.show();