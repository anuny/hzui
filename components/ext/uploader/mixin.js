import uploadIframe from './iframe'
import uploadForm from './form'
import uploadCrop from './crop'

export default {
	name: 'extUploader',
	components:{
		uploadIframe, // iframe代理
		uploadForm,// form表单代理
		uploadCrop // 图片预览与裁剪
	},
	props: {
		type:{ 
			type: String,
			default:'file'
		},
		field:{ 
			type: String,
			default:'file'
		},
		data:{ 
			type: Object,
			default:{}
		},
		url:String,
		crop:Object,
		uploaded:Function,
		fileChange:Function
	},
	data(){ 
		return{
			// 时间戳
			uid:new Date().getTime(),
			isCrop:false,
			cropInfo:{},
			src:''
		}
	},
	computed: {
		// 创建iframe代理
		iframeName(){
			return `extUploadIframe_${this.uid}`
		},
		// 创建表单
		formName(){
			return `extUploadForm_${this.uid}`
		}
	},
	methods: {
		// 图片裁剪完成后再次上传
		cropSave(){
			this.isCrop = false;

			let img = document.createElement('img');
			img.src = this.src;

			let sx = this.cropInfo.origin.left
			let sy = this.cropInfo.origin.top
			let sw = this.cropInfo.origin.width
			let sh = this.cropInfo.origin.height

			let dx = this.cropInfo.area.left
			let dy = this.cropInfo.area.top
			let dw = this.cropInfo.area.width
			let dh = this.cropInfo.area.height

			var canvas = document.createElement('canvas');
			canvas.width = dw
			canvas.height = dh
			var ctx = canvas.getContext("2d");
			ctx.drawImage(img, sx,sy,sw,sh,0,0,dw,dh);
			var url = canvas.toDataURL("image/png");
			this.cropInfo.image = url
			this.upload(this.cropInfo);
			img = null;
			canvas = null;
		},
		// 裁剪实时信息
		onCrop(info){
			this.cropInfo = info;
			this.crop.cutting && this.crop.cutting(info)
		},
		
		// 关闭图片裁剪框
		cropClose(){
			this.isCrop = false;
		},
		// 提交表单，可传递新参数
		upload: function(info) {
			this.$refs.form.submit(info);
        },
		// 获取本地图片地址，用于预览
		getImgUrl(file){
			let windowURL = window.URL || window.webkitURL;
			return windowURL.createObjectURL(file[0]);
		},
		
		// 表单提交后，iframe代理接受后台数据
		iframeReload(response){
			this.uploaded && this.uploaded(response)
			this.$destroy();
		},
		selectFile(file){
			if(this.crop){
				if(file){
					this.src =  this.getImgUrl(file);
					this.isCrop = true;
				}else{
					alert('浏览器不支持此功能，请升级您的浏览器！')
				}
			}else{
				this.upload()
			}
			this.fileChange && this.fileChange()
		}
		
	},
	mounted() {
		let main = document.getElementById('ext-uploader-main')
		if(main)document.body.removeChild(main);
		document.body.appendChild(this.$el)
	},
	beforeDestroy() {
		document.body.removeChild(this.$el);
	}
};




