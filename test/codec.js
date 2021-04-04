const test = require('tape')
const Codec = require('..')

test('codec', function (t) {
  let codec = new Codec({ keyEncoding: 'hex' })
  t.ok(codec.keyAsBuffer())
  codec = new Codec()
  t.notOk(codec.keyAsBuffer())
  t.end()
})

test('codec, new not needed', function (t) {
  let codec = Codec({ keyEncoding: 'hex' })
  t.ok(codec.keyAsBuffer())
  codec = Codec()
  t.notOk(codec.keyAsBuffer())
  t.end()
})
