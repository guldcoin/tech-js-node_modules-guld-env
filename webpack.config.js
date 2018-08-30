module.exports = [
  {
    target: 'web',
    entry: {
      index: './index.js'
    },
    output: {
      filename: 'guld-env.min.js',
      path: __dirname,
      library: 'guldEnv',
      libraryTarget: 'var'
    },
    externals: {
      getos: 'getos'
    }
  }
]
