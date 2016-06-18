var Builder = require('systemjs-builder');

var builder = new Builder();
builder.config({
  paths: {
    'asset/': '../../',
    'node_modules/': '../../node_modules/'
  },
  map: {
    'plugin-babel': 'node_modules/systemjs-plugin-babel/plugin-babel.js',
    'systemjs-babel-build': 'node_modules/systemjs-plugin-babel/systemjs-babel-browser.js'
  },
  transpiler: 'plugin-babel',

  meta: {
    '*.png': {
      loader: 'asset'
    }
  },
  packages: {
    'asset': {
      main: {
        build: './url-builder.js',
        default: './url.js'
      }
    }
  }
});

builder.buildStatic('./main.js', {
  outFile: 'build.js',
  rollup: true,
  globalName: 'main',

  // this function allows us to determine how assets get treated
  assetMap: function(load, url, source, traceOpts) {
    return load.address;
  }
}).then(function(output) {
  console.log('output.assetList has value:');
  console.log(output.assetList);
});