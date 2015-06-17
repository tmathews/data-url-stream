var streamifier = require('streamifier')

module.exports = function dataUrlStream (url) {
  if (!url || typeof url != 'string') throw Error('Invalid url provided.')
  var matches = url.match(/^[^,]*,(.*)/) || []
  var buffer = new Buffer(matches[1] || '', 'base64')
  return streamifier.createReadStream(buffer)
}

module.exports.type = function type (url) {
  var matches = url.match(/^.*:([^;]*);/) || []
  var type = matches[1] || ''
  var exploded = (type).split('/')
  return {
    mime: type,
    subtype: exploded[1] || '',
    type: exploded[0] || ''
  }
}
