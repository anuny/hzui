### 焦点图 ext-slider
样式可以自定义

### 左右滚动
direction属性，type:String default:`left` 可选：`left` `top`
<ext-slider width="100%" height="300" tween="Bounce.easeOut" :speed="1000"  :time="20" direction="left" :showTitle="false" autoplay>
	<li><img :src="a" alt="该组件已经全局注册，请使用指令方式引用" /></li>
	<li><img :src="b" alt="我们帮助 1000 万的开发者解决各种各样的技术问题" /></li>
	<li><img :src="c" alt="透明度渐变效果的组件放在TouchableOpacity中" /></li>
</ext-slider>


### 上下滚动
direction属性，type:String default:`left` 可选：`left` `top`
<ext-slider width="100%" height="300" tween="Quart.easeOut" :speed="1000"  :time="20" direction="top" :showTitle="false" autoplay>
	<li><img :src="a" alt="该组件已经全局注册，请使用指令方式引用" /></li>
	<li><img :src="b" alt="我们帮助 1000 万的开发者解决各种各样的技术问题" /></li>
	<li><img :src="c" alt="透明度渐变效果的组件放在TouchableOpacity中" /></li>
</ext-slider>
</ext-slider>


### 不显示显示图片信息
`showPos`属性，type:`Boolean` default:`true` 
<ext-slider width="100%" height="300" tween="Quart.easeOut" :speed="1000"  :time="20" direction="left" :showPos="false"  autoplay>
	<li><img :src="a" alt="该组件已经全局注册，请使用指令方式引用" /></li>
	<li><img :src="b" alt="我们帮助 1000 万的开发者解决各种各样的技术问题" /></li>
	<li><img :src="c" alt="透明度渐变效果的组件放在TouchableOpacity中" /></li>
</ext-slider>
</ext-slider>


### 显示图片alt标题
`showTitle`属性，type:`Boolean` default:`true` 
<ext-slider width="100%" height="300" tween="Quart.easeOut" :speed="1000"  :time="20" direction="left" :showNum="false"  autoplay>
	<li><img :src="a" alt="该组件已经全局注册，请使用指令方式引用" /></li>
	<li><img :src="b" alt="我们帮助 1000 万的开发者解决各种各样的技术问题" /></li>
	<li><img :src="c" alt="透明度渐变效果的组件放在TouchableOpacity中" /></li>
</ext-slider>
</ext-slider>


### 显示列表索引
`showNum`属性，type:`Boolean` default:`true` 
<ext-slider width="100%" height="300" tween="Quart.easeOut" :speed="1000"  :time="20" direction="left"   autoplay>
	<li><img :src="a" alt="该组件已经全局注册，请使用指令方式引用" /></li>
	<li><img :src="b" alt="我们帮助 1000 万的开发者解决各种各样的技术问题" /></li>
	<li><img :src="c" alt="透明度渐变效果的组件放在TouchableOpacity中" /></li>
</ext-slider>
</ext-slider>


### 实例代码
``` html
<template>
	<ext-slider 
		width="400"  宽度 type:String default:100% 
		height="300" 高度 type:String default:200 
		tween="Quart.easeOut"  // 缓动效果
		:speed="4000"  // 播放速度 type:Number default:3000
		:time="" // 滚动延时 type:Number default:10
		:duration="" //滚动持续时间  type:Number default:50
		direction="top"  // 滚动方向 type:String default:left left|top
		posType="" //索引类型 type:String default:dot dot|num
		:showPos="" //是否显示图片信息 type:Boolean default:true
		:showTitle="" //是否显示图片标题 type:Boolean default:true
		:showNum="" //是否显示图片索引 type:Boolean default:true
		autoplay // 是否自动播放 type:Boolean default:true
	>	
		<li><a href="http://baidu.com" title="这是链接地址"><img src="xxx.jpg" alt="这是标题..."/></a></li>
		<li><img src="xxx.jpg" /></li>
		...
	</ext-slider>
<template>

<script>
import extSlider from '@ext/slider'
export default {
    components:{
		extSlider
	}
}
</script>
```