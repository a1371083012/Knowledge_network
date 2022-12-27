// 定义一个没有依赖的模块
define(function() {
    let name = 'dataService.js';
    function getName(){
        return name;
    }
    
    return {getName};
});