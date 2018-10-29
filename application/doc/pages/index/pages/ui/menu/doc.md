### 菜单 - menu
单纯的菜单，可以结合panel使用
<ui-menu>
	<ui-menu-item icon="icon-ui" >淘宝</ui-menu-item>
	<ui-menu-item icon="icon-ui" href="http://baidu.com" target="_blank" current>百度</ui-menu-item>
	<ui-menu-item icon="icon-ui" disabled @click="test">京东</ui-menu-item>
</ui-menu>

``` html
<ui-menu>
	<ui-menu-item icon="icon-ui" >淘宝</ui-menu-item>
	<ui-menu-item icon="icon-ui" href="http://baidu.com" target="_blank" current>百度</ui-menu-item>
	<ui-menu-item icon="icon-ui" disabled @click="test">京东</ui-menu-item>
</ui-menu>
```

###### 结合panel使用
<ui-panel>
	<ui-menu>
		<ui-menu-item icon="icon-ui" >淘宝</ui-menu-item>
		<ui-menu-item icon="icon-ui" href="http://baidu.com" target="_blank" current>百度</ui-menu-item>
		<ui-menu-item icon="icon-ui" disabled @click="test">京东</ui-menu-item>
	</ui-menu>
</ui-panel>

``` html
<ui-panel>
	<ui-menu>
		<ui-menu-item icon="icon-ui" >淘宝</ui-menu-item>
		<ui-menu-item icon="icon-ui" href="http://baidu.com" target="_blank" current>百度</ui-menu-item>
		<ui-menu-item icon="icon-ui" disabled @click="test">京东</ui-menu-item>
	</ui-menu>
</ui-panel>
```


###### 自定义尺寸
<ui-menu width="300px">
	<ui-menu-item icon="icon-ui" >淘宝</ui-menu-item>
	<ui-menu-item icon="icon-ui" href="http://baidu.com" target="_blank" current>百度</ui-menu-item>
	<ui-menu-item icon="icon-ui" disabled @click="test">京东</ui-menu-item>
</ui-menu>
``` html
<ui-menu width="300px">
	<ui-menu-item icon="icon-ui" >淘宝</ui-menu-item>
	<ui-menu-item icon="icon-ui" href="http://baidu.com" target="_blank" current>百度</ui-menu-item>
	<ui-menu-item icon="icon-ui" disabled @click="test">京东</ui-menu-item>
</ui-menu>
```