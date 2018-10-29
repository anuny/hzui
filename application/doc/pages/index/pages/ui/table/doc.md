### 1.默认表格
没有设置任何参数
<ui-table :data="user">
  <ui-table-column field="id" label="ID"></ui-table-column>
  <ui-table-column field="name" label="姓名" ></ui-table-column> 
  <ui-table-column field="age" label="年龄" ></ui-table-column> 
  <ui-table-column field="add" label="地址" ></ui-table-column> 
</ui-table>
``` html
<ui-table :data="user">
  <ui-table-column field="id" label="ID"></ui-table-column>
  <ui-table-column field="name" label="姓名" ></ui-table-column> 
  <ui-table-column field="age" label="年龄" ></ui-table-column> 
  <ui-table-column field="add" label="地址" ></ui-table-column> 
</ui-table>
```

### 2.基础表格
`block`属性，type:`Boolean` default:`false`

<ui-table :data="user" block>
  <ui-table-column field="id" label="ID" width="50" align="center"></ui-table-column>
  <ui-table-column field="name" label="姓名" ></ui-table-column> 
  <ui-table-column field="age" label="年龄" ></ui-table-column> 
  <ui-table-column field="add" label="地址" ></ui-table-column>
</ui-table>
``` html
<ui-table :data="user" block>
  <ui-table-column field="id" label="ID" width="50" align="center"></ui-table-column>
  <ui-table-column field="name" label="姓名" ></ui-table-column> 
  <ui-table-column field="age" label="年龄" ></ui-table-column> 
  <ui-table-column field="add" label="地址" ></ui-table-column>
</ui-table>
```

### 3.斑马纹表格
`striped`属性，type:`Boolean` default:`false`
<ui-table :data="user" block striped>
  <ui-table-column field="id" label="ID" width="50" align="center"></ui-table-column>
  <ui-table-column field="name" label="姓名" ></ui-table-column> 
  <ui-table-column field="age" label="年龄" ></ui-table-column> 
  <ui-table-column field="add" label="地址" ></ui-table-column>
</ui-table>
``` html
<ui-table :data="user" block striped>
  <ui-table-column field="id" label="ID" width="50" align="center"></ui-table-column>
  <ui-table-column field="name" label="姓名" ></ui-table-column> 
  <ui-table-column field="age" label="年龄" ></ui-table-column> 
  <ui-table-column field="add" label="地址" ></ui-table-column>
</ui-table>
```

### 4.带边框表格
`border`属性，type:`Boolean` default:`false`
<ui-table :data="user" block striped border>
  <ui-table-column field="id" label="ID" width="50" align="center"></ui-table-column>
  <ui-table-column field="name" label="姓名" ></ui-table-column> 
  <ui-table-column field="age" label="年龄" ></ui-table-column> 
  <ui-table-column field="add" label="地址" ></ui-table-column>
</ui-table>
``` html
<ui-table :data="user" block striped>
  <ui-table-column field="id" label="ID" width="50" align="center"></ui-table-column>
  <ui-table-column field="name" label="姓名" ></ui-table-column> 
  <ui-table-column field="age" label="年龄" ></ui-table-column> 
  <ui-table-column field="add" label="地址" ></ui-table-column>
</ui-table>
```


### 5.隐藏表头
`thead`属性，type:`Boolean` default:`true`
<ui-table :data="user" :thead="false" block>
  <ui-table-column field="id" label="ID" width="50" align="center"></ui-table-column>
  <ui-table-column field="name" label="姓名" ></ui-table-column> 
  <ui-table-column field="age" label="年龄" ></ui-table-column> 
  <ui-table-column field="add" label="地址" ></ui-table-column>
</ui-table>
``` html
<ui-table :data="user" :thead="false" block>
  <ui-table-column field="id" label="ID" width="50" align="center"></ui-table-column>
  <ui-table-column field="name" label="姓名" ></ui-table-column> 
  <ui-table-column field="age" label="年龄" ></ui-table-column> 
  <ui-table-column field="add" label="地址" ></ui-table-column>
</ui-table>
```

### 5.自定义模板
采用vue的`slot-scope`实现
<ui-table :data="user" block border striped>
  <ui-table-column field="id" label="ID" width="50" align="center"></ui-table-column>
  <ui-table-column field="name" label="姓名" ></ui-table-column> 
  <ui-table-column field="age" label="年龄" ></ui-table-column> 
  <ui-table-column field="add" label="地址" ></ui-table-column>
  <ui-table-column label="操作" width="50">
	 <template slot-scope="row">
		<ui-button size="sm" type="primary" @click="del(row)">删除{{row.name}}</ui-button>
	 </template>
  </ui-table-column> 
</ui-table>

``` html
<ui-table :data="user" block border striped>
  <ui-table-column field="id" label="ID" width="50" align="center"></ui-table-column>
  <ui-table-column field="name" label="姓名" ></ui-table-column> 
  <ui-table-column field="age" label="年龄" ></ui-table-column> 
  <ui-table-column field="add" label="地址" ></ui-table-column>
  <ui-table-column label="操作" width="50">
	 <template slot-scope="row">
		<ui-button size="sm" type="primary" @click="del(row.id)">删除</ui-button>
	 </template>
  </ui-table-column> 
</ui-table>
```