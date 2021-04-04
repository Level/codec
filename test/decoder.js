const test = require('tape')
const Codec = require('..')

test('createStreamDecoder', function (t) {
  const codec = new Codec({ keyEncoding: 'hex' })

  t.plan(3)

  t.test('keys and values', function (t) {
    const decoder = codec.createStreamDecoder({
      valueEncoding: 'json',
      keys: true,
      values: true
    })
    t.deepEqual(decoder(Buffer.from('hey'), '"you"'), {
      key: '686579',
      value: 'you'
    })
    t.end()
  })

  t.test('keys', function (t) {
    const decoder = codec.createStreamDecoder({
      keys: true
    })
    t.equal(decoder(Buffer.from('hey')), '686579')
    t.end()
  })

  t.test('values', function (t) {
    const decoder = codec.createStreamDecoder({
      valueEncoding: 'hex',
      values: true
    })
    t.equal(decoder(null, Buffer.from('hey')), '686579')
    t.end()
  })
})

test('createStreamDecoder - legacy', function (t) {
  const codec = new Codec({ keyEncoding: 'hex' })

  t.plan(3)

  t.test('keys and values', function (t) {
    const decoder = codec.createStreamDecoder({
      encoding: 'json',
      keys: true,
      values: true
    })
    t.deepEqual(decoder(Buffer.from('hey'), '"you"'), {
      key: '686579',
      value: 'you'
    })
    t.end()
  })

  t.test('keys', function (t) {
    const decoder = codec.createStreamDecoder({
      keys: true
    })
    t.equal(decoder(Buffer.from('hey')), '686579')
    t.end()
  })

  t.test('values', function (t) {
    const decoder = codec.createStreamDecoder({
      encoding: 'hex',
      values: true
    })
    t.equal(decoder(null, Buffer.from('hey')), '686579')
    t.end()
  })
})
