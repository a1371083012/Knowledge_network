// 定义没有依赖的模块
define(function(require, exports, module) {
    let msg = 'module3';
    function fun(){
        console.log(msg);
    }

    // 暴露模块
    exports.module3 = {fun};
});