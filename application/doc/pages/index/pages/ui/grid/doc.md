# 栅格系统 - Grid
响应式栅格系统，网格为24列

##### 1、水平排列
使用单一的一组column {1~24}栅格类，所有“列（column）必须放在 ” row 内。

`1*24`
<ui-row class="grid-demo">
  <ui-column col="1">1</ui-column>
  <ui-column col="1">1</ui-column>
  <ui-column col="1">1</ui-column>
  <ui-column col="1">1</ui-column>
  <ui-column col="1">1</ui-column>
  <ui-column col="1">1</ui-column>
  <ui-column col="1">1</ui-column>
  <ui-column col="1">1</ui-column>
  <ui-column col="1">1</ui-column>
  <ui-column col="1">1</ui-column>
  <ui-column col="1">1</ui-column>
  <ui-column col="1">1</ui-column>
  <ui-column col="1">1</ui-column>
  <ui-column col="1">1</ui-column>
  <ui-column col="1">1</ui-column>
  <ui-column col="1">1</ui-column>
  <ui-column col="1">1</ui-column>
  <ui-column col="1">1</ui-column>
  <ui-column col="1">1</ui-column>
  <ui-column col="1">1</ui-column>
  <ui-column col="1">1</ui-column>
  <ui-column col="1">1</ui-column>
  <ui-column col="1">1</ui-column>
  <ui-column col="1">1</ui-column>
</ui-row>    

`2*12` 
<ui-row class="grid-demo">
  <ui-column col="2">2</ui-column>
  <ui-column col="2">2</ui-column>
  <ui-column col="2">2</ui-column>
  <ui-column col="2">2</ui-column>
  <ui-column col="2">2</ui-column>
  <ui-column col="2">2</ui-column>
  <ui-column col="2">2</ui-column>
  <ui-column col="2">2</ui-column>
  <ui-column col="2">2</ui-column>
  <ui-column col="2">2</ui-column>
  <ui-column col="2">2</ui-column>
  <ui-column col="2">2</ui-column>
</ui-row>

`4*6`
<ui-row class="grid-demo">
  <ui-column col="4">4</ui-column>
  <ui-column col="4">4</ui-column>
  <ui-column col="4">4</ui-column>
  <ui-column col="4">4</ui-column>
  <ui-column col="4">4</ui-column>
  <ui-column col="4">4</ui-column>
</ui-row>

`6*4`
<ui-row class="grid-demo">
  <ui-column col="6">6</ui-column>
  <ui-column col="6">6</ui-column>
  <ui-column col="6">6</ui-column>
  <ui-column col="6">6</ui-column>
</ui-row>

`8*3`
<ui-row class="grid-demo">
  <ui-column col="8">8</ui-column>
  <ui-column col="8">8</ui-column>
  <ui-column col="8">8</ui-column>
</ui-row>

`12*2`
<ui-row class="grid-demo">
  <ui-column col="12">12</ui-column>
  <ui-column col="12">12</ui-column>
</ui-row>

`24*1`
<ui-row class="grid-demo">
  <ui-column col="24">24</ui-column>
</ui-row>

`20+4`
<ui-row class="grid-demo">
  <ui-column col="20">20</ui-column>
  <ui-column col="4">4</ui-column>
</ui-row>

`8+16`
<ui-row class="grid-demo">
  <ui-column col="8">8</ui-column>
  <ui-column col="16">16</ui-column>
</ui-row>

``` html
<ui-row>
  <ui-column col="6">6</ui-column>
  <ui-column col="6">6</ui-column>
  <ui-column col="...">...</ui-column>
</ui-row>
```

## 2、嵌套列
<ui-row class="grid-demo">
  <ui-column col="16">
    <ui-row>
      <ui-column col="12">12</ui-column>
      <ui-column col="12">12</ui-column>
    </ui-row>
	16
  </ui-column>
  <ui-column col="8">
	<ui-row>
      <ui-column col="12">12</ui-column>
      <ui-column col="12">12</ui-column>
    </ui-row>
    8
  </ui-column>
</ui-row>

``` html
<ui-row class="grid-demo">
  <ui-column col="16">
    <ui-row>
      <ui-column col="12">12</ui-column>
      <ui-column col="12">12</ui-column>
    </ui-row>
	16
  </ui-column>
  <ui-column col="8">
	<ui-row>
      <ui-column col="12">12</ui-column>
      <ui-column col="12">12</ui-column>
    </ui-row>
    8
  </ui-column>
</ui-row>
```


## 3、列偏移
<ui-row class="grid-demo-offset">
  <ui-column col="8" :offset="8">col-8 offset-8</ui-column>
  <ui-column col="4" :offset="12">col-4 offset-12</ui-column>
</ui-row>

``` html
<ui-row class="grid-demo-offset">
  <ui-column col="8" :offset="8">col-8 offset-8</ui-column>
  <ui-column col="4" :offset="12">col-4 offset-12</ui-column>
</ui-row>
```
