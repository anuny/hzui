### 富文本编辑器 ext-editor
<ext-editor width="100%" height="300px" :change="change" actionIcon="actionIcon"><img class="emoji" src="http://www.17sucai.com/preview/776331/2017-12-25/easyEditor/emoji/27.gif" />一段默认内容...</ext-editor>
<p style="margin:20px"> </p>
<div class="typography" v-html="inputContent"></div>


### 实例代码
``` html
<template>
	<ext-editor width="100%" height="300px" :change="change">
	  一段默认内容...
	</ext-editor>
	<div v-html="inputContent" />
<template>

<script>
import extEditor from '@ext/editor';
export default {
	components:{
		extEditor
	},
    data() {
		return {
			inputContent:'',
		}
	},
	methods: {
		change(value){
			this.inputContent = value
		}
    }
}
</script>
```