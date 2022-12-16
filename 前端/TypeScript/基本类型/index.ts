// boolean, number, string, undefined, null, any

/* number声明 */
let a: number = 10; // 20
console.log(a);

/* any声明 */
let b: any = 20;
console.log(b); // 20
b = "hello" // 不报错，使用了any类型定义

/* 有返回值 */
function add(n1: number, n2: number){
	return n1 + n2;
}
add(1, 2) // 不能缺少参数，只能用number类型参数

/* 无返回值 */
function log(str: string): void{
  console.log(str);
}
log("hello, world!");