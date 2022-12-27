setCookie('user1','Mark',1); //生成cookie1
setCookie('user2','John',2); //生成cookie2
console.log(document.cookie); //读取所有cookie
console.log(getCookie('user1')); //获取cookie1
console.log(getCookie('user2')); //获取cookie2
delCookie('user2'); //删除cookie2
console.log(document.cookie); //读取所有cookie
checkCookie('user1'); //检测cookie1

/* 设置cookie */
function setCookie(cname,cvalue,exdays)
{
  // 设置生命周期(以日为单位)
  var d = new Date();
  d.setTime(d.getTime()+(exdays*24*60*60*1000));
  var expires = "expires="+d.toGMTString();
  // 生成cookie
  document.cookie = cname + "=" + cvalue + "; " + expires;
}
/* 获取cookie */
function getCookie(cname)
{
  var name = cname + "=";
  var cookies = document.cookie.split(';');
  // 遍历所有cookies
  for(var cookie of cookies) 
  {
    var c = cookie.trim();
    // 如果找到对应key的cookie，则返回其对应的value
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return false;
}
/* 删除cookie */
function delCookie(cname)
{
  document.cookie = cname + "=; expires=Thu, 18 Dec 2003 12:00:00 GMT; path=/;";
}
/* 检测cookie（如果存在则直接访问，如果不存在则添加） */
function checkCookie(cname){
  var user=getCookie(cname);
  if (user!=""){
    alert("欢迎 " + user + " 再次访问");
  }
  else {
    user = prompt("请输入你的名字:","");
    if (user!="" && user!=null){
      setCookie(cname,user,30);
    }
  }
}
