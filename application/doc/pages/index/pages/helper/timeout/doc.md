### 倒计时
<div>倒计时:<span v-text="times" :style="{color:color}"></span></div>
``` html
<template>
	<div v-text="times"></div>
</template>

<script>
import timeout from '@helper/timeout'
export default {
    data: function () {
		return {
			timeout:'',
			timer:null
		}
	},
	mounted() {
		// 此处请使用箭头函数
		this.timer = timeout({
			countdown:10, // 总时间
			rate:1000, // 频率
			start:()=>{ 
				this.times = '开始'
			},
			progress:(countdown)=>{
				this.times = countdown;
			},
			end:()=>{
				this.times = '结束'
			}
		})
	},
	destroyed(){
		// 因为vue是单页面应用，所以在页面切换（组件销毁）时应该clearTimeout
		// 请查阅vue文档，熟悉组件的生命周期
		this.timer.stop()
	}
}
</script>

```