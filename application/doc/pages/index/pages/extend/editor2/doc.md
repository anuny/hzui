### 富文本编辑器 ext-editor
<ext-editor 
	ref="editor" 
	width="100%" 
	height="300px" 
	placeholder="请输入文章内容..." 
	:toolbar="['h2','bold','italic','link','image','underline']" 
	:disabled="disabled"
	:content="content"
	:onBlur = 'blur'
	editorClass = "typography"
	:paragraph="true"
	@init = 'init'
	uploadBase="http://test.com" 
	:changed="changed" >
</ext-editor>