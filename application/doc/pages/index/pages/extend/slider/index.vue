<script>
import md from './doc.md'
import docLayout  from '../../layout';
let template = `<doc-layout>${md}</doc-layout>`;
import extSlider from '@ext/slider'

import a from './1.jpg'
import b from './2.jpg'
import c from './3.jpg'

export default {
	template,
	components:{
		docLayout,
		extSlider
	},
    data: function () {
		return {
		}
	},
	mounted() {
		
		
	},
	computed: {
		a(){
			return a
		},
		b(){
			return b
		},
		c(){
			return c
		}
	},
	methods: {
		
    }
}
</script>
<style lang="less">

.ext-slider{
	
	.ext-slider-ctrl{
		.ext-slider-prev{
			
		}
		.ext-slider-next{
			
		}
	}
	.ext-slider-list{
		
	}
	
	.ext-slider-pos{
		height:50px;
		line-height:50px;
		
		&.only-num{
			.ext-slider-counter{
			
				li.num{
				}
			}
		}
		
		// 只显示标题
		&.only-title{
			.ext-slider-title{
			}
		}
		
		.ext-slider-title{
			font-size:14px;
			li{
			}
		}
		
		
		
		// 索引计数器
		.ext-slider-counter{
			
			li{
				
				
				&.num{
					
					
					&.current{
						color:#f00;
						background:#fff;
					}
					
				}
			
				
				&.current{
					
				}
			}
		}
	
	}
}

</style>