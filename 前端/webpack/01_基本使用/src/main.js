import count from './js/count'
import sum from './js/sum'
import './css/iconfont.css'
import './css/index.css'
import './less/index.less'
import './sass/index.sass'
import './sass/index.scss'
import './stylus/index.styl'

console.log(count(3, 2));
console.log(sum(1, 2, 3, 4, 5));

// 判断是否支持热模块替换功能
if(module.hot){
  module.hot.accept("./js/count");
  module.hot.accept("./js/sum");
}