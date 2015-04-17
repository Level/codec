var test = require('tape');
var Codec = require('..');
var PassThrough = require('readable-stream').PassThrough;

test('decoder', function(t){
  var codec = new Codec({ keyEncoding: 'hex' });

  t.test('keys and values', function(t){
    var decoder = codec.createDecodeStream({
      valueEncoding: 'json',
      keys: true,
      values: true
    });
    decoder.on('data', function(kv){
      t.deepEqual(kv, {
        key: '686579',
        value: 'you'
      });
      t.end();
    });

    var source = PassThrough({ objectMode: true });
    source.push({ key: new Buffer('hey'), value: '"you"' });

    source.pipe(decoder);
  });

  t.test('keys', function(t){
    var decoder = codec.createDecodeStream({
      keys: true
    });
    decoder.on('data', function(key){
      t.equal(key, '686579');
      t.end();
    });

    var source = PassThrough({ objectMode: true });
    source.push({ key: new Buffer('hey') });

    source.pipe(decoder);
  });

  t.test('values', function(t){
    var decoder = codec.createDecodeStream({
      valueEncoding: 'hex',
      values: true
    });
    decoder.on('data', function(value){
      t.equal(value, '686579');
      t.end();
    });

    var source = PassThrough({ objectMode: true });
    source.push({ value: new Buffer('hey') });

    source.pipe(decoder);
  });
});
