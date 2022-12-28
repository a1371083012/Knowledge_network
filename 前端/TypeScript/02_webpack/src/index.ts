import {hi} from './m1';

function sum(a: number, b: number): number{
  return a + b;
}

const obj = {name: '张三', age: 14};
console.log(obj);

obj.age = 15;
console.log(obj.age);

// 这是需要的注解
console.log(sum(122, 2));
console.log(hi);

console.log(Promise);


