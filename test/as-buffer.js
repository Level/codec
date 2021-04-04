const test = require('tape')
const Codec = require('..')

test('key as buffer', function (t) {
  const codec = new Codec({ keyEncoding: 'hex' })
  t.ok(codec.keyAsBuffer({}))
  t.ok(codec.keyAsBuffer())
  t.notOk(codec.keyAsBuffer({ keyEncoding: 'utf8' }))
  t.end()
})

test('value as buffer', function (t) {
  const codec = new Codec({ valueEncoding: 'hex' })
  t.ok(codec.valueAsBuffer({}))
  t.ok(codec.valueAsBuffer())
  t.notOk(codec.valueAsBuffer({ valueEncoding: 'utf8' }))
  t.end()
})
