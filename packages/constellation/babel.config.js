module.exports = {
  ignore: [],
  plugins: ['@babel/plugin-transform-runtime', ['module-resolver', { root: ['./src'] }]],
  presets: ['@babel/preset-env', '@babel/preset-react', '@linaria'],
}
