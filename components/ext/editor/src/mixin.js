import actions from './actions';

import selection from './selection';
import command from './command';

export default {
	data() {
			return {
				actionbarWidth:0,
				actionbarIsFixed:false,
				currents: '',
				html:'',
				text:''
			};
		},
		computed:{
			actions(){
				let ret = {};
				this.toolbar.forEach(i=>ret[i] = actions[i])
				return ret
			}
		},

		mounted() {
			this.html = this.content
			// 自动聚焦
			//if (this.focused) this.focus();

			// 以样式插入节点
			//this.exec('styleWithCSS');

			this.selection = new selection(this.$refs.content)

			this.command = new command(this.selection)

			// 工具栏浮动
			this.addActionbarFixed();

		},
		updated() {
			this.changed()
		},
		methods: {
			// 粘贴文本
			paste(e){
				e.preventDefault();
		    let text;
		    let clipboardData = (e.originalEvent || e).clipboardData;
		    if(clipboardData){
		    	text = clipboardData.getData('text/plain') || "";
			    if (text !== "") return this.exec('insertText', text);
		    }
		    text = window.clipboardData.getData("text")||'';
        if (text !== "") {
          if (window.getSelection) {
            var node = this.creatNode('span',text);
            window.getSelection().getRangeAt(0).insertNode(node);
          } else {
            document.selection.createRange().pasteHTML(text);
          }
        }
			},
			creatNode(tag,html){
				let node = document.createElement(tag)
				node.innerHTML = html;
				return node
			},
			// 设置Enter <p>换行
			addParagraph(){
				this.selection.saveRange()
				let firstChild = this.$refs.content.firstChild
				let isP = firstChild && firstChild.tagName=='P'
				let isH = firstChild && firstChild.tagName=='H2'
				let nodeType = firstChild && firstChild.nodeType;
				if(nodeType){
					if(!isP && !isH){
						let p = this.creatNode('p','')
						p.appendChild(firstChild);
						//_insertElement
						//console.log(this.command);
						//this.command.do('insertElement', p)
						this.exec('insertHTML', p.outerHTML)
					}
				}else{
					this.exec('insertHTML', '<p></br></p>')
					//this.command.do('insertHTML','<p></br></p>')
				}
			},
			// 阻止TAB键冒泡
			keydown(e){
				let keyCode = event.which;
				let isTab = keyCode==9;
				if(isTab) e.preventDefault();
			},
			// 阻止Del键和Backspace键冒泡
			keyup(e){
				var keyCode = e.which;
				var isBack = keyCode==8;
				var isDel = keyCode==46;
				var isTab = keyCode==9;
				if(isBack || isDel) e.preventDefault();
			},
			// 工具条浮动
			addActionbarFixed(){
				this.actionbarWidth = this.$refs.main.clientWidth;
				let beforeScrollTop = document.body.scrollTop||document.documentElement.scrollTop;
				let actionbar = this.$refs.actionbar
				let oHeight=actionbar.offsetParent.offsetTop
				window.addEventListener('scroll', (e) => {
					let afterScrollTop = document.body.scrollTop||document.documentElement.scrollTop,
						delta = afterScrollTop - beforeScrollTop,
						Height = 0,
						oldE = actionbar;
						while(oldE){
							Height+=oldE.offsetTop;
							oldE=oldE.offsetParent
						};
						if(delta > 0){
							if(afterScrollTop>Height){
								this.actionbarIsFixed = true
							}
						}else{
							if(afterScrollTop<=Height+oHeight){
								this.actionbarIsFixed = false
							}
						}
					setTimeout( ()=>beforeScrollTop = afterScrollTop, 250)
				}, true)
			},
			changed(e) {
				this.addParagraph()
				this.html = this.$refs.content.innerHTML;
				this.text = this.$refs.content.innerText;
				this.change && 'function' == typeof this.change && this.change(this.html, this.text);
			},
			// 插入内容
			exec(command, value) {
				this.focus();
				document.execCommand(command, false, value)
			},
			// 工具事件
			handleClick(action) {
				// 禁用编辑器后不可用
				if (this.disabled) return;
				// 插入前先获得焦点
				if (!this.focused) this.focus();
				// 执行插入
				action.call(this)
			},
			// 获得焦点
			focus() {
				this.$refs.content.focus();
				this.focused = true;
			},
			// 失去焦点
			blur() {
				this.$refs.content.blur();
				this.focused = false;
				this.onBlur && this.onBlur()
			},
			// 启用
			enable() {
				this.disabled = false
			},
			// 禁用
			disable() {
				this.disabled = true
			},
			current(type) {
				// 高亮已选择工具菜单
				if (type && this.currents.indexOf(type) >= 0) {
					return 'current'
				}
			},
			click(e) {
				let parentNodes = [];
				let editor = this.$refs.content

				function fliterParentNodes(node){
					if(!node || node==editor) return
					let parentNode = node.parentNode;
					if(parentNode && parentNode!=editor){
						let tagName = parentNode.tagName.toLowerCase();
						parentNodes.push(tagName)
						let more = fliterParentNodes(parentNode)
						if(more){
							let moreTagName = more.tagName.toLowerCase();
							parentNodes.push(moreTagName)
						}
					}
				}

				let selection = window.getSelection();

				if(selection.baseNode) {
					fliterParentNodes(selection.focusNode)
				}

				this.currents = parentNodes.join(',')
				
			}
		}
	}

