const test = require('tape')
const Codec = require('..')

test('batch', function (t) {
  const codec = new Codec({})
  const ops = [
    { type: 'put', key: 'string', value: 'string', valueEncoding: 'utf8' },
    { type: 'put', key: 'json', value: {} }
  ]
  const opsSerialized = JSON.stringify(ops)

  let encoded = codec.encodeBatch(ops, { valueEncoding: 'json' })

  t.equal(opsSerialized, JSON.stringify(ops), 'ops not changed')

  t.deepEqual(encoded, [
    { type: 'put', key: 'string', value: 'string' },
    { type: 'put', key: 'json', value: '{}' }
  ])

  encoded = codec.encodeBatch(ops)
  t.deepEqual(encoded, [
    { type: 'put', key: 'string', value: 'string' },
    { type: 'put', key: 'json', value: {} }
  ])

  t.end()
})

test('batch - legacy', function (t) {
  const codec = new Codec({})
  const ops = [
    { type: 'put', key: 'string', value: 'string', encoding: 'utf8' },
    { type: 'put', key: 'json', value: {} }
  ]
  const opsSerialized = JSON.stringify(ops)

  let encoded = codec.encodeBatch(ops, { encoding: 'json' })

  t.equal(opsSerialized, JSON.stringify(ops), 'ops not changed')

  t.deepEqual(encoded, [
    { type: 'put', key: 'string', value: 'string' },
    { type: 'put', key: 'json', value: '{}' }
  ])

  encoded = codec.encodeBatch(ops)
  t.deepEqual(encoded, [
    { type: 'put', key: 'string', value: 'string' },
    { type: 'put', key: 'json', value: {} }
  ])

  t.end()
})
