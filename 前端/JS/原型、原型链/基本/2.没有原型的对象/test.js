// 有原型的对象
let a = {
    name: {
        value: 12
    }
};
console.log(a);

// 没有原型的对象，只是数据字面量
let b = Object.create(null, {
    name: {
        value: 12
    }
});
console.log(b);