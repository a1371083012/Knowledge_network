'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 默认暴露 可以暴露任意数据类型，暴露什么数据接收到的就是什么数据
// exprot default value;
exports.default = {
    a: 1,
    fun3: function fun3() {
        console.log('我是默认暴露');
        this.a++;
    }
};