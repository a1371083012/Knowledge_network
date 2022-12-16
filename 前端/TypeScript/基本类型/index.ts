// 常用类型：boolean, number, string, undefined, null, any

/* number声明 */
let a: number = 10; // 也可以写成 let a = 10，默认a就是为number类型
console.log(a); // 20

/* any声明 */
let b: any = 20;
console.log(b); // 20
b = "hello" // 不报错，使用了any类型定义

/* 有返回值 */
function add(n1: number, n2?: number){
  if(n2 === undefined) n2 = 1;
	return n1 + n2;
}
add(1, 2) // 不能缺少参数，只能用number类型参数

/* 无返回值 */
function log(str: string): void{
  console.log(str);
}
log("hello, world!");


/* 限制回调参数的类型 */
function fun(callback: (data: string) => void){
  // ...
}
fun((data) => {
  console.log(data)
});

export{};