# level-codec

**Superseded by [`level-transcoder`](https://github.com/Level/transcoder). Please see [Frequently Asked Questions](https://github.com/Level/community#faq).**

## Usage

**If you are upgrading:** please see [`UPGRADING.md`](UPGRADING.md).

```js
const Codec = require('level-codec')
const codec = Codec({ keyEncoding: 'json' })
const key = codec.encodeKey({ foo: 'bar' })
console.log(key) // -> '{"foo":"bar"}'
console.log(codec.decodeKey(key)) // -> { foo: 'bar' }
```

## API

### `codec = Codec([opts])`

Create a new codec, with a global options object.

### `codec.encodeKey(key[, opts])`

Encode `key` with given `opts`.

### `codec.encodeValue(value[, opts])`

Encode `value` with given `opts`.

### `codec.encodeBatch(batch[, opts])`

Encode `batch` ops with given `opts`.

### `codec.encodeLtgt(ltgt)`

Encode the ltgt values of option object `ltgt`.

### `codec.decodeKey(key[, opts])`

Decode `key` with given `opts`.

### `codec.decodeValue(value[, opts])`

Decode `value` with given `opts`.

### `codec.createStreamDecoder([opts])`

Create a function with signature `(key, value)`, that for each key-value pair returned from a levelup read stream returns the decoded value to be emitted.

### `codec.keyAsBuffer([opts])`

Check whether `opts` and the global `opts` call for a binary key encoding.

### `codec.valueAsBuffer([opts])`

Check whether `opts` and the global `opts` call for a binary value encoding.

### `codec.encodings`

The builtin encodings as object of form

```js
{
  [type]: encoding
}
```

See below for a list and the format of `encoding`.

## Builtin Encodings

| Type                                                              | Input                        | Stored as        | Output    |
| :---------------------------------------------------------------- | :--------------------------- | :--------------- | :-------- |
| `utf8`                                                            | String or Buffer             | String or Buffer | String    |
| `json`                                                            | Any JSON type                | JSON string      | Input     |
| `binary`                                                          | Buffer, string or byte array | Buffer           | As stored |
| `hex`<br>`ascii`<br>`base64`<br>`ucs2`<br>`utf16le`<br>`utf-16le` | String or Buffer             | Buffer           | String    |
| `none` a.k.a. `id`                                                | Any type (bypass encoding)   | Input\*          | As stored |

<sup>\*</sup> Stores may have their own type coercion. Whether type information is preserved depends on the [`abstract-leveldown`] implementation as well as the underlying storage (`LevelDB`, `IndexedDB`, etc).

## Encoding Format

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

## Contributing

[`Level/codec`](https://github.com/Level/codec) is an **OPEN Open Source Project**. This means that:

> Individuals making significant and valuable contributions are given commit-access to the project to contribute as they see fit. This project is more like an open wiki than a standard guarded open source project.

See the [Contribution Guide](https://github.com/Level/community/blob/master/CONTRIBUTING.md) for more details.

## License

[MIT](LICENSE.md) © 2012-present [Contributors](CONTRIBUTORS.md).

[`encoding-down`]: https://github.com/Level/encoding-down

[`abstract-leveldown`]: https://github.com/Level/abstract-leveldown

[`leveldown`]: https://github.com/Level/leveldown
