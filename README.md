# level-codec

> Encoding logic for [`level(up)`](https://github.com/Level/levelup).

[![level badge][level-badge]](https://github.com/level/awesome)
[![npm](https://img.shields.io/npm/v/level-codec.svg)](https://www.npmjs.com/package/level-codec)
[![Travis](https://travis-ci.org/Level/codec.svg?branch=master)](https://travis-ci.org/Level/codec)
[![david](https://david-dm.org/Level/codec.svg)](https://david-dm.org/level/codec)
[![npm](https://img.shields.io/npm/dm/level-codec.svg)](https://www.npmjs.com/package/level-codec)

## API

### Codec([opts])

  Create a new codec, with a global options object.

  This could be something like

```js
var codec = new Codec(db.options);
```

### #encodeKey(key[, opts])

  Encode `key` with given `opts`.

### #encodeValue(value[, opts])

  Encode `value` with given `opts`.

### #encodeBatch(batch[, opts])

  Encode `batch` ops with given `opts`.

### #encodeLtgt(ltgt)

  Encode the ltgt values of option object `ltgt`.

### #decodeKey(key[, opts])

  Decode `key` with given `opts`.

### #decodeValue(value[, opts])

  Decode `value` with given `opts`.

### #createStreamDecoder([opts])

  Create a function with signature `(key, value)`, that for each key/value pair returned from a levelup read stream returns the decoded value to be emitted.

### #keyAsBuffer([opts])

  Check whether `opts` and the global `opts` call for a binary key encoding.

### #valueAsBuffer([opts])

  Check whether `opts` and the global `opts` call for a binary value encoding.

### #encodings

  The builtin encodings as object of form

```js
{
  [type]: encoding
}
```

See below for a list and the format of `encoding`.

## Builtin encodings

| Type     | Input                        | Stored as         | Output
|:---------|:-----------------------------|:------------------|:------
| `utf8`   | String or Buffer             | String or Buffer  | String
| `json`   | Any JSON type                | JSON string       | Input
| `binary` | Buffer, string or byte array | Buffer            | As stored
| `hex`<br>`ascii`<br>`base64`<br>`ucs2`<br>`utf16le`<br>`utf-16le` | String or Buffer | Buffer | String
| `none` a.k.a. `id`  | Any type (bypass encoding)   | Input\*            | As stored

<sup>\*</sup> Stores may have their own type coercion. Whether type information is preserved depends on the [`abstract-leveldown`] implementation as well as the underlying storage (`LevelDB`, `IndexedDB`, etc).

## Encoding format

An encoding is an object of the form:

```js
{
  encode: function (data) {
    return data
  },
  decode: function (data) {
    return data
  },
  buffer: Boolean,
  type: 'example'
}
```

All of these properties are required.

The `buffer` boolean tells consumers whether to fetch data as a Buffer, before calling your `decode()` function on that data. If `buffer` is true, it is assumed that `decode()` takes a Buffer. If false, it is assumed that `decode` takes any other type (usually a string).

To explain this in the grand scheme of things, consider a store like [`leveldown`] which has the ability to return either a Buffer or string, both sourced from the same byte array. Wrap this store with [`encoding-down`] and it'll select the most optimal data type based on the `buffer` property of the active encoding. If your `decode()` function needs a string (and the data can legitimately become a UTF8 string), you should set `buffer` to `false`. This avoids the cost of having to convert a Buffer to a string.

The `type` string should be a unique name.

## Publishers

* [@juliangruber](https://github.com/juliangruber)
* [@ralphtheninja](https://github.com/ralphtheninja)

## License &amp; copyright

Copyright (c) 2012-2017 `levelup` contributors.

`levelup` is licensed under the MIT license. All rights not explicitly granted in the MIT license are reserved. See the included LICENSE.md file for more details.

[level-badge]: http://leveldb.org/img/badge.svg
[`encoding-down`]: https://github.com/level/encoding-down
[`abstract-leveldown`]: https://github.com/level/abstract-leveldown
[`leveldown`]: https://github.com/level/leveldown
