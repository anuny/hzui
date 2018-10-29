### 下拉菜单 dropdown
基础下拉组件，可配合 `ui-panel` `ui-menu`使用

###### 基础使用
``` html
<ui-dropdown>
	<div slot="trigger"> 触发对象 </div>
	<div slot="content"> 触发内容 </div>
</ui-dropdown>
```

<ui-dropdown trigger="click">
	<ui-button  type="primary" slot="trigger"><i class="icon icon-ui"></i>点击下拉</ui-button>
	<ui-panel width="500px" slot="content">
		<ui-menu>
			<ui-menu-item icon="icon-ui" >淘宝</ui-menu-item>
			<ui-menu-item icon="icon-ui" href="http://baidu.com" target="_blank" current>百度</ui-menu-item>
			<ui-menu-item icon="icon-ui" >京东</ui-menu-item>
			<ui-menu-item icon="icon-ui" >亚马逊</ui-menu-item>
		</ui-menu>
	</ui-panel>
</ui-dropdown>

``` html
<ui-dropdown trigger="click">
	<ui-button  type="primary" slot="trigger"><i class="icon icon-ui"></i>点击下拉</ui-button>
	<ui-panel width="500px" slot="content">
		<ui-menu>
			<ui-menu-item icon="icon-ui" >淘宝</ui-menu-item>
			<ui-menu-item icon="icon-ui" href="http://baidu.com" target="_blank" current>百度</ui-menu-item>
			<ui-menu-item icon="icon-ui" >京东</ui-menu-item>
			<ui-menu-item icon="icon-ui" >亚马逊</ui-menu-item>
		</ui-menu>
	</ui-panel>
</ui-dropdown>
```

<ui-dropdown trigger="hover">
	<ui-button type="success" slot="trigger"><i class="icon icon-user"></i>hover下拉</ui-button>
	<ui-menu width="500px" slot="content">
		<ui-menu-item icon="icon-ui" >淘宝</ui-menu-item>
		<ui-menu-item icon="icon-ui" href="http://baidu.com" target="_blank" current>百度</ui-menu-item>
		<ui-menu-item icon="icon-ui" >京东</ui-menu-item>
		<ui-menu-item icon="icon-ui" >亚马逊</ui-menu-item>
	</ui-menu>
</ui-dropdown>


``` html
<ui-dropdown trigger="hover">
	<ui-button type="success" slot="trigger"><i class="icon icon-ui"></i>hover下拉</ui-button>
	<ui-menu width="500px" slot="content">
		<ui-menu-item icon="icon-ui" >淘宝</ui-menu-item>
		<ui-menu-item icon="icon-ui" href="http://baidu.com" target="_blank" current>百度</ui-menu-item>
		<ui-menu-item icon="icon-ui" >京东</ui-menu-item>
		<ui-menu-item icon="icon-ui" >亚马逊</ui-menu-item>
	</ui-menu>
</ui-dropdown>
```
