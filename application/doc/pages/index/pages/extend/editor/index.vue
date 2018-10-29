<script>
import md from './doc.md'
import docLayout  from '../../layout';
let template = `<doc-layout>${md}</doc-layout>`;
import extEditor from '@ext/editor'
export default {
	template,
	components:{
		docLayout,
		extEditor
	},
    data: function () {
		return {
			inputContent:''
		}
	},
	mounted() {

		
	},
	methods: {
		change(value){
			this.inputContent  = value
		}
    }
}
</script>
