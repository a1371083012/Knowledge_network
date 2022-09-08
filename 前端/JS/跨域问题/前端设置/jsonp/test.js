// 创建script标签
var script = document.createElement('script');
// 定义script标签的路径，设置参数和回调函数
script.src = 'http://localhost:8080/getMethod?user=mark&callback=onBack';
// 将script标签加入到body中
document.body.appendChild(script);

// 回调数据
function onBack(res){
    console.log(res);
}