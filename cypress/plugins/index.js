
import webpack from '@cypress/webpack-preprocessor'
import dotenv from 'dotenv'

dotenv.config();

module.exports = (config ) => {
  const options = {
    // send in the options from your webpack.config.js, so it works the same
    // as your app's code
    webpackOptions: require('../../webpack.config'),
    watchOptions: {}
  }

  config('file:preprocessor', webpack(options))
}