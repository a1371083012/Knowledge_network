let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

let odd = []; // 奇数合集
let even = []; // 偶数合集
arr.forEach((value, index)=>{
    index%2==0?odd.push(value):even.push(value);
})
console.log(odd);
console.log(even);

// 方法2：特殊检索搭配取模组合（find、some、filter）
odd = [];
even = [];
arr.find((value, index)=>{
    index%2==0?odd.push(value):even.push(value);
})
console.log(odd);
console.log(even);

// 方法3：filter过滤器搭配取模组合（filter）
odd = [];
even = [];
odd = arr.filter((_, index)=>{
    return index%2 == 0;
})
even = arr.filter((_, index)=>{
    return index%2 == 1;
})
console.log(odd);
console.log(even);