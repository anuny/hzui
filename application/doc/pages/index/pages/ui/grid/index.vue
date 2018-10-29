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
		
    }
}
</script>
<style lang="less" scoped>
@color:#4E8AF9;
.grid-demo{
	border-top:@color solid 1px;
	border-left:@color solid 1px;
	
	.column{
		border-right:@color solid 1px;
		border-bottom:@color solid 1px;
		text-align:center;
		height:50px;
		line-height:50px;
	}
	
}

.grid-demo-offset{
	.column{
		border:@color solid 1px;
		text-align:center;
		height:50px;
		line-height:50px;
	}
}
</style>