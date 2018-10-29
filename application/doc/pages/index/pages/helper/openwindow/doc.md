### 打开窗口 openwindow
<ui-button @click="openwindow('http://baidu.com')">打开窗口</ui-button>
<ui-button @click="openwindow('http://baidu.com',{left:0,top:0})">自定义位置</ui-button>
<ui-button @click="openwindow('http://baidu.com',{width:800,height:600})">自定义尺寸</ui-button>
``` html
<template>
	<ui-button @click="openwindow('http://baidu.com')">打开窗口</ui-button>
    <ui-button @click="openwindow('http://baidu.com',{left:0,top:0})">自定义位置</ui-button>
    <ui-button @click="openwindow('http://baidu.com',{width:800,height:600})">自定义尺寸</ui-button>
</template>

<script>
import openwindow from '@helper/open-window'
export default {
	methods: {
		openwindow
    }
}
</script>

```