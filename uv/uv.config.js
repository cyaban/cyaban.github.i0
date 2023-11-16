self.__uv$config = {
    prefix: '/uv/service/',
    bare: 'https://interstellar-dev-mqta.4.us-1.fl0.io/outerspace/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    client: '/uv/uv.client.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
};
