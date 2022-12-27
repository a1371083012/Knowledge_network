// 引入其他的模块
// 语法： import xxx from '路径'
import $ from 'jquery';

import {foo, bar} from './module1';
import {fun, fun2} from './module2';
import module3 from './module3';

foo();
bar();
fun();
fun2();
module3.fun3();
$('body').css('background', 'green');