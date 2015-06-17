var fs = require('fs')
var dataUrlStream = require('./index')
var str = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAAGElEQVQIW2P4DwcMDAxAfBvMAhEQMYgcACEHG8ELxtbPAAAAAElFTkSuQmCC'
var stream = dataUrlStream(str)

var type = dataUrlStream.type(str)
var uri = './test.' + type.subtype

try {
  fs.unlinkSync(uri)
} catch (err) {
  // don't care
}

stream.pipe(fs.createWriteStream(uri))
