const pkg = require('./package')
const bodyParser = require('body-parser')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel:'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans&display=swap'}
    ]
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  },
  /*
  env: {
    baseUrl: 'https://nuxt-project-21742-default-rtdb.firebaseio.com'
  }

  */

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /* loadingIndicator works only for spa mode,
  loadingIndicator {
    name: 'circle',   // show circle spinner
    color: '#fa923f'
  }

  /*
  ** Global CSS
  */
  css: [
    '~/assets/styles/main.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/core-components.js',
    '~/plugins/date-filter.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    baseURL: 'https://nuxt-project-21742-default-rtdb.firebaseio.com'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  },
  router: {
    middleWare: 'log'
  },
  ServiceMiddleware: [
    bodyParser.json(),
    '~/api'
  ]
}
