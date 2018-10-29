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
			loading:true,
			loading2:false
		}
	},
	mounted() {
		
		
	},
	methods: {
		openLoading(){
			this.loading2 = true;
			setTimeout(()=>{
				this.loading2 = false;
			},3000)
		}
    }
}
</script>
