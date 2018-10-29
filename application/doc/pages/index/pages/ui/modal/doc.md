<ui-button type="primary" @click="openModal">openModal</ui-button>
``` javascript
<template>
  <ui-button type="primary" @click="openModal">openModal</ui-button>
</template>

<script>
export default {
	methods: {
		openModal() {
		  this.$message.open({
			autoClose: 3,
			content: '你好...'
		  });
		}
    }
}
</script>
```