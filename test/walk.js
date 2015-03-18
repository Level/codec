var test = require('tape');
var walk = require('../lib/walk');

test('walk', function(t){
  t.equal(walk(
    [{ keyEncoding: 'utf8' }],
    ['keyEncoding', 'encoding']
  ), 'utf8');

  t.equal(walk(
    [{ keyEncoding: 'binary' }, { keyEncoding: 'utf8' }],
    ['keyEncoding', 'encoding']
  ), 'binary');

  t.equal(walk(
    [{ keyEncoding: 'utf8', encoding: 'buffer' }],
    ['keyEncoding', 'encoding']
  ), 'utf8');

  t.equal(walk(
    [{ encoding: 'utf8' }, { keyEncoding: 'buffer', encoding: 'hex' }],
    ['keyEncoding', 'encoding']
  ), 'utf8');

  t.end();
});

