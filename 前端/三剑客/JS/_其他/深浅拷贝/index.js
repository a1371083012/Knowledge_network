// 深拷贝：B的改变不会导致A的改变
// 浅拷贝：B的改变会导致A的改变
let arr = [1,235,52,5,5,[245,34,55,22,1,25,345,5,3,3],23,{aaa: "bbb"},1];
let obj = {
    name: "大明",
    sex: "男",
    age: 16,
    error: undefined,
    empty: null,
    body: {
        hand: "手",
        speak(){
            console.log("yes");
        }
    },
    show(){
        console.log("你好啊："+this.name);
    },
};
// 循环引用
let obj1 = {
    name: "小舞",
    children: obj,
}
obj.parent = obj1;
console.log(arr);
console.log(obj);

// #region 浅拷贝
console.log("|----- 浅拷贝 -----|");
// 通用方式一：“=”符号
let copyArr1 = arr;
let copyObj1 = obj;
copyArr1[5].shift();
copyObj1.name = "二明";
console.log(arr);
console.log(obj);
// #endregion


// #region 深拷贝
console.log("|----- 深拷贝 -----|");
// 通用方式一：JSON.parse(JSON.stringify()) 
// 局限：①会忽略undefined；②不能序列化函数；③不能解决循环引用的对象
let copyArr3 = JSON.parse(JSON.stringify(arr));
// let copyObj4 = JSON.parse(JSON.stringify(obj));
copyArr3[5].shift();
// copyObj4.name = "五明";
console.log(arr);
console.log(obj);
// console.log(copyObj4);

// 通用方式二：手写递归实现
// 参数说明：obj:需要拷贝的对象；map:递归map，不填
function deepCopy(obj, map){
    //判断传入的是否对象(数组和对象)，是则继续，否则直接返回
    if(obj === null || typeof obj !== 'object'){return obj};
    //判断是否是第一次调用deepCopy方法，是的话创建一个weakmap实例来装遍历过程中出现过的对象
    if(!map){map = new WeakMap();};
    //如果map中已经存在这个对象说明出现了循环引用问题
    if(map.get(obj)){return obj;};
    //map中没有就往map中存入该对象
    map.set(obj,obj);
    // 判断传进来的是数组还是对象
    let newObj = obj instanceof Array? [] : {};
    // 循环递归赋值
    for(let key in obj){
        let value = obj[key];
        // 确定value是不是引用型，是则递归，否则直接赋值
        newObj[key] = (typeof value === "object") ? deepCopy(value, map) : value;
    }
    return newObj;
}
let copyArr = deepCopy(arr);
copyArr[5].shift();
console.log(arr);
let copyObj = deepCopy(obj);
copyObj.name = "六明";
console.log(obj);
// #endregion


// #region 深浅混合拷贝
// Object.assign函数、...扩展运算符、slice、concat、循环+插入赋值都是只有第一层为深拷贝，第二层开始就是浅拷贝
console.log("|----- 深浅混合拷贝 -----|");
// 通用方式一：Object.assign函数
let copyArr2 = [];
Object.assign(copyArr2, arr);
let copyObj2 = {};
Object.assign(copyObj2, obj);
copyObj2.name = "三明";
copyObj2.body.hand="腰";
copyArr2[5].shift();
console.log(arr);
console.log(obj);

// 通用方式二：...扩展运算符
let copyArr4 = [...arr];
let copyObj3 = {...obj};
copyObj3.name="四明";
copyObj3.body.hand="脚";
copyArr4[5].shift();
console.log(arr);
console.log(obj);
console.log(copyObj3);

// 数组方式三：slice切片
let copyArr5 = arr.slice();
copyArr5[5].shift();
console.log(arr);

// 数组方式四：concat连接
let copyArr6 = arr.concat();
copyArr6[5].shift();
console.log(arr);

// 数组方式五：循环+插入赋值
let copyArr7 = [];
arr.forEach(e=>{
    copyArr7.push(e);
})
copyArr7[5].shift();
console.log(arr);
// #endregion