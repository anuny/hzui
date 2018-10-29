<template>
	<div v-show="tipVisible" class="ui-message-tip" :class="maskClass" >
		<i class="icon" :class="icon"></i><span class="msg" >{{text}}</span>
	</div>
</template>
<script>
export default {
	props: {
		text: String,
		type: String
	},
	data(){
		return {
			visible:false,
			tipVisible:false,
			maskClass:[]
		}
	},
	watch:{
		visible(state){
			this.maskClass=[this.type];
			if(state){
				this.maskClass.push('ui-message-tip-in');
				this.tipVisible = state
				setTimeout(()=>this.visible=false, 3000);
			}else{
				this.maskClass.push('ui-message-tip-out')
				setTimeout(()=>this.$destroy(), 1000);
			}
		}
	},
	computed: {
		icon(){
			let name = 'info';
			if(this.type=='error'){
				name = 'error'
			}else if(this.type=='success'){
				name = 'success'
			}
			return `icon-${name}`
		}
	},
	mounted() {
		document.body.appendChild(this.$el);
		this.visible = true;
	},
	beforeDestroy() {
		document.body.removeChild(this.$el);
	}
};
</script>
<style lang="less">
@import "../style/inc/config";
@import "../style/inc/color";
.ui-message-tip {
	min-width: 50px;
	min-height: 30px;
	background: @color-blue;
	font-size: @font-size-min;
	padding: @gutter/2;
	border-radius: 0 0 3px 3px;
	color: @color-light;
	position: fixed;
	top: 0;
	left: 50%;
	transform: translate(-50%,0);
	z-index: 99999;

	.icon {
		font-size: @font-size-min;
		margin-right: @gutter/4;
		opacity:0.7;
	}

	&.primary{
		background: @color-blue;
	}
	&.error{
		background: @color-red;
	}
	&.success{
		background: @color-green;
	}
	
	&.ui-message-tip-in{
		animation:0.5s ease-out backwards;
		animation-name:ui-message-tip-in;
	}
	&.ui-message-tip-out{
		animation:0.5s ease-in forwards;
		animation-name:ui-message-tip-out;
	}
	@keyframes ui-message-tip-in{
		0%{
			opacity:0;
			transform:translate(-50%,-100px);
		}
		100%{
			opacity:1;
			transform:translate(-50%,0);
		}
	}
	@keyframes ui-message-tip-out{
		0%{
			opacity:1;
			transform:translate(-50%,0);
		}
		100%{
			opacity:0;
			transform:translate(-50%,-100px);
		}
	}
}
</style>