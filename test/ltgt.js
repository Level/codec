const test = require('tape')
const Codec = require('..')

test('encode ltgt', function (t) {
  const codec = new Codec({ keyEncoding: 'hex' })

  let ltgt = {
    start: '686579',
    lte: '686579'
  }
  let encoded = codec.encodeLtgt(ltgt)
  t.equal(encoded.start.toString(), 'hey')
  t.equal(encoded.lte.toString(), 'hey')

  ltgt = {
    start: '686579',
    lte: '686579',
    keyEncoding: 'json'
  }
  encoded = codec.encodeLtgt(ltgt)
  t.equal(encoded.start, '"686579"')
  t.equal(encoded.lte, '"686579"')

  t.end()
})
