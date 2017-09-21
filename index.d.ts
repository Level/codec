
declare namespace codec {
  interface CodecEncoder<I=any> {
    encode: (val: I) => any
    decode: (val: any) => I
    buffer: boolean
    type: string
  }

  interface CodecOptions<K=any, V=any> {
    keyEncoding?: string | CodecEncoder<K>
    valueEncoding?: string | CodecEncoder<V>
  }

  interface Codec {
    encodeKey(key: any, opts?: codec.CodecOptions, batchOpts?: codec.CodecOptions): any;
    encodeValue(value: any, opts?: codec.CodecOptions, batchOpts?: codec.CodecOptions): any;
    decodeKey(key: any, opts?: codec.CodecOptions): any;
    decodeValue(value: any, opts?: codec.CodecOptions): any;
    encodeBatch(ops: any, opts?: codec.CodecOptions): any;
    encodeLtgt(ltgt: any): any;
    createStreamDecoder(opts: codec.CodecOptions): any;
    keyAsBuffer(opts?: codec.CodecOptions): any;
    valueAsBuffer(opts?: codec.CodecOptions): any;
  }

  interface CodecConstructor {
    new(options?: CodecOptions): Codec;
    (options?: CodecOptions): Codec;
  }
}

declare const codec: codec.CodecConstructor;

export = codec;