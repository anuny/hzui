<template>
  <div class="menu" :style="{width}">
    <slot></slot>
  </div>
</template>
<script>
	export default {
		name: 'Menu',
		props: {
			width:{
				type: String,
				default: ''
			}
		}
	};
</script>