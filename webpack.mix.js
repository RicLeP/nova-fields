let mix = require('laravel-mix')

mix.setPublicPath('dist')
   .js('resources/js/field.js', 'dist/js')
   .babel(['dist/js/field.js'], 'dist/js/field.es5.js')
   .sass('resources/sass/field.scss', 'dist/css')
   .babelConfig({
      plugins: [
        [
          'component',
          {
            libraryName: 'element-ui',
            styleLibraryName: 'theme-chalk'
          }
        ]
      ]
    })
