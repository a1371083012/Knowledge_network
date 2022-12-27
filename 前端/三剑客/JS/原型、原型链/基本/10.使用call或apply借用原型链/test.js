let num = {
    data: [1, 2, 3, 4, 5, 7]
};
Object.setPrototypeOf(num,{
    max(){
        return this.data.sort((a, b)=>b-a)[0]
    }
})
console.log(Math.max.call(null, ...num.data));
console.log(num.max());
let stu = {
    lessons:{js:87, php:63, node:99, linux:88},
    get data(){
        return Object.values(this.lessons);
    }
};
console.log(num.max.apply(stu));

// Object.setPrototypeOf(num, {
//     max(data){
//         return data.sort((a,b)=>b-a)[0];
//     }
// })
// console.log(num.max(num.data));
// let stu = {
//     lessons:{js:87, php:63, node:99, linux:88}
// };
// console.log(num.max.call(null, Object.values(stu.lessons)));