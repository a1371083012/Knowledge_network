// ajax请求
let a = $.ajax({
    type: 'GET',
    url: 'http://127.0.0.1:8080/getMethod',
    success: function (data) {
        console.log(data);
    },
    error: function (error){
        console.log(error);
    }
});
// ajax请求也可以使用then
$.ajax({
    type: 'GET',
    url: 'http://127.0.0.1:8080/getMethod',
}).then(function(data){
    console.log(data);
});

// axios请求
axios({
    method: 'get',
    url: 'http://127.0.0.1:8080/getMethod',
})
.then(function (response) {
    console.log(response);
})
.catch(function (error) {
    console.log(error);
});

// fetch请求
fetch('http://127.0.0.1:8080/getMethod', {
    // credentials: 'include', // 添加配置项，让fetch可以携带cookie
}).then(response =>{
    if (response.ok) {
        return response.json();
    }
    throw new Error('Network response was not ok.');
}).then(data => {
    console.log(data)
})

console.log(navigator);