var get = new XMLHttpRequest();
get.open('get', '/getMethod', true);
get.send("null");
get.onreadystatechange = function(){
    if(get.readyState == 4){
        if(get.status == 200){
            console.log(get.responseText);
        }
    }
}

var post = new XMLHttpRequest();
post.open('post', '/postMethod', true);
post.send("aa");
post.onreadystatechange = function(){
    if(post.readyState == 4){
        if(post.status == 200){
            console.log(post.responseText);
        }
    }
}