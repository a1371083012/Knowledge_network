/* 
  1. webpack加载webpack.config.js中所有配置，此时就会new TestPlugin()，执行插件的construtor
  2. webpack创建compiler对象
  3. 遍历所有plugins中插件，请用插件的apply方法
  4. 执行剩下编译流程（触发各个hooks事件）
*/


class TestPlugin {
  constructor(){
    console.log("TestPlugin constructor");
  }

  apply(compiler){
    console.log("TestPlugin apply");

    // 由文档可知，environment是同步钩子，所以需要使用tap注册
    compiler.hooks.environment.tap('TestPlugin', () => {
      console.log("TestPlugin environment");
    });

    compiler.hooks.emit.tap('TestPlugin', (compilation) => {
      console.log("TestPlugin emit 111");
    });

    compiler.hooks.emit.tapAsync('TestPlugin', (compilation, callback) => {
      setTimeout(() => {
        console.log("TestPlugin emit 222");
        callback();
      }, 2000)
    });

    compiler.hooks.emit.tapPromise('TestPlugin', (compilation) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("TestPlugin emit 333");
          resolve();
        }, 1000);
      });
    });

    compiler.hooks.make.tapAsync('TestPlugin', (compilation) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("TestPlugin emit 333");
          resolve();
        }, 1000);
      });
    });
  }
}

module.exports = TestPlugin;