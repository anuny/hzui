### 文件上传 ext-uploader
基于`iframe`代理的无刷新轻量级上传组件，支持图片预览和裁剪 （无依赖）

###### 1.图片上传，裁剪预览

<img :src="avatarSrc" @click="uploadAvatar" ref="img" alt="图片上传裁剪"/>


###### 2.普通文件上传，可以自行绑定上传按钮
<ui-button type="primary" @click="uploadFile">上传普通文件</ui-button>





``` html
<template>
	<ext-uploader :option="optionAvatar"></ext-uploader>	
	<ext-uploader :option="optionFile">
		<span slot="label"><ui-button type="primary" >上传普通文件</ui-button></span>
	</ext-uploader>
</template>

<script>	
import extUploader from '@ext/uploader'
export default {
	components:{
		extUploader
	},
    data: function () {
		return {
			// 上传头像可以预览，主流浏览器本地预览，IE9上传后返回地址预览
			optionAvatar:{
				// 上传接口
				url:'http://doc.udo.com/api/upload.php', 
				field:'file', // 文件表单名
				type:'avatar', // 头像类型
				avatar:{
					width: 200, // 裁剪框初始宽度
					height: 200, // 裁剪框初始高度
					lock: true,  // 是否锁定裁剪框初比例
					center: true, // 裁剪框是否居中
					top: 10, // 裁剪框顶部距离
					left:10, // 裁剪框左部距离
					minHeight: 80, // 裁剪框的最小高度
					minWidth: 80, // 裁剪框最小宽度
					minImgWidth: 300, // 预览区最小宽度
					minImgHeight: 150, // 预览区最小高度
					// 裁剪实时回调,返回预览尺寸数据和图片实际尺寸数据
					cutting: info => this.avatarCutting(info) 
				}
			},
			// 上传普通文件文件没有预览，直接返回后台信息
			optionFile:{
				url:'http://doc.udo.com/api/upload.php',
				field:'file',
				type:'file'
			}
		}
	},
	methods: {
		avatarCutting(info){
			console.log(info)
		}
    }
}
</script>


```

