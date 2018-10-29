### 日期选择器 ext-datepicker
<ext-datepicker field="myDate" placeholder="选择日期" v-model="date" format="yyyy/mm/dd" />

### 实例代码
``` html
<template>
	<ext-datepicker field="myDate" placeholder="选择日期" v-model="date" format="yyyy/mm/dd" />
<template>

<script>
import extDatepicker from '@ext/datepicker';
export default {
	components:{
		extDatepicker
	},
    data() {
		return {
			date:''
		}
	}
}
</script>
```