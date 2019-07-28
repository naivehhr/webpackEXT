const loaderUtils = require("loader-utils");
module.exports = function(source) {
  console.log("start process code ...");
  const options = loaderUtils.getOptions(this) || {};
  if (options !== {}) {
    const replaceMap = options["replaceMap"];
    for (let key in replaceMap) {
      console.log(source);
      source = source.replace(key, replaceMap[key]);
      console.log(source);
    }
  }
  return source;
};
