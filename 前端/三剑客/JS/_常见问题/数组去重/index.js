let arr = [1,1,'true','true',true,true,15,15,'false',false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{}];
console.log(arr);

// 提示：
// ①：==和===不能区分NaN
// ②：indexOf不能检测出NaN
// ③：对象不能检测出"true"、"false"和NaN

// 不需要额外空间
// 方法1：循环搭配splice
let array = [1,1,'true','true',true,true,15,15,'false',false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{}];

for(let i=0; i<array.length; i++){
    for(let j=i+1; j<array.length; j++){
        if([array[i]].includes(array[j])){
            array.splice(j,1);
        }
    }
}
console.log(array);


// 需要额外空间
// 方法1：Set去重
let newArr=[...new Set(arr)];
console.log(newArr);

// 方法2：两次循环搭配组合（for、for...in、for...of、forEach）
newArr=[];
for(var i=0; i<arr.length; i++){
    for(var j=0; j<newArr.length; j++){
        if(newArr[j]===arr[i]){break;}
    }
    if(j==newArr.length){
        newArr.push(arr[i])
    }
}
console.log(newArr);

// 方法3：循环搭配检索组合（indexOf、includes、map）
newArr=[];
arr.forEach(e=>{
    if(newArr.indexOf(e)==-1){
        newArr.push(e)
    }
})
console.log(newArr);

newArr=[];
arr.forEach(e=>{
    if(newArr.includes(e)==false){
        newArr.push(e)
    }
})
console.log(newArr);

newArr=[];
let map = new Map();
arr.forEach(e=>{
    if(!map.has(e)){
        map.set(e);
        newArr.push(e);
    }
})
console.log(newArr);

// 方法4：特殊检索搭配检索组合（find、some、filter）
newArr=[];
arr.find(e=>{
    if(newArr.includes(e)==false){
        newArr.push(e)
    }
})
console.log(newArr);

// 方法5：循环搭配对象组合，利用对象的属性名不能重复的特点
obj = {};newArr=[];
arr.forEach(e=>{
    obj[e]=e;
})
newArr=Object.values(obj);
console.log(newArr);
