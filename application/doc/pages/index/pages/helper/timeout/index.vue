<script>
import md from './doc.md'
import docLayout  from '../../layout';
let template = `<doc-layout>${md}</doc-layout>`;

import timeout from '@helper/timeout'

export default {
	template,
	components:{
		docLayout
	},
    data: function () {
		return {
			times:'',
			timer:null,
			color:'blue'
		}
	},
	mounted() {
		this.timer = timeout({
			countdown:5,
			rate:1000,
			start:()=>{
				this.times = '开始'
			},
			progress:(countdown)=>{
				this.times = countdown;
			},
			end:()=>{
				this.color= 'red'
				this.times = '结束'
			}
		});
	},
	destroyed(){
		this.timer.stop()
	},
	methods: {
		
    }
}
</script>
