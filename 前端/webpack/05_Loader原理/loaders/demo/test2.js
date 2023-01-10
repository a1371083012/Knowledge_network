module.exports = function(content, map, meta){
  const callback = this.async();

  setTimeout(() => {
    console.log("test2");
    callback(null, content, map, meta);
  }, 1000);
}