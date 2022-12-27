/* 
** 方法：调用自定义的loadScript(url, fun)函数
** url：需要请求的地址
** fun：成功执行后的回调
*/
function loadScript(url, fun) {
    // 创建script标签
    var script = document.createElement('script');
    // 定义script标签的路径
    script.src = url;
    // script成功被加载后的回调
    script.onload = function(){
        fun();
    }
    // 将script标签加入到body中
    document.body.appendChild(script);
}

// script动态载入函数
loadScript('http://localhost:8080/pubilc/js/test.js', function(){
    // 可以获取对应路径的资源（参数、方法）
    console.log(data);
});