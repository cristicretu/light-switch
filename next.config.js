module.exports = {
  eslint: {
    dirs: ['pages', 'components'],
  },
  images: {
    domains: ['api.microlink.io'],
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.mp3$/,
      use: {
        loader: 'file-loader',
      },
    })
    return config
  },
}
