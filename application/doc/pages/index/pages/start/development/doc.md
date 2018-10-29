

### 2.调试



1. 本地安装nginx或apache支持（可使用phpstudy）
2. 避免跨域，请将测试服务器API代理至本地


### 4.配置文件
> * 位于项目config目录，支持项目个性化编译

``` json
{
	// 是否生成SourceMap，（自行google SourceMap）
	sourceMap : false, // default false
	
	// 是否生成gZip压缩文件
	gzip : false, // default false
	
	// 调试端口
	devport : 9090, // default 8080

	// 自动打开浏览器
	autoOpenBrowser : false, // default true
	
	// 创建import或require的别名
	// default vue$ ，@，@components，@assets，@ext ，@helper，@ui 公共组件目录
	// 为了不污染公共目录，项目内请使用 ~ ，例如 ~components
	resolveAlias : { 
		'~' : __dirname,
		'~api' : path.resolve('api'),
		...
	},	
	// 需要提取到dll的库
	// default 'babel-polyfill','vue/dist/vue.esm.js','vue-router','vuex','axios','store','ui/style/ui.less'
	dlls:[
		'babel-polyfill',
		...
	],
	// 文件加载器，使用时自行安装 npm install xxx --save-dev
	// default vue，js，html，ejs，css，less，png，jpeg，gif，svg，woff2，eot，ttf，otf
	rules:[
		{
			test: /\.md$/,
			use: ["html-loader","markdown-loader"]
		},
		{
			...
		}
	]
}
```