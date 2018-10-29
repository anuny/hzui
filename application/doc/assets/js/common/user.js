export default {
	handles:{},
	info:{},
	getInfo(key){
		if(key && key !=''){
			return this.info[key]
		}else{
			return this.info
		}
	},
	setInfo(key,value){
		if(key && key !=''){
			this.info[key] = value
		}else{
			this.info = value
		}
	},
	login(info){
		this.fire('login')
	},
	logout(){
		this.fire('logout')
	},
	on(type,handle){
		if(!this.handles[type]) this.handles[type] = [];
		this.handles[type].push(handle);
	},
	fire(type){
		let handles = this.handles[type]||[];
		for(var i=0,len=handles.length;i<len;i++){
			'function' === typeof handles[i] && handles[i]();
		}
	}
	
}



