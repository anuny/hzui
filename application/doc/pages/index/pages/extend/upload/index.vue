<script>
import md from './doc.md'
import docLayout  from '../../layout';
let template = `<doc-layout>${md}</doc-layout>`;
//import extUploader from '@ext/uploader'
export default {
	template,
	components:{
		docLayout,
		//extUploader
	},
    data: function () {
		return {
			avatarSrc:''
		}
	},
	mounted() {
	
	
	},
	methods: {
		uploadFile(){
			this.$uploader({
				url:'http://doc.udo.com/api/upload.php',
				field:'file',
				data:{
					test:123
				},
				callback:this._uploadFile,
			})
		},
		_uploadFile(res){
			
		},
		uploadAvatar(){
			this.$uploader({
				url:'http://doc.udo.com/api/upload.php',
				field:'file',
				crop:{
					width: 200, 
					height: 200,
					lock: true, 
					center: true, 
					top: 10, 
					left:10,
					minHeight: 80, 
					minWidth: 80,
					minImgWidth: 300,
					cutting:this.cutting
				},
				callback:this._uploadAvatar,
			})
		},
		_uploadAvatar(res){
			this.avatarSrc = res.image
		},
		cutting(info){
			this.avatarSrc = info.image
		}
    }
}
</script>

