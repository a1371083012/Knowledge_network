// 判断浏览器版本（旧版）
function getBrowserInfo() {
    var Sys = {};
    var ua = navigator.userAgent.toLowerCase();
    var s; (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
    (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
    (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
    (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
    (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;
    if(Sys.ie) {
    return 'IE: ' + Sys.ie;
    }
    if(Sys.firefox) {
    return 'Firefox: ' + Sys.firefox;
    }
    if(Sys.chrome) {
    return 'Chrome: ' + Sys.chrome;
    }
    if(Sys.opera) {
    return 'Opera: ' + Sys.opera;
    }
    if(Sys.safari) {
    return 'Safari: ' + Sys.safari;
    }
}
// 判断浏览器版本（新版）
navigator.saysWho = (() => {
    const { userAgent } = navigator
    let match = userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []
    let temp
  
    if (/trident/i.test(match[1])) {
      temp = /\brv[ :]+(\d+)/g.exec(userAgent) || []
  
      return `IE ${temp[1] || ''}`
    }
  
    if (match[1] === 'Chrome') {
      temp = userAgent.match(/\b(OPR|Edge)\/(\d+)/)
  
      if (temp !== null) {
        return temp.slice(1).join(' ').replace('OPR', 'Opera')
      }
  
      temp = userAgent.match(/\b(Edg)\/(\d+)/)
  
      if (temp !== null) {
        return temp.slice(1).join(' ').replace('Edg', 'Edge (Chromium)')
      }
    }
  
    match = match[2] ? [ match[1], match[2] ] : [ navigator.appName, navigator.appVersion, '-?' ]
    temp = userAgent.match(/version\/(\d+)/i)
  
    if (temp !== null) {
      match.splice(1, 1, temp[1])
    }
  
    return match.join(' ')
})()

console.log("浏览器版本："+navigator.saysWho) // 新版：Edge (Chromium) 105
console.log("浏览器版本："+getBrowserInfo()); // 旧版：Chrome: 105.0.0.0

// 判断是否IE浏览器
function isIE()
{
    if(!!window.ActiveXObject || "ActiveXObject" in window)
        return true;
    else
        return false;
}
console.log("当前浏览器是否为IE浏览器：" + isIE());