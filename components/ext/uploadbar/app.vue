<!--
Demo：
<ext-uploadbar src="http://xavatar.imedao.com/community/20183/1523326397603-1523326397877.png" width="500" height="500" viewwidth="80" constrain="true" ratio="1:1" scale="true" &drag="function" />
参数说明：
src:图片路径地址 String
width:图片渲染框宽度 Number, 0自适应图片宽度
height:图片渲染框高度 Number, 0自适应图片高度
viewwidth:裁剪预览区宽度 Number
constrain:是否约束选区等比例缩放 Boolean
ratio:裁剪宽高比 String 默认"1:1"
scale:允许是否选区缩放
drag:缩放事件 返回裁剪数据data{x:x,y:y,width:width,height:height}
-->

<template>
	<div class="uploadbar">
		<div class="imgBlock">
			<p class="info">支持JPG、GIF、PNG格式图片，不超过5M。拖拽或缩放图中的虚线方格可调整头像，注意右侧小头像预览效果。</p>
			<div class="originImg" ref="originImg" :style="{width:width+'px',height:height+'px'}">
				<div class="zone">
					<img :src="src" ref="ferret" :style="{ width : imgWidth + 'px', height : imgHeight + 'px'}">
				</div>
				<div class="selected">
					<div class="selectboxleft" :style="{top:dragTop+'px', left:dragLeft+'px', width:'10px', height:dragHeight+'px'}" @mousedown="scale && dragging('w',$event)"></div>
					<div class="selectboxtop" :style="{top:dragTop+'px', left:dragLeft+'px', width:dragWidth+'px', height:'10px'}" @mousedown="dragging('n',$event)"></div>
					<div class="selectboxright" :style="{top:dragTop+'px', left:(dragLeft + dragWidth - 10) +'px', width:'10px', height:dragHeight+'px'}" @mousedown="dragging('e',$event)"></div>
					<div class="selectboxbottom" :style="{top:(dragTop + dragHeight - 10)+'px', left:dragLeft+'px', width:dragWidth+'px', height:'10px'}" @mousedown="dragging('s',$event)"></div>
					<div class="selectboxtl" :style="{top:dragTop+'px', left:dragLeft+'px', width:'10px', height:'10px'}" @mousedown="dragging('nw',$event)"></div>
					<div class="selectboxtr" :style="{top:dragTop+'px', left:(dragLeft + dragWidth - 10)+'px', width:'10px', height:'10px'}" @mousedown="dragging('ne',$event)"></div>
					<div class="selectboxbl" :style="{top:(dragTop + dragHeight - 10)+'px', left:dragLeft+'px', width:'10px', height:'10px'}" @mousedown="dragging('sw',$event)"></div>
					<div class="selectboxbr" :style="{top:(dragTop + dragHeight - 10)+'px', left:(dragLeft + dragWidth - 10)+'px', width:'10px', height:'10px'}" @mousedown="dragging('se',$event)"></div>
					<div class="selectboxdrag" :style="{top:dragTop+'px', left:dragLeft+'px', width:dragWidth+'px', height:dragHeight+'px'}" @mousedown="dragging(0,$event)"></div>
				</div>
				<div class="doneleft" :style="{top:doneleft_top + 'px', left:doneleft_left + 'px', width:doneleft_width + 'px', height:doneleft_height + 'px'}"></div>
				<div class="donetop" :style="{top:donetop_top + 'px', left:donetop_left + 'px', width:donetop_width + 'px', height:donetop_height + 'px'}"></div>
				<div class="doneright" :style="{top:doneright_top + 'px', left:doneright_left + 'px', width:doneright_width + 'px', height:doneright_height + 'px'}"></div>
				<div class="donebottom" :style="{top:donebottom_top + 'px', left:donebottom_left + 'px', width:donebottom_width + 'px', height:donebottom_height + 'px'}"></div>
			</div>
			<div class="previewBlock">
				<h2>头像预览：</h2>
				<div class="bigPriview" :style="{ width : viewwidth + 'px', height : viewheight + 'px'}">
					<img :src="src" alt="这是你的头像" title="这是你的头像" id="previewImg" :style="{width:previewWidth+'px',height:previewHeight+'px',top:previewTop+'px',left:previewLeft+'px'}">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import border_h from '~assets/images/border-h.gif'
	import border_v from '~assets/images/border-v.gif'
	'use strict';
	let onDrag = false;
	export default {
		name: 'uploadbar',
		props: {
			src: {
				type: String,
				default: ''
			},
			width: {
				type: Number,
				default: 500
			},
			height: {
				type: Number,
				default: 500
			},
			viewwidth: {
				type: Number,
				default: 80
			},
			viewheight: {
				type: Number,
				default: 80
			},
			//是否约束等比例选区
			constrain: {
				type: Boolean,
				default: false
			},
			//裁剪宽高比
			ratio: {
				type: String,
				default: "1:1"
			},
			//是否缩放
			scale: {
				type: Boolean,
				default: false
			},
			//是否显示工具栏
			toolbar: {
				type: Boolean,
				default: false
			},
			isauto:false,
		},
		data() {
			return {
				imgRatio: 0, //图片宽高比
				imgWidth: 100, //图片宽度
				imgHeight: 100, //图片高度
				dragTop: 0, //拖拽框top
				dragLeft: 0, //拖拽框left
				dragWidth: 0, //拖拽框width
				dragHeight: 0, //拖拽框height
			}
		},
		computed: {
			_ratio() {
				let a = this.ratio.split(":");
				return {
					w: parseInt(a[0]),
					h: parseInt(a[1])
				};
			},
			//预览图片宽度
			previewWidth() {
				return this.imgWidth / this.dragWidth * this.viewwidth;
			},
			//预览图片高度
			previewHeight() {
				return this.imgHeight / this.dragHeight * this.viewheight;
			},
			//预览图片top
			previewTop() {
				let _pt = 0;
				if (this.imgRatio >= 1 && !this.isauto) {

					let chaH = (this.width - this.imgHeight) / 2;
					_pt = (this.dragTop - chaH) / this.dragHeight * this.viewheight;
				} else {
					_pt = this.dragTop / this.dragHeight * this.viewheight;
				}
				return -_pt;
			},
			//预览图片left
			previewLeft() {
				let _pl = 0;
				if (this.imgRatio < 1 && !this.isauto) {
					let chaL = (this.width - this.imgWidth) / 2;
					_pl = (this.dragLeft - chaL) / this.dragWidth * this.viewwidth;
				} else {
					_pl = this.dragLeft / this.dragWidth * this.viewwidth;
				}
				return -_pl;
			},
			donetop_top() {
				return 0;
			},
			donetop_left() {
				return this.dragLeft;
			},
			donetop_width() {
				return this.dragWidth;
			},
			donetop_height() {
				return this.dragTop;
			},
			donebottom_top() {
				return this.dragTop + this.dragHeight;
			},
			donebottom_left() {
				return this.dragLeft;
			},
			donebottom_width() {
				return this.dragWidth;
			},
			donebottom_height() {
				return this.height - this.dragTop - this.dragHeight;
			},
			doneleft_top() {
				return 0;
			},
			doneleft_left() {
				return 0;
			},
			doneleft_width() {
				return this.dragLeft;
			},
			doneleft_height() {
				return this.height;
			},
			doneright_top() {
				return 0;
			},
			doneright_left() {
				return this.dragLeft + this.dragWidth;
			},
			doneright_width() {
				return this.width - this.dragLeft - this.dragWidth;
			},
			doneright_height() {
				return this.height;
			}
		},
		methods: {
			dragging(type, event) {
				let x = event.clientX;
				let y = event.clientY;
				let dl = this.dragLeft;
				let dt = this.dragTop;
				let dw = this.dragWidth;
				let dh = this.dragHeight;
				onDrag = true;
				this.originImg.onmousemove = e => {
						if (onDrag) {
							if (this.dragWidth <= 0 || this.dragHeight <= 0) {
								return;
							}
							let mouseMoveX = e.clientX - x;
							let mouseMoveY = e.clientY - y;
							let _l = mouseMoveX + dl;
							let _t = mouseMoveY + dt;
							let __w = this.width - this.dragWidth;
							let __h = this.height - this.dragHeight;
							//处理选区在图片范围内移动
							_l = _l < 0 ? 0 : _l;
							_l = _l > __w ? __w : _l;
							_t = _t < 0 ? 0 : _t;
							_t = _t > __h ? __h : _t;
							let bigmove = _l > _t ? _l : _t;
							switch (type) {
								case 0:
									this.dragLeft = _l;
									this.dragTop = _t;
									break;
								case 'n':
									this.dragTop = _t;
									this.dragHeight = dh - mouseMoveY;
									if (this.constrain) {
										this.dragWidth = dw - mouseMoveY;
										if (this.dragWidth >= this.imgWidth) {
											this.dragWidth = this.imgWidth;
											this.dragHeight = this.dragWidth;
										}
									}
									break;
								case 'e':
									this.dragWidth = dw + mouseMoveX;
									if (this.constrain) {
										this.dragHeight = dh + mouseMoveX;
										if (this.dragHeight >= this.imgHeight) {
											this.dragHeight = this.imgHeight;
											this.dragWidth = this.dragHeight;
										}
									}
									break;
								case 's':
									this.dragHeight = dh + mouseMoveY;
									if (this.constrain) {
										this.dragWidth = dw + mouseMoveY;
										if (this.dragWidth >= this.imgWidth) {
											this.dragWidth = this.imgWidth;
											this.dragHeight = this.dragWidth;
										}
									}
									break;
								case 'w':
									this.dragLeft = _l;
									this.dragWidth = dw - mouseMoveX;
									if (this.constrain) {
										this.dragHeight = dh - mouseMoveX;
										if (this.dragHeight >= this.imgHeight) {
											this.dragHeight = this.imgHeight;
											this.dragWidth = this.dragHeight;
										}
									}
									break;
								case 'ne':
									if (this.constrain) {
										this.dragTop = _t;
										this.dragHeight = dh - mouseMoveY;
										this.dragWidth = dw - mouseMoveY;
										if (this.dragWidth >= this.imgWidth) {
											this.dragWidth = this.imgWidth;
											this.dragHeight = this.dragWidth;
										}
									} else {
										this.dragTop = _t;
										this.dragHeight = dh - mouseMoveY;
										this.dragWidth = dw + mouseMoveX;
									}
									break;
								case 'nw':
									if (this.constrain) {} else {
										this.dragTop = _t;
										this.dragHeight = dh - mouseMoveY;
										this.dragLeft = _l;
										this.dragWidth = dw - mouseMoveX;
									}
									break;
								case 'se':
									if (this.constrain) {
										this.dragHeight = dh + mouseMoveY;
										this.dragWidth = dw + mouseMoveY;
										if (this.dragWidth >= this.imgWidth) {
											this.dragWidth = this.imgWidth;
											this.dragHeight = this.dragWidth;
										}
									} else {
										this.dragHeight = dh + mouseMoveY;
										this.dragWidth = dw + mouseMoveX;
									}
									break;
								case 'sw':
									if (this.constrain) {
										this.dragLeft = _l;
										this.dragWidth = dw - mouseMoveX;
										this.dragHeight = dh - mouseMoveX;
										if (this.dragHeight >= this.imgHeight) {
											this.dragHeight = this.imgHeight;
											this.dragWidth = this.dragHeight;
										}
									} else {
										this.dragHeight = dh + mouseMoveY;
										this.dragLeft = _l;
										this.dragWidth = dw - mouseMoveX;
									}
									break;
								default:
									break;
							}
							this.viewheight = this.viewwidth * this.dragHeight / this.dragWidth;
						}
					},
					window.onmouseup = () => {
						onDrag && this.dragged();
					}
			},
			dragged() {
				if (onDrag) {
					let _s = this.$refs.ferret.naturalWidth / this.imgWidth;
					let pos = {
						x: this.dragLeft * _s,
						y: this.dragTop * _s,
						width: this.dragWidth * _s,
						height: this.dragHeight * _s,
					};
					this.$emit('drag', pos);
				}
				onDrag = false;
			}
		},
		mounted() {
			this.constrain = this.constrain == "true";
			this.scale = this.scale == "true";
			this.originImg = this.$refs.originImg;
			let img = document.createElement('img')
			img.src = this.src
			img.onload = () => {
				let nWidth = this.$refs.ferret.naturalWidth;
				let nHeight = this.$refs.ferret.naturalHeight;
				this.imgRatio = nWidth / nHeight;
				let _rat = this._ratio.w / this._ratio.h;
				if (this.width == 0 || this.height == 0) {
					this.width = nWidth >= 500 ? 500 : nWidth;
					this.height = this.width / this.imgRatio;
					this.isauto = true;
				}
				if (this.imgRatio >= 1) { //宽图
					this.imgWidth = nWidth >= this.width ? this.width : nWidth;
					this.imgHeight = this.imgWidth / this.imgRatio
					//计算初始选框位置大小
					this.dragHeight = this.imgHeight;
					this.dragWidth = this.dragHeight * _rat;
					if (this.dragWidth > this.imgWidth) {
						this.dragWidth = this.imgWidth;
						this.dragHeight = this.dragWidth / _rat;
					}
				} else { //高图
					this.imgHeight = nHeight >= this.height ? this.height : nHeight
					this.imgWidth = this.imgHeight * this.imgRatio
					//计算初始选框位置大小
					this.dragWidth = this.imgWidth
					this.dragHeight = this.dragWidth / _rat;
				}
				this.dragTop = (this.height - this.dragHeight) / 2
				this.dragLeft = (this.width - this.dragWidth) / 2
			}
		}
	}
	/*
	//自定义指令
	import Vue from 'vue';
	var drag = {
		inserted(el) {
		}
	}
	Vue.directive('drag', drag);
	*/
	//计算预览区显示
</script>

<style lang="less">
	.uploadbar {
		padding: 20px;
		.imgBlock {
			.info {
				margin: 20px 0;
			}
			.originImg {
				float: left;
				overflow: hidden;
				position: relative;
				.zone {
					max-width: 100%;
					max-height: 100%;
					position: relative;
					top: 50%;
					transform: translateY(-50%);
					img {
						display: block;
						max-width: 100%;
						max-height: 100%;
						margin: auto auto;
						-webkit-user-select: none;
						-moz-user-select: none;
						-ms-user-select: none;
						user-select: none;
					}
				}
				.selected {
					//勿改，兼容IE9，IE10
					.selectboxdrag {
						position: absolute;
						cursor: move;
						z-index: 2;
						background: rgba(0, 0, 0, 0);
					}
					.selectboxleft {
						position: absolute;
						background: url(https://assets.imedao.com/images/border-v.gif) repeat-y left top;
						cursor: w-resize;
						z-index: 3;
					}
					.selectboxtop {
						position: absolute;
						background: url(https://assets.imedao.com/images/border-h.gif) repeat-x left top;
						cursor: n-resize;
						z-index: 3;
					}
					.selectboxright {
						position: absolute;
						background: url(https://assets.imedao.com/images/border-v.gif) repeat-y right top;
						cursor: e-resize;
						z-index: 3;
					}
					.selectboxbottom {
						position: absolute;
						background: url(https://assets.imedao.com/images/border-h.gif) repeat-x left bottom;
						cursor: s-resize;
						z-index: 3;
					}
					.selectboxtl {
						position: absolute;
						cursor: nw-resize;
						z-index: 4;
					}
					.selectboxtr {
						position: absolute;
						cursor: ne-resize;
						z-index: 4;
					}
					.selectboxbl {
						position: absolute;
						cursor: sw-resize;
						z-index: 4;
					}
					.selectboxbr {
						position: absolute;
						cursor: se-resize;
						z-index: 4;
					}
				}
				.doneleft,
				.donetop,
				.doneright,
				.donebottom {
					position: absolute;
					background: rgba(0, 0, 0, 0.2);
				}
			}
			.previewBlock {
				float: left;
				margin-left: 40px;
				.bigPriview {
					position: relative;
					overflow: hidden;
					border: 1px solid #eee;
					img {
						display: block;
						position: absolute;
						width: 100%;
						height: auto;
					}
				}
				h2 {
					font-size: 14px;
					padding: 10px 0;
				}
			}
			&:after {
				content: '';
				display: table;
				clear: both;
			}
		}
	}
</style>