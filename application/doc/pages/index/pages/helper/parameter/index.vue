<script>
import md from './doc.md'
import docLayout  from '../../layout';
let template = `<doc-layout>${md}</doc-layout>`;

import parameter from '@helper/parameter'
let url = 'http://localhost:9090/#/helper/parameter?name=zhangsan&age=18&sex=male';

export default {
	template,
	components:{
		docLayout
	},
    data: function () {
		return {
		}
	},
	computed: {
		name(){
			return parameter('name',url)
		},
		age(){
			return parameter('age',url)
		},
		sex(){
			return parameter('sex',url)
		},
	},
	mounted() {
		
	},
	methods: {
		
    }
}
</script>
