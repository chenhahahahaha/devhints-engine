const DEBUG = process.env.NODE_ENV !== 'production'

module.exports = ctx => {
  return {
    plugins: [
      require('postcss-prepend-imports')({
        files: [
          require.resolve(
            'responsive-modular-scale.css/responsive-modular-scale.css'
          ),
          require.resolve('./src/css-base/utils/gutter-padding.css'),
          require.resolve('./src/css-base/utils/heading-style.css'),
          require.resolve('./src/css-base/utils/section-gutter.css'),
          require.resolve('./src/css-base/utils/has-container.css')
        ]
      }),
      require('postcss-import')(),
      require('postcss-apply')(),
      require('postcss-extend-rule')(),
      require('postcss-preset-env')({
        stage: 0,
        preserve: false,
        importFrom: [require.resolve('./src/css-base/variables.css')],
        insertBefore: {
          'all-property': require('postcss-color-mod-function')
        }
      }),

      require('postcss-browser-reporter')(),
      require('postcss-reporter')()
    ]
  }
}
