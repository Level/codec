var test = require('tape');
var Codec = require('..');
var PassThrough = require('readable-stream').PassThrough;

test('createDecoderStream', function(t){
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

test('createStreamDecoder', function(t){
  var codec = new Codec({ keyEncoding: 'hex' });

  t.test('keys and values', function(t){
    var decoder = codec.createStreamDecoder({
      valueEncoding: 'json',
      keys: true,
      values: true
    });
    t.deepEqual(decoder(new Buffer('hey'), '"you"'), {
      key: '686579',
      value: 'you'
    });
    t.end();
  });

  t.test('keys', function(t){
    var decoder = codec.createStreamDecoder({
      keys: true
    });
    t.equal(decoder(new Buffer('hey')), '686579');
    t.end();
  });

  t.test('values', function(t){
    var decoder = codec.createStreamDecoder({
      valueEncoding: 'hex',
      values: true
    });
    t.equal(decoder(null, new Buffer('hey')), '686579');
    t.end();
  });
});
