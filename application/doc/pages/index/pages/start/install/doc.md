### 安装
``` shell
# 安装nodejs
https://nodejs.org

# 转至项目根目录
cd your path ...

# 安装依赖
npm install 或 npm i

# 编译dll
npm run dll appName

# 调试项目
npm run dev appName

# 编译打包
npm run pro appName

# appName = 项目文件夹名称
```

### 项目结构
> * 此结构只是项目基架，可根据项目需求增删

``` tree
root
|-- application // 项目文件
|   |-- doc // 开发文档
|   |   |-- ...
|   |-- pc // pc端应用
|   |   |-- api // api配置
|   |   |-- assets // 静态资源
|   |   |-- components // 项目组件
|   |   |-- config // 编译配置
|   |   |-- pages // 业务页面
|   |   |   |-- index // 首页（静态页面）
|   |   |   |-- user // 会员中心（单页）
|   |   |   |-- ... 
|   |   |-- store // 状态管理与配置
|   |   |-- ...
|   |-- ...
|-- assets // 公共静态资源
|-- compiled // 编译文件目录
|-- components // 公共组件
|-- documents // 文档资料及其他
|-- node_modules // node模块
|-- .babelrc // ES6编译配置
|-- build.js // 项目编译器
|-- package.json // 依赖模块元数据
|-- README.md  // 说明文档
```