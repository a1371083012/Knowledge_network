/* 
  生成cookie
  参数：①expires：失效时间；②path：指定路径
*/
document.cookie="user1=Mark; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/;";

/* 
  读取cookie
  缺点：如果没有封装成函数，在浏览器有多个cookie时，不能指定读取哪个
*/
var cookie = document.cookie;
console.log(cookie);

/* 
  修改cookie
  原理：将对应键的cookie修改其值就可以将旧的cookie值覆盖
*/
document.cookie="user1=Rose; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/;";
var cookie = document.cookie;
console.log(cookie);

/* 
  删除cookie
  原理：将对应键的cookie修改其时间未过去的时间让其马上失效
*/
document.cookie="user1=Rose; expires=Thu, 18 Dec 2003 12:00:00 GMT; path=/;";
var cookie = document.cookie;
console.log(cookie);
