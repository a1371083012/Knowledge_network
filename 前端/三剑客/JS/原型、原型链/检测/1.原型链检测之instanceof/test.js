function A(){}
function B(){}
function C(){}

let c = new C();
B.prototype = c;
let b = new B();
A.prototype = b;
let a = new A();

console.log(a instanceof C);
console.dir(a.__proto__);
 