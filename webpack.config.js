var webpack = require('webpack');
var Path = require('path');
//var envFile = require('node-env-file');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// try {
//   envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'));
// } catch (e) {
//
// }

module.exports = {
entry: [
  'script!jquery/dist/jquery.min.js',
  'script!foundation-sites/dist/foundation.min.js',
'./app/app.jsx',
],
externals: {
  jquery: 'jQuery'
},
plugins: [
new webpack.ProvidePlugin({
  '$': 'jquery',
  'jQuery': 'jquery'
}),
new webpack.optimize.UglifyJsPlugin({
  compressor: {
    warnings: false
  }
}),
// new webpack.DefinePlugin({
//   'process.env': {
//     NODE_ENV: JSON.stringify(process.env.NODE_ENV),
//     API_KEY: JSON.stringify(process.env.API_KEY),
//     AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
//     DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
//     PROJECT_ID: JSON.stringify(process.env.PROJECT_ID),
//     STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET),
//     MESSAGING_SENDER_ID: JSON.stringify(process.env.MESSAGING_SENDER_ID)
//   }
// })
],
output: {
  path:__dirname,
  filename: './public/bundle.js'
},
resolve: {
  root: __dirname,
  modulesDirectories: [
    'node_modules',
    './app/components',
    './app/api'
  ],
  alias: {
    app: 'app',
    applicationStyles: 'app/styles/app.scss',
    actions: 'app/actions/actions.jsx',
    reducers: 'app/reducers/reducers.jsx',
    configureStore: 'app/store/configureStore.jsx'
    // AddTodo: 'app/components/AddTodo.jsx',
    // Todo: 'app/components/Todo.jsx',
    // TodoApp: 'app/components/TodoApp.jsx',
    // TodoList: 'app/components/TodoList.jsx'


  },
  extensions: ['', '.js', '.jsx']
},
module: {
  loaders: [
  {
    loader: 'babel-loader',
    query: {
      presets: ['react', 'es2015', 'stage-0']
    },
    test: /\.jsx?$/,
    exclude: /(node_modules|bower_components)/
  }
]
},
devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map'
};
