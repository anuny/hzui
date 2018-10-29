function command(selection) {
    this.selection = selection
    this.currentRange = null
}
command.prototype = {
  constructor: command,
  do(name,value){
  	let _name = `_${name}`
    if (this[_name]) {
      this[_name](value)
    } else {
      this._execCommand(name, value)
    }
  },
  styleWithCSS(){
		document.execCommand('styleWithCSS', null, true)
	},
	_insertHTML(html){
    const range = this.selection.getRange()

    if (document.queryCommandSupported('insertHTML')) {
        // W3C
        this._execCommand('insertHTML', html)
    } else if (range.insertNode) {
        // IE
        let node = document.createElement('')
        node.innerHTML = html;
        range.deleteContents()
        range.insertNode(node)
    } else if (range.pasteHTML) {
        // IE <= 10
        range.pasteHTML(html)
    } 
	},
	_insertElement: function (el) {
	  let range = this.selection.getRange()
    console.log(range);
	    if (range.insertNode) {
	      range.deleteContents()
	      range.insertNode(el)
	    }
	},
	_execCommand(name, value) {
    document.execCommand(name, false, value)
  },
  queryCommandValue: function (name) {
    return document.queryCommandValue(name)
	},
	queryCommandState: function (name) {
    return document.queryCommandState(name)
  },
  queryCommandSupported: function (name) {
    return document.queryCommandSupported(name)
  }


}

export default command

