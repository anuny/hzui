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
			
		}
	},
	mounted() {

		
	},
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
