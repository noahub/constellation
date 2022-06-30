module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@luigiminardim/storybook-addon-globals-controls',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  webpackFinal: (config) => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          // Filter out the default .css rule.
          ...config.module.rules.filter((rule) => /\.css$/ !== rule.test),
          // Add our own css rule which in turn will read the postcss.config.js from project root.
          {
            test: /\.css1$/,
            exclude: [/\.module\.css$/, /@storybook/],
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: { importLoaders: 1, sourceMap: false },
              },
              {
                loader: 'postcss-loader',
                options: {
                  ident: 'postcss',
                  sourceMap: false,
                },
              },
            ],
          },
        ],
      },
    }
  },
}
