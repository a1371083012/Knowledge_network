// 定义一个依赖的模块
define(['dataService', 'jquery'], function(dataService, $) {
    let msg = 'alerter.js';
    function showMsg(){
        console.log(msg, dataService.getName());
    }
    $('body').css('background-color','#444444');

    return {showMsg};
});