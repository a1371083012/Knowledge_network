console.log("|-------- 数组声明 --------|");
let arr, arr1, arr2, temp;
console.dir([].__proto__);

console.log("");
console.log("");
console.log("");
console.log("|-------- 数组方法 --------|");
// #region 方法名：of(...param)
console.log("|---- of ----|");
arr1 = Array.of(1, 2, 5, 7, 3, 0, 4);
console.log(arr1);
// #endregion

// #region 方法名：from(param, func)
console.log("|---- from ----|");
arr1 = Array.from("1257304");
console.log(arr1);
arr2 = Array.from({
    0:"小明",
    1:"小红",
    2:"小白",
    length:3,
});
console.log(arr2);
// #endregion

// #region 方法名：isArray(param)
console.log("|---- isArray ----|");
arr = [4, 5, 7, 2, 3, 6, 1, 3];
console.log(Array.isArray(arr));
// #endregion

console.log("");
console.log("");
console.log("");
console.log("|-------- 实例方法 --------|");
// #region 方法名：join(param)
console.log("|---- join ----|");
arr = [5, 6, 8, 3, 7, 1];
console.log(arr);
arr = arr.join(",");
console.log(arr);
// #endregion

// #region 方法名：concat(...arr)
console.log("|---- concat ----|");
arr = [];
arr1 = [0, 1, 2, 3, 4];
arr2 = [5, 6, 7, 8, 9];
console.log(arr1);
console.log(arr2);
arr = arr1.concat(arr2);
console.log(arr);
// #endregion

// #region 方法名：slice(start, end)
console.log("|---- slice ----|");
arr1 = [1, 2, 3, 4, 5];
console.log(arr1);
arr = arr1.slice(0, 2);
console.log(arr);
// #endregion

// #region 方法名：indexOf(el) & lastIndexOf(el)
console.log("|---- indexOf ----|")
arr = [2, 29, 7, 3, 6, 7, 1];
console.log(arr);
console.log(arr.indexOf(7));
console.log("|---- lastIndexOf ----|")
arr = [2, 29, 7, 3, 6, 7, 1];
console.log(arr);
console.log(arr.lastIndexOf(7));
// #endregion

// #region 方法名：includes(el)
console.log("|---- includes ----|")
arr = [2, 29, 7, 3, 6, 1];
console.log(arr);
console.log(arr.includes(7));
// #endregion

// #region 方法名：at(index)
console.log("|---- at ----|")
arr = [2, 29, 7, 3, 6, 1];
console.log(arr);
console.log(arr.at(1));
console.log(arr.at(-1));
// #endregion

// #region 方法名：flat(depth) & flatMap(func(e, i, a))
console.log("|---- flat ----|")
arr = [2, [29, 7], 3, 6, 1];
console.log(arr);
console.log(arr.flat());
arr = [2, [[29, 7], 3], 6, 1];
console.log(arr);
console.log(arr.flat());
arr = [2, [[29, 7], 3], 6, 1];
console.log(arr);
console.log(arr.flat(2));
console.log("|---- flatMap ----|")
arr = ["it's Sunny in", "California"];
console.log(arr);
console.log(arr.flatMap(i => i.split(' '))); //   ["it's", "Sunny", "in", "California"]
console.log(arr.map(i => i.split(' '))); //   [["it's", "Sunny", "in"], ["California"]]
// #endregion

console.log("");
console.log("");
console.log("");
console.log("|-------- 迭代方法 --------|");
// #region 方法名：keys()
console.log("|---- keys ----|");
arr = [6, 2, 62, 7, 9, 1];
console.log(arr);
for(let index of arr.keys()){
    console.log(index);
}
// #endregion

// #region 方法名：values()
console.log("|---- values ----|");
arr = [6, 2, 62, 7, 9, 1];
console.log(arr);
for(let value of arr.values()){
    console.log(value);
}
// #endregion

// #region 方法名：entries()
console.log("|---- entries ----|");
arr = [6, 2, 62, 7, 9, 1];
console.log(arr);
for(let [index, value] of arr.entries()){
    console.log(index);
    console.log(value);
}
// #endregion

console.log("");
console.log("");
console.log("");
console.log("|-------- 回调遍历 --------|");
// #region 方法名：every(func(e, i, a))
console.log("|---- every ----|")
arr = [1, 2, 999, 4, 9];
console.log(arr);
console.log(arr.every(e=>e>2));
// #endregion

// #region 方法名：some(func(e, i, a))
console.log("|---- some ----|")
arr = [1, 2, 999, 4, 9];
console.log(arr);
console.log(arr.some(e=>e>998));
// #endregion

// #region 方法名：find(func(e, i, a)) & findLast(func(e, i, a))
console.log("|---- find ----|")
arr = [1, 2, 999, 4, 9];
console.log(arr);
console.log(arr.find(e=>e>2));
console.log("|---- findLast ----|")
arr = [1, 2, 999, 4, 9];
console.log(arr);
console.log(arr.findLast(e=>e>2));
// #endregion

// #region 方法名：forEach(func(e, i, a))
console.log("|---- forEach ----|")
arr = [1, 2, 999, 4, 9];
console.log(arr);
arr.forEach(e=>console.log(e));
// #endregion

// #region 方法名：map(func(e, i, a))
console.log("|---- map ----|")
arr = [1, 2, 999, 4, 9];
console.log(arr);
console.log(arr.map(e=>e*2));
// #endregion

// #region 方法名：filter(func(e, i, a))
console.log("|---- filter ----|")
arr = [1, 2, 999, 4, 9];
console.log(arr);
console.log(arr.filter(e=>e>2));
// #endregion

// #region 方法名：reduce(func(p, c, i, a)) & reduceRight(func(p, c, i, a))
console.log("|---- reduce ----|")
arr = [1, 2, 999, 4, 9];
console.log(arr);
console.log(arr.reduce((prew, cur, index, array)=>{return prew-cur}));
console.log("|---- reduceRight ----|")
arr = [1, 2, 999, 4, 9];
console.log(arr);
console.log(arr.reduceRight((prew, cur, index, array)=>{return prew-cur}));
// #endregion

console.log("");
console.log("");
console.log("");
console.log("|-------- 修改源数组方法 --------|");
// #region 方法名：reverse()
console.log("|---- reverse ----|");
arr = [6, 2, 62, 7, 9, 1];
console.log(arr);
console.log(arr.reverse());
// #endregion

// #region 方法名：sort(func)
console.log("|---- sort ----|");
arr = [2, 4, 4, 7, 1, 9, 6];
console.log("原数组：");
console.log(arr);
console.log("倒序：");
arr = arr.sort((a, b)=>b-a);
console.log(arr);
console.log("顺序：");
arr = arr.sort();
console.log(arr);
// #endregion

// #region 方法名：splice(index, count, ...param)
console.log("|---- splice ----|");
arr1 = [1, 2, 3, 4, 5];
console.log("原数组：");
console.log(arr1);
console.log("增：");
arr = arr1.splice(2, 0, 333, 444, 555, 666);
console.log(arr);
console.log(arr1);
arr1 = [0, 1, 2, 3, 4];
console.log("删：");
arr = arr1.splice(2, 2);
console.log(arr);
console.log(arr1);
arr1 = [0, 1, 2, 3, 4];
console.log("改：");
arr = arr1.splice(2, 2, 333, 444, 555, 666);
console.log(arr);
console.log(arr1);
arr1 = [0, 1, 2, 3, 4];
// #endregion

// #region 方法名：fill(el, start, end)
console.log("|---- fill ----|")
arr = [2, 29, 7, 3, 6, 1];
console.log(arr);
console.log(arr.fill(5));
arr = [2, 29, 7, 3, 6, 1];
console.log(arr.fill(5, 1, 3));
// #endregion

// #region 方法名：copyWithin(pos, start, end)
console.log("|---- copyWithin ----|");
arr = [6, 2, 62, 7, 9, 1];
console.log(arr);
console.log(arr.copyWithin(0, 3, 4));
arr = [6, 2, 62, 7, 9, 1];
console.log(arr);
console.log(arr.copyWithin(0, -2, -1));
arr = [6, 2, 62, 7, 9, 1];
console.log(arr);
console.log(arr.copyWithin(0, 2));
// #endregion

console.log("");
console.log("");
console.log("");
console.log("|-------- 增删 --------|");
// #region 方法名：shift()
console.log("|---- shift ----|")
arr = [1, 2, 3, 4, 5];
console.log(arr);
arr.shift();
console.log(arr);
// #endregion

// #region 方法名：unshift(...param)
console.log("|---- unshift ----|")
arr = [1, 2, 3, 4, 5];
console.log(arr);
arr.unshift(555, 666);
console.log(arr);
// #endregion

// #region 方法名：pop()
console.log("|---- pop ----|")
arr = [1, 2, 3, 4, 5];
console.log(arr);
arr.pop();
console.log(arr);
// #endregion

// #region 方法名：push(...param)
console.log("|---- push ----|")
arr = [1, 2, 3, 4, 5];
console.log(arr);
arr.push(555, 666);
console.log(arr);
// #endregion
