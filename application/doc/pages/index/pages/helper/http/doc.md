### 1.单独使用组件
``` javascript
import http from '@helper/http'

// POST
let data ={
	ids:[41,42,43,44,45,51,52]
};
http.post('/api/test/', data).then( res=> {
	this.list = res.data;
}).catch( error=> {
	console.log(error);
});


// GET
let params={
	act:'getlist'
};
http.get('/api/test/', params).then( res=> {
	this.list = res.data;
}).catch( error=> {
	console.log(error);
});


```

### 2.API封装
``` javascript
// api.js
import http from '@helper/http'
export const getTestList = params => http.get('/api/test/', params);
export const postTestList = params => http.post('/api/test/', params);


// test.vue
import * as api from 'api'

// POST
let data={
	ids:[41,42,43,44,45,51,52]
};
api.postTestList(data).then( res=> {
	this.list = res.data;
}).catch( error=> {
	console.log(error);
});

// GET
let params={
	act:'getlist'
};
api.getTestList(params).then( res=> {
	this.list = res.data;
}).catch( error=> {
	console.log(error);
});


```