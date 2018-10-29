### 1.通过helper解析参数
``` js
import parameter from '@helper/parameter'

// 不传入url会解析当前地址
parameter('name') // zhangsan

// 传入url
let url = "http://test.com/index.php?name=zhangsan&age=18&sex=male"
parameter('name',url) // zhangsan
parameter('age',url) // 18
parameter('sex',url) // male
```

### 2.推荐使用vue的路由系统设置和获取参数
``` js
// 设置
{
    name:'个人信息',
    path:'/user/:name/:age/:sex',
}
// 获取
this.$route.query

```

``` js
// 类似get传参，通过URL传递参数
{
    name:'个人信息',
    path:'/user',
	query:{
		name:'zhangsan',
		age:18,
		sex:'male'
	}
}
// 获取query
this.$route.query
```

``` js
// 类似post传参
{
    name:'个人信息',
    path:'/user',
	params:{
		name:'zhangsan',
		age:18,
		sex:'male'
	}
}
// 获取params
this.$route.params
```