const path = require('path')
const Dotenv = require('dotenv-webpack')

const CURRENT_WORKING_DIR = process.cwd()

module.exports = {
  entry: [path.join(CURRENT_WORKING_DIR, 'client/app/index.js')],
  resolve: {
    extensions: ['.js', '.json', '.css', '.scss', '.html'],
    alias: {
      app: 'client/app'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /(node_modules)/
      }
    ]
  },
  plugins: [
    new Dotenv()
  ]
}