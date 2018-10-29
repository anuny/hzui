### 1.基础用法
常用的操作按钮，添加了灰色`gray`和黑色`dark`两种按钮。
<ui-button>默认按钮</ui-button>  <ui-button type="gray">灰色按钮</ui-button>   <ui-button type="dark">黑色按钮</ui-button>  <ui-button type="primary">主要按钮</ui-button>  <ui-button type="success">成功按钮</ui-button>  <ui-button type="warning">警告按钮</ui-button>  <ui-button type="danger">危险按钮</ui-button>
``` html
<ui-button>默认按钮</ui-button>
<ui-button type="gray">灰色按钮</ui-button>
<ui-button type="dark">黑色按钮</ui-button>
<ui-button type="primary">主要按钮</ui-button>
<ui-button type="success">成功按钮</ui-button>
<ui-button type="warning">警告按钮</ui-button>
<ui-button type="danger">危险按钮</ui-button>
```

### 1.线性按钮
`plain`属性，type:`Boolean` default:`false`
<ui-button plain>默认按钮</ui-button>  <ui-button type="gray" plain>灰色按钮</ui-button>   <ui-button type="dark" plain>黑色按钮</ui-button>  <ui-button type="primary" plain>主要按钮</ui-button>  <ui-button type="success" plain>成功按钮</ui-button>  <ui-button type="warning" plain>警告按钮</ui-button>  <ui-button type="danger" plain>危险按钮</ui-button>
``` html
<ui-button plain>默认按钮</ui-button>
<ui-button type="gray" plain>灰色按钮</ui-button>
<ui-button type="dark" plain>黑色按钮</ui-button>
<ui-button type="primary" plain>主要按钮</ui-button>
<ui-button type="success" plain>成功按钮</ui-button>
<ui-button type="warning" plain>警告按钮</ui-button>
<ui-button type="danger" plain>危险按钮</ui-button>
```

### 1.圆角按钮
`round`属性，type:`Boolean` default:`false`
<ui-button round>默认按钮</ui-button>  <ui-button type="gray" round>灰色按钮</ui-button>   <ui-button type="dark" round>黑色按钮</ui-button>  <ui-button type="primary" round>主要按钮</ui-button>  <ui-button type="success" round>成功按钮</ui-button>  <ui-button type="warning" round>警告按钮</ui-button>  <ui-button type="danger" round>危险按钮</ui-button>
``` html
<ui-button round>默认按钮</ui-button>
<ui-button type="gray" round>灰色按钮</ui-button>
<ui-button type="dark" round>黑色按钮</ui-button>
<ui-button type="primary" round>主要按钮</ui-button>
<ui-button type="success" round>成功按钮</ui-button>
<ui-button type="warning" round>警告按钮</ui-button>
<ui-button type="danger" round>危险按钮</ui-button>
```

### 1.图标按钮
`icon`属性，type:`String`` default:''
<ui-button icon="icon-anniu">默认按钮</ui-button>  <ui-button type="primary" icon="icon-bk-layout" round>圆角按钮</ui-button>  <ui-button type="success" icon="icon-bk-layout" plain>线性按钮</ui-button>
``` html
<ui-button icon="icon-anniu">默认按钮</ui-button>
<ui-button type="primary" icon="icon-bk-layout" round>圆角按钮</ui-button>
<ui-button type="success" icon="icon-bk-layout" plain>线性按钮</ui-button>
```


### 1.圆形按钮
`circle`属性，type:`Boolean` default:`false`
<ui-button circle icon="icon-bianjiqi"></ui-button>  <ui-button type="gray" icon="icon-bianjiqi" circle></ui-button>   <ui-button type="dark" icon="icon-bianjiqi" circle></ui-button>  <ui-button type="primary" icon="icon-bianjiqi" circle></ui-button>  <ui-button type="success" icon="icon-bianjiqi" circle></ui-button>  <ui-button type="warning" icon="icon-bianjiqi" circle></ui-button>  <ui-button type="danger" icon="icon-bianjiqi" circle></ui-button>
``` html
<ui-button round>默认按钮</ui-button>
<ui-button type="gray" icon="icon-bianjiqi" round>灰色按钮</ui-button>
<ui-button type="dark" icon="icon-bianjiqi" round>黑色按钮</ui-button>
<ui-button type="primary" icon="icon-bianjiqi" round>主要按钮</ui-button>
<ui-button type="success" icon="icon-bianjiqi" round>成功按钮</ui-button>
<ui-button type="warning" icon="icon-bianjiqi" round>警告按钮</ui-button>
<ui-button type="danger" icon="icon-bianjiqi" round>危险按钮</ui-button>
```


### 1.按钮尺寸
`size`属性，type:`String` default:`` 可选:大`lg` 小`sm`

<ui-button size="lg">默认按钮</ui-button>  <ui-button type="gray" size="lg">灰色按钮</ui-button>   <ui-button type="dark" size="lg">黑色按钮</ui-button>  <ui-button type="primary" size="lg">主要按钮</ui-button>  <ui-button type="success" size="lg">成功按钮</ui-button>  <ui-button type="warning" size="lg">警告按钮</ui-button>  <ui-button type="danger" size="lg">危险按钮</ui-button>

<ui-button>默认按钮</ui-button>  <ui-button type="gray">灰色按钮</ui-button>   <ui-button type="dark">黑色按钮</ui-button>  <ui-button type="primary">主要按钮</ui-button>  <ui-button type="success">成功按钮</ui-button>  <ui-button type="warning">警告按钮</ui-button>  <ui-button type="danger">危险按钮</ui-button>

<ui-button size="sm">默认按钮</ui-button>  <ui-button type="gray" size="sm">灰色按钮</ui-button>   <ui-button type="dark" size="sm">黑色按钮</ui-button>  <ui-button type="primary" size="sm">主要按钮</ui-button>  <ui-button type="success" size="sm">成功按钮</ui-button>  <ui-button type="warning" size="sm">警告按钮</ui-button>  <ui-button type="danger" size="sm">危险按钮</ui-button>

``` html
<ui-button size="lg">大尺寸</ui-button>
<ui-button>默认尺寸</ui-button>
<ui-button size="sm">小尺寸</ui-button>
```

### 1.按钮组
<ui-button-group><ui-button type="success">《</ui-button><ui-button type="success">1</ui-button><ui-button type="success">2</ui-button><ui-button type="success">3</ui-button><ui-button type="success">》</ui-button></ui-button-group>
<div class="clear"></div>
<ui-button-group><ui-button type="primary" size="lg">《</ui-button><ui-button type="primary" size="lg">1</ui-button><ui-button type="primary" size="lg">2</ui-button><ui-button type="primary" size="lg">3</ui-button><ui-button type="primary" size="lg">》</ui-button></ui-button-group>
<div class="clear"></div>
<ui-button-group><ui-button type="danger" size="sm">《</ui-button><ui-button type="danger" size="sm">1</ui-button><ui-button type="danger" size="sm">2</ui-button><ui-button type="danger" size="sm">3</ui-button><ui-button type="danger" size="sm">》</ui-button></ui-button-group>
<div class="clear"></div>
``` html
<ui-button-group>
	<ui-button type="success">《</ui-button>
	<ui-button type="success">1</ui-button>
	<ui-button type="success">2</ui-button>
	<ui-button type="success">3</ui-button>
	<ui-button type="success">》</ui-button>
</ui-button-group>
```


### 1.加载动画
`loading`属性，type:`Boolean` default:`false`
<ui-button loading>正在加载...</ui-button>  <ui-button type="danger" :loading="isLoading" @click="submits">{{text}}</ui-button>
``` html
<ui-button loading>正在加载...</ui-button>
<ui-button type="danger" :loading="isLoading" @click="submit">{{text}}</ui-button>
```
