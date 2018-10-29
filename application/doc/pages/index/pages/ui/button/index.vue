<script>
import md from './doc.md'
import docLayout  from '../../layout';
let template = `<doc-layout>${md}</doc-layout>`;

export default {
	template,
	components:{
		docLayout
	},
    data: function () {
		return {
			isLoading:false,
			text:'点击加载'
		}
	},
	mounted() {

		
	},
	methods: {
		submits(){
			this.isLoading = true;
			this.text = '正在加载...';
		}
    }
}
</script>
