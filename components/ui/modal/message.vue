<template>
	<ui-modal @close="close" @ok="ok" :title="title" :showClose="showClose"  width="500" :message="message"  :visible="modalVisible">
		<div class="modal-message-content">{{content}}</div>
	</ui-modal>
</template>
<script>
export default {
	props: {
		title: String,
		showClose:{
			type: Boolean,
			default: true,
		},
		content: String,
		autoClose:{
			type:Number,
			default:0
		},
		showOk:{
			type: Boolean,
			default: true,
		},
		showCancel:{
			type: Boolean,
			default: true,
		},
		type: {
			type: String,
			default: 'primary',
		},
		okText: {
			type: String,
			default: '确定',
		},
		coloseText: {
			type: String,
			default: '取消',
		},
		onOk:{
			type: Function,
			default: ()=>{},
		},
		onClose:{
			type: Function,
			default: ()=>{},
		},
	},
	data(){
		let message = {
			okText:this.okText,
			coloseText:this.coloseText,
			showCancel:this.showCancel,
			type:this.type
		}
		return {
			modalVisible:false,
			message
		}
	},
	
	methods: {
		close() {
			this.modalVisible = false
			this.onClose()
		},
		ok(){
			this.modalVisible = false
			this.onOk()
		}
	},
	mounted() {
		document.body.appendChild(this.$el);
		this.modalVisible = true

		if(this.autoClose){
			setTimeout(()=>{
				this.modalVisible = false
			},this.autoClose*1000)
		}
	},
};
</script>
