module.exports = {
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        rootPathSuffix: 'src',
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          pages: './src/pages',
          services: './src/services',
          components: './src/components',
        },
      },
    ],
  ],
};
