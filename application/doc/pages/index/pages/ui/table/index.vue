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
			user:[
				{id:1,name:'张三',age:18,add:'贵州省贵阳市云岩区'},
				{id:1,name:'张三',age:18,add:'贵州省贵阳市云岩区'},
				{id:1,name:'张三',age:18,add:'贵州省贵阳市云岩区'},
				{id:1,name:'张三',age:18,add:'贵州省贵阳市云岩区'},
				{id:1,name:'张三',age:18,add:'贵州省贵阳市云岩区'}
			]
		}
	},
	mounted() {

		
	},
	methods: {
		del(row){
			this.$message.alert({
				content: '确定删除'+row.name+'吗?'
			});
		}
    }
}
</script>
