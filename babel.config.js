module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        debug: process.env.NODE_ENV !== 'production' ? true : false,
        corejs: '3',
        useBuiltIns: 'usage',
      },
    ],
    [
      '@babel/preset-react',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
};
