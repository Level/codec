var test = require('tape');
var batch = require('../lib/batch');

test('batch', function(t){
  var ops = [
    { type: 'put', key: 'string', value: 'string', valueEncoding: 'utf8' },
    { type: 'put', key: 'json', value: {} }
  ];
  var opsSerialized = JSON.stringify(ops);

  var encoded = batch(ops, [{ valueEncoding: 'json' }]);

  t.equal(opsSerialized, JSON.stringify(ops), 'ops not changed');

  t.deepEqual(encoded, [
    { type: 'put', key: 'string', value: 'string' },
    { type: 'put', key: 'json', value: '{}' }
  ]);

  t.end();
});

