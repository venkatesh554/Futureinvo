module.exports = {
  plugins: [
    require('postcss-pxtorem')({
      rootValue: 16,
      propList: ['font', 'font-size', 'line-height', 'letter-spacing', 'margin', 'padding', 'gap', 'width', 'height', 'top', 'left', 'right', 'bottom'],
      selectorBlackList: [],
      replace: true,
      mediaQuery: true,
      minPixelValue: 2,  // Keep 1px borders as px
    }),
    require('autoprefixer')
  ]
};