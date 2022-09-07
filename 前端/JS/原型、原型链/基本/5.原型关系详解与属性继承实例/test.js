//String Number Object

let obj = new Object();
obj.name = "Loze";

console.dir(Object);

Object.prototype.show = function(){
    console.log("你好，世界！");
}

obj.show();

function User(){

}
console.dir(User);
console.log(User.prototype.__proto__ == User.__proto__.__proto__);