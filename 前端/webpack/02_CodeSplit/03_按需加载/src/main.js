import { sum } from './math';
// import count from './count';

console.log(sum(1, 2, 3));
console.log('hello main');

document.getElementById("btn").onclick = function(){
  // import 动态导入：会将动态导入的文件代码分割（拆分成单独模块），在需要使用的时候自动加载
  import('./count')
  .then((res) => {
    console.log('模块加载成功', res.default(2, 1));
  }).catch(() => {
    console.log('模块加载失败');
  })

  // console.log(count(2, 1));
}