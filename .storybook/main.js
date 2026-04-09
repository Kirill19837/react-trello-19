const path = require('path')

module.exports = {
  stories: ['../stories/**/*.story.@(js|jsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  webpackFinal: async config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      rt: path.resolve(__dirname, '../src'),
    }
    return config
  },
}
