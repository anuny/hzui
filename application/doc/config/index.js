function resolve(path){
	return require('path').resolve(__dirname, `../${path}`)
}

module.exports = {
	// 静态文件目录
	statics : 'static',
	
	entrys:'pages',
	
	// 入口文件
	entryJs : 'main.js',
	
	entryTpl : 'index.html',

	// 不编译的文件目录
	publics : '',

	// 调试端口
	devport : 9090,
	
	// 自动打开浏览器
	autoOpenBrowser : false,
	
	// 本地API
	devBase:'http://dev.udo.com/api',
	
	// 线上API
	proBase:'https://www.udo.com',
		
	//自动解析确定的拓展名,使导入模块时不带拓展名
	resolveExt : ['.js', '.vue', '.json', '.css', '.less'],
	
	proxyTable: {},
	
	rules:[
		{
			test: /\.md$/,
			use: ["html-loader","markdown-loader"]
		}
	],
	
	copys:[],
	
	// 创建import或require的别名
	resolveAlias : { 
		'~'    : resolve(''),
		'~api'    : resolve('api'),
		'~assets' : resolve('assets'),
		'~components' : resolve('components'),
		'~helper' : resolve('components/helper'),
		'~pages' : resolve('pages'),
		'~store' : resolve('store'),
	},
	// 需要提取到dll的库
	dlls:[],
	
	// 不打包的公共库
	externals: {},
	
	// 图片大于配置则不生成base64
	imglimit:10000,
	
	// 字体大于配置则不生成base64
	fontlimit:10000,
	
	// 是否生成SourceMap
	sourceMap : false,
	
	// 是否生成gZip文件
	gzip : false,
	
	// 需要生成gzip压缩文件后缀
	gzipExt : ['js', 'css'],
	
	// 生成js文件规则
	jsname:'js/[name].[hash].[ext]',
	
	// 生成css文件规则
	cssname:'css/[name].[ext]?[hash]',
	
	// 生成images文件规则
	imgname:'images/[name].[hash:7].[ext]',
	
	// 生成fonts文件规则
	fontname:'fonts/[name].[hash:7].[ext]',

	minify: {
		removeComments: true, // 移除注释
		collapseWhitespace: true, // 移除空格
		removeAttributeQuotes: false // 移除属性的引号
	}
}