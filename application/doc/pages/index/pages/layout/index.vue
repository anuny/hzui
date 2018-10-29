<template>
    <div>
	    <div class="header" role="navigation">
			<div class="grid container">
			    <h5 class="nav" style="float:left" v-if="show">黑钻 - UI文档</h5>
				<div class="nav" style="float:right">
					<ul>
					    <router-link v-for="(route,i) in routes" :key="i" :to="route.path" tag="li">
							<a><i class="icon" :class="[route.iconCls ? route.iconCls : 'icon-default']"></i>{{route.name}}</a>
					    </router-link>
					</ul>
				</div>
			</div>
		</div>
		<div class="grid container">
			<ui-row>
			    
				<ui-column col="4">
				  <ui-panel class="menu" ref="menu">
				      <router-link v-for="(route,i) in subRoutes" :key="i" class="menu-item" :to="route.path" >
						<i class="icon" :class="[route.iconCls ? route.iconCls : 'icon-default']" ></i>
						{{route.name}}
					  </router-link>
				  </ui-panel>
				</ui-column>
				
				<ui-column :col="20" >
				  <ui-panel class="panel-main typography" ref="main" style="padding:20px"><slot/></ui-panel>
				</ui-column>
				
		    </ui-row>
	    </div>
	</div>
	
</template>
 
<script>
export default {
	data() {
		return {
			show:false
		}
	},
	components: {
		
	},
	created() {
		
	},
	watch: {

	},
	props: {
	},
	mounted(){
		require('@ext/highlight')({warp:true,line:false}).init();
		this.show = true
	},
	computed: {
		routes(){
			return this.$router.options.routes.filter(route=>!route.hidden)
		},
		subRoutes(){
			let subRoutes = [];
			let currentRoute = this.$route;
			if(currentRoute.matched){
				this.$router.options.routes.map(e=>{
					if( e.children && e.path == currentRoute.matched[0].path) subRoutes = e.children
				})
			}
			return subRoutes;
		}
	},
	methods: {
		
	}
}
</script>

