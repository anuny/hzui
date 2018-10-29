export default {
	bold: {
		icon: '<b>B</b>',
		title: '粗体',
		tag:'b',
		action() {
			this.exec('bold')
		}
	},
	italic: {
		icon: '<i>I</i>',
		title: '斜体',
		tag:'i',
		action() {
			this.exec('italic')
		}
	},
	underline: {
		icon: '<u>U</u>',
		title: '下划线',
		tag:'u',
		action() {
			this.exec('underline')
		}
	},
	strikethrough: {
		icon: '<strike>S</strike>',
		title: '删除线',
		tag:'strike',
		action() {
			this.exec('strikeThrough')
		}
	},
	heading: {
		icon: '<b>H<sub>1</sub></b>',
		title: '标题',
		tag:'h2',
		action() {
			this.exec('formatBlock','<H2>')
		}
	},
	paragraph: {
		icon: '&#182;',
		title: '段落',
		tag:'p',
		action() {
			this.exec('formatBlock', '<P>')
		}
	},
	justify: {
		icon: '自动;',
		title: '自动对齐',
		tag:'p',
		action() {
			this.exec('justifyfull')
		}
	},
	center: {
		icon: '居中',
		title: '居中对齐',
		tag:'p',
		action() {
			this.exec('justifycenter')
		}
	},
	left: {
		icon: '左',
		title: '左对齐',
		tag:'p',
		action() {
			this.exec('justifyleft')
		}
	},
	right: {
		icon: '右',
		title: '右对齐',
		tag:'p',
		action() {
			this.exec('justifyright')
		}
	},
	
	quote: {
		icon: '&#8220; &#8221;',
		title: '引用',
		tag:'blockquote',
		action() {
			this.exec('formatBlock', '<BLOCKQUOTE>')
		}
	},
	olist: {
		icon: '&#35;',
		title: '有序列表',
		tag:'ol',
		action() {
			this.exec('insertOrderedList')
		}
	},
	ulist: {
		icon: '&#8226;',
		title: '无序列表',
		tag:'ul',
		action() {
			this.exec('insertUnorderedList')
		}
	},
	line: {
		icon: '&#8213;',
		title: '分隔线',
		tag:'hr',
		action() {
			this.exec('insertHorizontalRule')
		}
	},
	link: {
		icon: '&#128279;',
		title: '链接',
		tag:'a',
		action() {
			var url = window.prompt('请输入网址');
			if (url) this.exec('createLink', url)
		}
	},
	image: {
		icon: '&#128247;',
		title: '图片',
		tag:'img',
		action() {
			this.$uploader({
				url:this.uploadBase,
				field:'file',
				uploaded:(res)=>{
					if(res.status<0){
						return this.$message.tip('上传失败，请重新登录！','error')
					}
					let url = res.data;
					if (url) this.exec('insertImage', url)
				},
			})
		}
	},
	emotions: {
		icon: '🌝',
		title: '表情',
		action() {
			var face ='🌝';
			if (face) this.exec('insertText', face)
			
		}
	},
	emoji: {
		icon: '🌝',
		title: '表情',
		action() {
			this.exec('insertHTML', '')
			
		}
	}
}

