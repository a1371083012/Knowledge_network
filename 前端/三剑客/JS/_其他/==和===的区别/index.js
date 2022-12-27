/*
    说明：==只是值的对比，==对比会进行一个隐式的转换
*/
console.log(1 == '1');
console.log(1 == true);
console.log(1 == [1]);
console.log('1,2' == [1,2]);

/*
    说明：===不止是值的对比，还是类型的对比
*/
console.log(1 === '1');
console.log(1 === true);
console.log(1 === [1]);
console.log('1,2' === [1,2]);