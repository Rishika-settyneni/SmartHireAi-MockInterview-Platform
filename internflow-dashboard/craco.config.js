module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        fs: false,
        path: false,
        crypto: false,
        stream: false,
        buffer: false,
        util: false,
        url: false,
        http: false,
        https: false,
        zlib: false,
        os: false,
        assert: false,
      };
      return webpackConfig;
    },
  },
};
