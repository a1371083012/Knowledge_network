let arr = [1,5,5,326,23,7,346,623,8,9];
let arrObj = [
    {name: "小明", sex: "男", hobby: "篮球"},
    {name: "小红", sex: "女", hobby: "跳舞"},
    {name: "小杰", sex: "男", hobby: "Rap"},
];

// map遍历
arr.map((value) =>{
    console.log(value);
})

// forEach遍历
arr.forEach((value) => {
    console.log(value);
});

// for遍历（for...in、for...of）
for(let value of arr){
    console.log(value);
}