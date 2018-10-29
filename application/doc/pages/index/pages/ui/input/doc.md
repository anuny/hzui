
# 表单 - Form

<form>
  <label for="name">输入框</label>
  <input class="form-control" type="text" id="name">
  
  <p></p>
  
  <label for="name">下拉选择</label>
  <select class="form-select">
    <option>请选择地区</option>
    <option>北京</option>
    <option>上海</option>
    <option>广东</option>
    <option>贵州</option>
	<option>很长很长很长的选项</option>
  </select>
   
   <p></p>

  <label>
    <input type="checkbox"> 复选
  </label>
	
  <p></p>
  <label>
    <input type="radio" id="herp" name="herpderp" checked> 单选
  </label>
  <label>
    <input type="radio" id="derp" name="herpderp"> 单选
  </label>

  <p></p>
  <button class="btn" type="submit">确认提交</button>
</form>

<form>
  <div class="form-checkbox">
    <label><input type="checkbox" checked="checked">同意《注册协议》</label>
    <p class="note">请认证阅读《注册协议》后提交申请!</p>
  </div>
</form>


<form>
  <dl class="form-group">
	<dt><label>简单文本框</label></dt>
	<dd><input class="form-control long" type="text" placeholder="填写字段"></dd>
  </dl>
  
  <dl class="form-group">
	<dt><label>简单文本框</label></dt>
	<dd><input class="form-control" type="text" placeholder="填写字段"></dd>
  </dl>
  
  <dl class="form-group">
	<dt><label>简单文本框</label></dt>
	<dd><input class="form-control short" type="text" placeholder="填写字段"></dd>
  </dl>
  
  <dl class="form-group">
	<dt><label>简单文本框</label></dt>
	<dd><input class="form-control shorter" type="text" placeholder="填写字段"></dd>
  </dl>
  

  <dl class="form-group">
	<dt><label>内联文本框</label></dt>
	<input class="form-control input-contrast half" type="text" placeholder="字段一">
	<input class="form-control input-contrast half" type="text" placeholder="字段二">
  </dl>

  <dl class="form-group">
	<dt><label>下拉</label></dt>
	<dd>
	  <select class="form-select">
		<option>请选择项目</option>
		<option>项目1</option>
		<option>项目2</option>
		<option>项目3 Coding</option>
		<option>项目4</option>
		<option>项目5</option>
		<option>项目6</option>
	  </select>
	</dd>
  </dl>

  <dl class="form-group">
	<dt><label>文本域</label></dt>
	<dd>
	  <textarea class="form-control"></textarea>
	</dd>
  </dl>
</form>

		
		
<form>
  <div class="form-checkbox">
    <label>
      <input type="checkbox" checked="checked">
      同意《注册协议》</input>
    </label>
    <p class="note">
      同意网站<strong>注册协议</strong> 和 <strong>用户使用手册</strong> !
    </p>
  </div>
</form>


<form>
  <div class="input-group">
    <input class="form-control" type="text" placeholder="Username">
  </div>
</form>

<form>
  <dl class="form-group">
    <dt><label>默认提示</label></dt>
    <dd><input class="form-control" type="text" placeholder="请输入字段值"></dd>
    <p class="note"><i class="icon icon-info"></i><span>手机号码不能为空</span></p>
  </dl>
  <dl class="form-group warn">
    <dt><label>警告提示</label></dt>
    <dd><input class="form-control" type="text" placeholder="请输入字段值"></dd>
    <p class="note"><i class="icon icon-info"></i><span>手机号码不能为空</span></p>
  </dl>
  <dl class="form-group error">
    <dt><label>错误提示</label></dt>
    <dd><input class="form-control" type="text" placeholder="请输入字段值"></dd>
    <p class="note"><i class="icon icon-error"></i><span>验证警告</span></p>
  </dl>
  <dl class="form-group success">
    <dt><label>正确提示</label></dt>
    <dd><input class="form-control" type="text" placeholder="请输入字段值"></dd>
    <p class="note"><i class="icon icon-success"></i><span>验证警告</span></p>
  </dl>
</form>


<div class="form-actions">
  <button type="button" class="btn btn-primary">Save changes</button>
  <button type="button" class="btn">Cancel</button>
</div>
<div class="clearfix m-b-5"></div>


