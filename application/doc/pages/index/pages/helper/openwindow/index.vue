<script>
import md from './doc.md'
import docLayout  from '../../layout';
let template = `<doc-layout>${md}</doc-layout>`;

import openwindow from '@helper/open-window'

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
		openwindow
    }
}
</script>
