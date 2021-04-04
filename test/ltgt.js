const test = require('tape')
const Codec = require('..')

test('encode ltgt', function (t) {
  const codec = new Codec({ keyEncoding: 'hex' })

  let ltgt = {
    gte: '686579',
    lte: '686579'
  }
  let encoded = codec.encodeLtgt(ltgt)
  t.equal(encoded.gte.toString(), 'hey')
  t.equal(encoded.lte.toString(), 'hey')

  ltgt = {
    gte: '686579',
    lte: '686579',
    keyEncoding: 'json'
  }
  encoded = codec.encodeLtgt(ltgt)
  t.equal(encoded.gte, '"686579"')
  t.equal(encoded.lte, '"686579"')

  t.end()
})

test('rejects legacy range options', function (t) {
  t.plan(2)

  const codec = new Codec()

  for (const k of ['start', 'end']) {
    try {
      codec.encodeLtgt({ [k]: 123 })
    } catch (err) {
      t.is(err.message, 'Legacy range options ("start" and "end") have been removed')
    }
  }
})
