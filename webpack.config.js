module.exports = {
  entry: {
    lib: ["./decorators.ts"],
    test: "./test/testTypescript.ts"
  },
  output: {
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  }
}
