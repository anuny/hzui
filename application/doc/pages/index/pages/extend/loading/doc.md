### 加载动画 ext-loading
该组件已经全局注册，请使用指令方式引用

###### 1.局部加载
<div class="column column-24" style="height:200px;position:relative;z-index:0;border:#EAEDF5 solid 1px;margin-bottom:20px" v-ext-loading="loading" loading-text="正在加载中"></div>



### 实例代码
``` html
<template>
	<div v-ext-loading="loading" loading-text="正在加载中">
		这是内容...
	</div>
<template>

<script>
export default {
    data() {
		return {
			loading:true
		}
	}
}
</script>
```

###### 2.全屏加载
<ui-button type="primary" @click="openLoading" v-ext-loading.fullscreen="loading2" loading-text="正在加载中">全屏加载</ui-button>

### 实例代码
``` html
<template>
	<ui-button 
		type="success" 
		v-ext-loading.fullscreen="loading" 
		loading-text="正在加载中"
		@click="openLoading" 
	>全屏加载</ui-button>
<template>

<script>
export default {
    data() {
		return {
			loading:false
		}
	},
	methods: {
		openLoading(){
			this.loading = true
		}
    }
}
</script>
```