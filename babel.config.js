module.exports = (api) => {
  api.cache(true);

  const presets = [
    ['@babel/preset-env', {
      corejs: 3,
      targets: {
        node: '10.15.1',
        browsers: [
          'chrome >= 52',
          'fireFox >= 44',
          'safari >= 7',
          'ie >= 11',
          'edge >= 12',
        ],
      },
      useBuiltIns: 'usage',
    }],
  ];

  const plugins = [
    ['module-resolver', {
      root: ['./src'],
      alias: {
        '@': './src',
        '#': './tests',
      },
    }],
  ];

  return {
    presets,
    plugins,
  };
};
