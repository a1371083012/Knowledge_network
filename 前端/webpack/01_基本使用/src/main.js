// import "core-js"; // 引入core-js所有模块
import "core-js/es/promise"; // 只引入core-js中promise模块/补丁

import count from './js/count'
import sum from './js/sum'
import './css/iconfont.css'
import './css/index.css'
import './less/index.less'
import './sass/index.sass'
import './sass/index.scss'
import './stylus/index.styl'

document.getElementById("btn").onclick = function(){
  // eslint不能识别动态导入语法，需要额外追加配置
  // /* webpackChunkName: "math" */ webpack魔法命名
  import(/* webpackChunkName: "math" */ './js/math')
  .then((res) => {
    console.log('模块加载成功', res.default(2, 1));
  }).catch(() => {
    console.log('模块加载失败');
  })
}
console.log(count(3, 2));
console.log(sum(1, 2, 3, 4, 5));

// 判断是否支持热模块替换功能
if(module.hot){
  module.hot.accept("./js/count");
  module.hot.accept("./js/sum");
}

// 添加promise代码
const promise = Promise.resolve();
promise.then(() => {
  console.log("hello promise");
});

// 添加includes代码
console.log([1, 2, 3].includes(2));

// 启用serviceWorker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}