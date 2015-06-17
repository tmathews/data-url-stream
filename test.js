var fs = require('fs')
var dataUrlStream = require('./index')
var str = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAAGElEQVQIW2P4DwcMDAxAfBvMAhEQMYgcACEHG8ELxtbPAAAAAElFTkSuQmCC'
var err

var stream = dataUrlStream(str)
var type = dataUrlStream.type(str)
var uri = './test.' + type.subtype

try {
  fs.unlinkSync(uri)
} catch (err) {
  // don't care
}

stream.pipe(fs.createWriteStream(uri))
console.log("Should have written:", uri)

err = undefined
try {
  dataUrlStream({})
}
catch (error) {
  err = error  
}
console.log('Errors on non-string:', !!err)

err = undefined
try {
  dataUrlStream()
}
catch (error) {
  err = error
}
console.log('Errors on invalid string:', !!err)
