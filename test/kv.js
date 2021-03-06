const test = require('tape')
const Codec = require('..')

test('encode key', function (t) {
  const codec = new Codec({ keyEncoding: 'hex' })

  let buf = codec.encodeKey('686579', {})
  t.equal(buf.toString(), 'hey')

  buf = codec.encodeKey('686579')
  t.equal(buf.toString(), 'hey')

  buf = codec.encodeKey('686579', {
    keyEncoding: 'binary'
  })
  t.equal(buf.toString(), '686579')

  buf = codec.encodeKey({ foo: 'bar' }, {
    keyEncoding: 'none'
  })
  t.deepEqual(buf, { foo: 'bar' })

  t.end()
})

test('encode value', function (t) {
  const codec = new Codec({ valueEncoding: 'hex' })

  let buf = codec.encodeValue('686579', {})
  t.equal(buf.toString(), 'hey')

  buf = codec.encodeValue('686579')
  t.equal(buf.toString(), 'hey')

  buf = codec.encodeValue('686579', {
    valueEncoding: 'binary'
  })
  t.equal(buf.toString(), '686579')

  t.end()
})

test('decode key', function (t) {
  const codec = new Codec({ keyEncoding: 'hex' })

  let buf = codec.decodeKey(Buffer.from('hey'), {})
  t.equal(buf, '686579')

  buf = codec.decodeKey(Buffer.from('hey'))
  t.equal(buf, '686579')

  buf = codec.decodeKey(Buffer.from('hey'), {
    keyEncoding: 'binary'
  })
  t.equal(buf.toString(), 'hey')

  t.end()
})

test('decode value', function (t) {
  const codec = new Codec({ valueEncoding: 'hex' })

  let buf = codec.decodeValue(Buffer.from('hey'), {})
  t.equal(buf, '686579')

  buf = codec.decodeValue(Buffer.from('hey'))
  t.equal(buf, '686579')

  buf = codec.decodeValue(Buffer.from('hey'), {
    valueEncoding: 'binary'
  })
  t.equal(buf.toString(), 'hey')

  t.end()
})

test('encode value - legacy', function (t) {
  const codec = new Codec({ encoding: 'hex' })

  let buf = codec.encodeValue('686579', {})
  t.equal(buf.toString(), 'hey')

  buf = codec.encodeValue('686579')
  t.equal(buf.toString(), 'hey')

  buf = codec.encodeValue('686579', {
    encoding: 'binary'
  })
  t.equal(buf.toString(), '686579')

  t.end()
})

test('decode value - legacy', function (t) {
  const codec = new Codec({ encoding: 'hex' })

  let buf = codec.decodeValue(Buffer.from('hey'), {})
  t.equal(buf, '686579')

  buf = codec.decodeValue(Buffer.from('hey'))
  t.equal(buf, '686579')

  buf = codec.decodeValue(Buffer.from('hey'), {
    encoding: 'binary'
  })
  t.equal(buf.toString(), 'hey')

  t.end()
})
