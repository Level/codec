var test = require('tape');
var walk = require('../lib/walk');

test('walk', function(t){
  t.equal(walk(
    [{ keyEncoding: 'utf8' }],
    'keyEncoding'
  ), 'utf8');

  t.equal(walk(
    [{ keyEncoding: 'binary' }, { keyEncoding: 'utf8' }],
    'keyEncoding'
  ), 'binary');

  t.end();
});

