/* LocalStorage */
// 分别设置了user1和user2，并且打印获取到的user1和user2
localStorage.setItem('user1','John');
localStorage.setItem('user2','Mark');
console.log('user1: '+localStorage.getItem('user1'));
console.log('user2: '+localStorage.getItem('user2'));

// 移除了user2
localStorage.removeItem('user2');

// 移除了全部LocalStorage
localStorage.clear();

/* SessionStorage */
// 分别设置了user1和user2，并且打印获取到的user1和user2
sessionStorage.setItem('user1','John');
sessionStorage.setItem('user2','Mark');
console.log('user1: '+sessionStorage.getItem('user1'));
console.log('user2: '+sessionStorage.getItem('user2'));

// 移除了user2
sessionStorage.removeItem('user2');

// 移除了全部SessionStorage
sessionStorage.clear();