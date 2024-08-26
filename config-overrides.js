const { override, addWebpackModuleRule } = require('customize-cra');

module.exports = override(
  addWebpackModuleRule({
    test: /\.svg$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          // Add SVGR options here
          rsvgProps: {
            fill: 'currentColor',
            style: { width: '100px', height: '100px' },
          },
        },
      },
      'file-loader',
    ],
  })
);
