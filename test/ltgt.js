var test = require('tape');
var Codec = require('..');

test('encode ltgt', function(t){
  var ltgt = {
    start: '686579',
    lte: '686579'
  };
  var codec = new Codec({ keyEncoding: 'hex' });

  var encoded = codec.encodeLtgt(ltgt);
  t.equal(encoded.start.toString(), 'hey');
  t.equal(encoded.lte.toString(), 'hey');

  var encoded = codec.encodeLtgt(ltgt, { keyEncoding: 'json' });
  t.equal(encoded.start, '"686579"');
  t.equal(encoded.lte, '"686579"');

  t.end();
});

