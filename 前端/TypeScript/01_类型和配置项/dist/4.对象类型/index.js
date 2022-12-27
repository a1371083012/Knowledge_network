/* 定义普通对象 */
let obj = {
    test: true
};
/* 使用接口：不能多或少定义属性 */
let post = {
    title: '标题',
    author: 'mc',
    other: 'fafa',
};
function getTitle(post) {
    console.log(post.title);
}
getTitle(post);
