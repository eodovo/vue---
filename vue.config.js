const path = require("path");
module.exports = {
  outputDir: path.resolve(__dirname, "./tastDist"),

  //   assetsDir: "./"
  //   asset 파일 위치 설정
  publicPath: "./",

  transpileDependencies: [
    'vuetify'
  ]
};
