export default [
	{
		path: '/',
		name: '开始',
		redirect: '/start',
		hidden: true,
	},
	{
		path: '/start',
		name: '开始',
		iconCls: 'icon-start',
		component: require('./pages/layout/view'),
		redirect: '/start/about',
		children: [
			{
				path: 'about',
				name: '简述',
				iconCls: 'icon-xinzengyueding',
				component: require('./pages/start/about')
			},
			{
				path: 'install',
				name: '安装',
				iconCls: 'icon-anzhuang',
				component: require('./pages/start/install')
			},
			{
				path: 'development',
				name: '调试',
				iconCls: 'icon-bug',
				component: require('./pages/start/development')
			},
			{
				path: 'ruler',
				name: '约定',
				iconCls: 'icon-chizi',
				component: require('./pages/start/development')
			},
			{
				path: 'builder',
				name: '编译器',
				iconCls: 'icon-vuejs',
				component: require('./pages/start/builder')
			}
		]
	},
	{ 
		path: '/ui',
		name: 'UI',
		iconCls: 'icon-ui',
		component: require('./pages/layout/view'),
		redirect: '/ui/button',
		children: [
			{
				path: 'button',
				name: '按钮',
				iconCls: 'icon-anniu',
				component: require('./pages/ui/button')
			},
			{
				path: 'dropdown',
				name: '下拉菜单',
				iconCls: 'icon-xiala',
				component: require('./pages/ui/dropdown')
			},
			{
				path: 'grid',
				name: '栅格',
				iconCls: 'icon-bk-layout',
				component: require('./pages/ui/grid')
			},
			{
				path: 'input',
				name: '表单',
				iconCls: 'icon-select-opt',
				component: require('./pages/ui/input')
			},
			{
				path: 'modal',
				name: '弹框',
				iconCls: 'icon-dankuanganniu',
				component: require('./pages/ui/modal')
			},
			{
				path: 'page',
				name: '分页',
				iconCls: 'icon-fenye',
				component: require('./pages/ui/page')
			},
			{
				path: 'panel',
				name: '面板',
				iconCls: 'icon-mianbankaitong',
				component: require('./pages/ui/panel')
			},
			{
				path: 'menu',
				name: '菜单',
				iconCls: 'icon-caidan',
				component: require('./pages/ui/menu')
			},
			{
				path: 'tab',
				name: '选项卡',
				iconCls: 'icon-xuanxiangqia_tabyangshi',
				component: require('./pages/ui/tab')
			},
			{
				path: 'table',
				name: '表格',
				iconCls: 'icon-biaoge',
				component: require('./pages/ui/table')
			}
		] 
	},
	{
		path: '/extend',
		name: '扩展',
		iconCls: 'icon-extend',
		component: require('./pages/layout/view'),
		redirect: '/extend/editor',
		children: [
			{
				path: 'editor',
				name: '编辑器',
				iconCls: 'icon-bianjiqi',
				component: require('./pages/extend/editor')
			},
			{
				path: 'editor2',
				name: '编辑器-new',
				iconCls: 'icon-bianjiqi',
				component: require('./pages/extend/editor2')
			},
			{
				path: 'datepicker',
				name: '日期选择器',
				iconCls: 'icon-riqi',
				component: require('./pages/extend/datepicker')
			},
			{
				path: 'loading',
				name: '加载动画',
				iconCls: 'icon-loading',
				component: require('./pages/extend/loading')
			},
			{
				path: 'validata',
				name: '数据验证',
				iconCls: 'icon-yanzheng',
				component: require('./pages/extend/editor')
			},
			{
				path: 'slider',
				name: '焦点图',
				iconCls: 'icon-huandengpianguanli',
				component: require('./pages/extend/slider')
			},
			{
				path: 'upload',
				name: '文件上传',
				iconCls: 'icon-upload',
				component: require('./pages/extend/upload')
			}
		]
	},
	{
		path: '/helper',
		name: '工具',
		iconCls: 'icon-helper',
		component: require('./pages/layout/view'),
		redirect: '/helper/http',
		children: [
			{
				path: 'http',
				name: '数据请求',
				iconCls: 'icon-shuju',
				component: require('./pages/helper/http')
			},
			{
				path: 'dater',
				name: '时间格式化',
				iconCls: 'icon-riqi',
				component: require('./pages/helper/dater')
			},
			{
				path: 'timeout',
				name: '倒计时',
				iconCls: 'icon-daojishi',
				component: require('./pages/helper/timeout')
			},
			{
				path: 'parameter',
				name: '解析网址参数',
				iconCls: 'icon-wangzhi',
				component: require('./pages/helper/parameter')
			},
			{
				path: 'openwindow',
				name: '打开窗口',
				iconCls: 'icon-wangzhi',
				component: require('./pages/helper/openwindow')
			}
		]
	},
	{
        path: '*',
        hidden: true,
        redirect: '/404'
    },
    {
        path: '/404',
        component: require('./pages/layout/404'),
        name: 'NotFound',
        hidden: true
    }
	
];