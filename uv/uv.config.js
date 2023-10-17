self.__uv$config = {
    prefix: '/uv/service/',
    bare: 'https://astroid.wtf/bare/',    # the bare server is fine the probelm is searx.degenerate.
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    client: '/uv/uv.client.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',    
};
