<script>
import md from './doc.md'
import docLayout  from '../../layout';
let template = `<doc-layout>${md}</doc-layout>`;
import extDatepicker from '@ext/datepicker';
export default {
	template,
	components:{
		docLayout,
		extDatepicker
	},
    data: function () {
		return {
			date:''
		}
	},
	mounted() {

		
	},
	methods: {

    }
}
</script>
