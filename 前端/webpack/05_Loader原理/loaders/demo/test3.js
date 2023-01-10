// raw loader接收到content是buffer数据

// 第一种写法
// module.exports = function(content){
//   console.log(content);
//   return content;
// };
// module.exports.raw = true;

// 第二种写法
function test3Loader(content){
  return content;
}
test3Loader.raw = true;
module.exports = test3Loader;
