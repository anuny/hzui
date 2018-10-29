
function selection(editorEl) {
    this.editorEl = editorEl
    this.currentRange = null
}
selection.prototype = {
    constructor: selection,
    getRange(){
		return this.currentRange
	},
	saveRange: function (value) {
		// 保存已有选区
        if (value) {
          return this.currentRange = value
        }

        // 获取当前的选区
        let selection = window.getSelection()
        if (selection.rangeCount === 0) {
          return
        }

        let range = selection.getRangeAt(0)

        // 判断选区内容是否在编辑内容之内
        let containerElem = this.getSelectionContainerElem(range)
        if (!containerElem) {
          return
        }

        // 判断选区内容是否在不可编辑区域之内
        if (containerElem.getAttribute('contenteditable') === 'false') {
          return
        }

        if (this.editorEl.contains(containerElem)) {
            // 是编辑内容之内的
            this.currentRange = range
        }
    },
    getSelectionContainerElem(range) {
        range = range || this.currentRange
        let elem
        if (range) {
          elem = range.commonAncestorContainer
          return elem.nodeType === 1 ? elem : elem.parentNode
        }
    }
}
export default selection