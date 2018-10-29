<template>
	<div class="editor" ref="main" :style="{width:width}">
		<div class="actionbar" ref="actionbar" :class="{'is-fixed':actionbarIsFixed}" :style="{width:actionbarWidth+'px'}">
			<button class="button" type="button" v-for="(v,k,i) in actions" :class="{current:current(v.tag)}" :key="k" :title="v.title" @click="handleClick(v.action)">
				<icon :name="k"/>
		  </button>
		</div>
		<div class="content typography" ref="content" :contenteditable="!disabled" @focus="focus" @blur="blur" @click="click" @input="changed" spellcheck="false" @keydown="keydown" @keyup="keyup" @paste="paste" v-html="content" :placeholder="placeholder"></div>
	</div>
</template>

<script>
	import extUploader from '@ext/uploader'
	import icon from './src/icons';
	import mixin from './src/mixin';
	export default {
		name: 'extEditor',
		components: {
			icon,
			extUploader
		},
		props: {
			// 宽
			width: {
				type: String,
				default: '100%'
			},
			placeholder: {
				type: String,
				default: '请输入内容...'
			},
			// 是否禁用
			disabled: {
				type: Boolean,
				default: false
			},
			// 是否自动聚焦
			focused: {
				type: Boolean,
				default: true
			},
			onBlur:Function,
			change: Function,
			trigger: String,
			content: String,
			uploadBase:String,
			toolbar:{
				type:Array,
				default:[]
			}
		},
		mixins:[mixin]
		
	}
</script>
	


<style lang="less" src="./style.less"></style>