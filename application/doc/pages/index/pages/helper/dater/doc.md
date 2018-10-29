### 日期时间格式化
``` javascript
import dater from '@helper/dater'

// 获取当前时间
let nowdate = dater();

// 不传入时间会返回当前时间的信息
{
	"date":{
		"date":"2018-04-16T09:28:52.238Z", // 时间对象
		"stamp":1523870932238, // 时间戳
		"info":{
			"year":2018, // 年
			"quarter":2, // 季度
			"month":4, // 月
			"day":16, // 日
			"week":1, // 星期
			"hours":17, // 时
			"minutes":28, // 分
			"seconds":52, // 秒
			"msec":238 // 毫秒
		},
	"string":"Mon Apr 16 2018 17:28:52 GMT+0800 (中国标准时间)"
	}
}

// 传入时间对象
let date = dater(new Date())

// 传入时间戳
let date = dater('1523870932238')

// 传入时间
let date = dater('2018-04-16 17:28:52:30')
let date = dater("2018\04\16 17:28:52:30")

// 格式化
date.format('YYYY-MM-DD hh:mm:ss:ms') => "2018-04-16 17:28:52:30"

date.format('YYYY年MM月DD日 hh:mm:ss:ms') => "2018年04月02日 17:28:52:30"
date.format('YY年M月D日 hh:mm:ss:ms') => "18年4月2日 17:28:52:30"

date.format('YYYY年MM月DD日 (Q季度 星期W) hh:mm:ss:ms') => "2018年04月02日 (二季度 星期三) 17:28:52:30"
date.format('YYYY年MM月DD日 (q季度 星期w) hh:mm:ss:ms') => "2018年04月02日 (2季度 星期3) 17:28:52:30"


```