/* 
    说明：字符串转Json
    JSON.parse：(1.要加引号 2.转方法报错)
    ①eval()支持键不带双引号转换，其他不行
    ②eval()支持转换方法，其他不行
*/
let user = '{name: "小明", sex: "男", foo:{hobby: "篮球", speak(){console.log("你好");}}}';
let cat = '{"name": "小花", "sex": "男", "foo":{"hobby": "逛街"}}';
// 方式一：eval()
console.log(eval('(' + user + ')'));
// 方式二：JSON.parse，jquery的parseJSON同理
console.log(JSON.parse(cat));
console.log($.parseJSON(cat));


/* 
    说明：Json转字符串
    JSON.stringify：(1.加引号 2.不转方法)
    ①JSON.stringify只会转换属性和对象，不会转换方法
    ②JSON.stringify会默认将键值对都加上双引号
*/
let car = {name: "凯美瑞", price: "20万", foo:{dirve: "开车", stop(){console.log("停车");}}};
let dog = {"name": "小黄", "sex": "女", "foo":{"hobby": "溜达"}};
// 方式一：JSON.stringify
console.log(JSON.stringify(car));
console.log(JSON.stringify(dog));