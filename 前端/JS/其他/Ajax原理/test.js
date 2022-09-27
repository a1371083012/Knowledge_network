/** 1. 创建连接 **/
var xhr = new XMLHttpRequest();
/** 2. 连接服务器 **/
// xhr.open('get', 'http://route.showapi.com/341-1', true);
xhr.open('get', 'http://172.16.3.143:8088/index', true);
/** 3. 发送请求 **/
xhr.send(null);
/** 4. 接受请求 **/
xhr.onreadystatechange = function(){
	if(xhr.readyState == 4){
		if(xhr.status == 200){
            console.log(xhr.responseText);
		} else { 
			/** false **/
			fail && fail(xhr.status);
		}
	}
}


// jq版
$.ajax({
    // 请求方式
    type: 'POST',
    // 请求地址
    url: "http://route.showapi.com/341-1",
    // 发送服务端的数据
    data: null,
    // 服务端返回的数据类型
    dataType:'json',
    // 是否使用异步（默认为:true）
    async: true,
    // 成功回调
    success:function(result){
        console.log(result);
    },
    // 失败回调
    error: function(e){
        console.log(e);
    }
});