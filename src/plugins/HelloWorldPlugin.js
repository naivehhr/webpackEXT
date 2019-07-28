class HelloWorldPlugin {
  // apply(compiler) {
  //   compiler.hooks.compilation.tap("HelloCompilationPlugin", compilation => {
  //     // 现在，通过 compilation 对象，我们可以 tap(触及) 到各种可用的 hooks 了
  //     compilation.hooks.optimize.tap("HelloCompilationPlugin", () => {
  //       console.log("正在优化资源。");
  //     });
  //   });
  //   compiler.hooks.done.tap("hello wordl plugin", stats => {
  //     console.log("Hello World");
  //   });
  // }
  apply(compiler) {
    // emit 是异步 hook，使用 tapAsync 触及它，还可以使用 tapPromise/tap(同步)
    compiler.hooks.emit.tapAsync("FileListPlugin", (compilation, callback) => {
      // 在生成文件中，创建一个头部字符串：
      var filelist = "In this build:\n\n";

      // 遍历所有编译过的资源文件，
      // 对于每个文件名称，都添加一行内容。
      for (var filename in compilation.assets) {
        filelist += "- " + filename + "\n";
      }

      // 将这个列表作为一个新的文件资源，插入到 webpack 构建中：
      compilation.assets["filelist.md"] = {
        source: function() {
          return filelist;
        },
        size: function() {
          return filelist.length;
        }
      };

      callback();
    });
  }
}

module.exports = HelloWorldPlugin;
