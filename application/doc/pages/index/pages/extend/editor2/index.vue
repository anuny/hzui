<script>
import md from './doc.md'
import docLayout  from '../../layout';
let template = `<doc-layout>${md}</doc-layout>`;
import extEditor from '@ext/editor-v2'
export default {
	template,
	components:{
		docLayout,
		extEditor
	},
    data: function () {
		return {
			inputContent:'',
			disabled:false,
			content:''
		}
	},
	mounted() {

	},
	methods: {
		changed(value){
			this.inputContent  = value
			//console.log(value);
		},
		init(editor){
			editor.append('')

		}
  }
}
</script>
