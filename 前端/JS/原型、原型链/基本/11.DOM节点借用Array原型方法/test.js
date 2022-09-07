let arr = [1, 3, 43];
let res = arr.filter(item => {
    return item >39;
})
console.log(res);

let btns = document.querySelectorAll("button");
btns = [].filter.call(btns, item=>{
    return item.hasAttribute("class");
})
console.log(btns);