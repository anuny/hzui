### 关于build.js
> * 基于webpack 及 express 的编译技术，使用各种文件加载器，将项目编译成适配各种生产环境需求的文件
> * 如需订制功能或其他建议，请联系架构人员，请勿擅自修改build.js文件 ！！！

``` javascript
// 根据package.json元数据检查依赖是否安装或需要升级的模块
checkversion() 

// 获取用户编译指令 npm run dev|dll|pro
process_envs() 

// 加载用户配置生成新配置
config() 

// 常用工具
utils() 

// 项目文件加载器
loaderRules() 

// webpack 基础配置
baseWebpackConfig() 

// 将公共模块或基础库打包成一个文件，避免每次dev或pro的编译速度很慢
// 第一次执行后，如没有改动公共库或文件，则不需再次执行
ACTIONS.dll() 

// 执行本地调试，此时项目运行在内存中，不会生成编译文件
ACTIONS.dev() 

// 执行编译打包，将项目以最优化的方式编译，编译文件可直接用于生产环境
ACTIONS.pro() 

```
