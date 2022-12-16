/* 定义普通对象 */
let obj:object = {
  test: true
}

/* 定义接口 */
interface Post{
  title: string, /* 必须参数 */
  author: string, /* 必须参数 */
  [proName: string]: any, /* 后续可添加某干个参数 */
}

/* 使用接口：不能多或少定义属性 */
let post: Post = {
  title: '标题',
  author: 'mc',
  other: 'fafa',
}

function getTitle(post: Post){
  console.log(post.title)
}

getTitle(post);


export{};