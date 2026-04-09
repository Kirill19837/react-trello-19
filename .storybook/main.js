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

    // Ensure babel-loader handles all JS/JSX including stories and src
    config.module.rules.push({
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', {targets: {esmodules: true}}],
            ['@babel/preset-react', {runtime: 'automatic'}],
          ],
          plugins: [
            '@babel/plugin-transform-template-literals',
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-transform-async-to-generator',
            '@babel/plugin-transform-runtime',
            ['module-resolver', {alias: {rt: path.resolve(__dirname, '../src')}}],
          ],
        },
      },
    })

    return config
  },
}
