console.log("|-------- 数组声明 --------|");
let arr1 = [0, 1, 2, 3, 4];
let arr2 = [5, 6, 7, 8, 9];
let arr;
let temp;
console.log("arr1：" + arr1);
console.log("arr2：" + arr2);

console.log("|-------- 数组方法 --------|");
/**
 * 方法名：join(param)
 */
console.log("|---- join ----|");
arr = [];
arr = arr1.join(",");
console.log(arr);

/**
 * 方法名：concat(arr1, arr2, ...)
 */
console.log("|---- concat ----|");
arr = [];
arr = arr1.concat(arr2);
console.log(arr);

/**
 * 方法名：reverse()
 */
console.log("|---- reverse ----|");
arr = [];
arr = arr1.reverse();
console.log(arr);

/**
 * 方法名：sort()
 */
console.log("|---- sort ----|");
console.log("倒序：");
arr = arr1.sort((a, b)=>b-a);
console.log(arr);
console.log("顺序：");
arr = arr1.sort();
console.log(arr);

/**
 * 方法名：slice()
 */
 console.log("|---- slice ----|");
 arr = arr1.slice(0, 2);
 console.log(arr);

/**
 * 方法名：splice()
 */
console.log("|---- splice ----|");
console.log("原arr1：");
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

/**
 * 方法名：indexOf
 */
console.log("|---- indexOf ----|")
arr = [];
Object.assign(arr, arr2);
console.log(arr);
console.log(arr.indexOf(7));

/**
 * 方法名：shift
 */
console.log("|---- shift ----|")
arr = [];
Object.assign(arr, arr1);
arr.shift();
console.log(arr);

/**
 * 方法名：unshift
 */
console.log("|---- unshift ----|")
arr = [];
Object.assign(arr, arr1);
arr.unshift(555, 666);
console.log(arr);

/**
 * 方法名：pop
 */
console.log("|---- pop ----|")
arr = [];
Object.assign(arr, arr1);
arr.pop();
console.log(arr);

/**
 * 方法名：push
 */
console.log("|---- push ----|")
arr = [];
Object.assign(arr, arr1);
arr.push(555, 666);
console.log(arr);