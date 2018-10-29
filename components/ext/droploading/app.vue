<!--
Demo：
<ext-droploading class="box" loading-text="加载中" :loading="loading" :scollbar="scollbar" :distance="distance" v-on:loaded="loaded">
	{{HTML}}}
</ext-droploading>

参数说明：
distance:下拉至底部的距离 Number
scollbar:滚动条显示 Boolean
loading:数据加载状态 Boolean
loadingText:数据加载提示文本 String 默认"正在加载中"
-->
<template>
	<div class="droploading" v-on:scroll="scrolling">
		<slot></slot>
		<div :style="loadingStyle" v-ext-loading="loading" :loading-text="loadingText"></div>
	</div>
</template>

<script>
	'use strict';
	export default {
		name: 'droploading',
		props: {
			//下拉至底部的距离
			distance: {
				type: Number,
				default: 20
			},
			//滚动条显示
			scollbar: {
				type: Boolean,
				default: true
			},
			//数据加载状态
			loading: {
				type: Boolean,
				default: false
			},
			//数据加载提示文本
			loadingText: {
				type: String,
				default: "正在加载中"
			}
		},
		data() {
			return {}
		},
		computed: {
			loadingStyle() {
				return {
					width: 100 + '%',
					height: 50 + 'px'
				}
			}
		},
		methods: {
			scrolling(event) {
				if (!this.loading) {
					let scrollTop = event.target.scrollTop,
						scrollHeight = event.target.scrollHeight,
						clientHeight = event.target.clientHeight;
					let islaod = scrollHeight > clientHeight && (scrollTop + clientHeight + parseInt(this.distance)) >= scrollHeight;
					if (islaod) {
						this.$emit('loaded', {});
					}
				}
			},
		}
	}
</script>

<style lang="less">
	.droploading {
		overflow: hidden;
		overflow-y: scroll;
	}
</style>