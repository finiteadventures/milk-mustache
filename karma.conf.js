module.exports = function(config){
  config.set({

    basePath : './',

    // List of files/patterns to load in the browser
    files : [
      // bower:js
      'src/bower_components/lodash/lodash.js',
      'src/bower_components/jquery/dist/jquery.js',
      'src/bower_components/respond/dest/respond.src.js',
      'src/bower_components/fitvids/jquery.fitvids.js',
      'src/bower_components/responsive-nav/responsive-nav.js',
      'src/bower_components/html5shiv/dist/html5shiv.js',
      'src/bower_components/jquery-throttle-debounce/jquery.ba-throttle-debounce.min.js',
      'src/bower_components/fluidbox/dist/js/jquery.fluidbox.min.js',
      // endbower
      '.dev/scripts/main.js',
      'app/**/*.spec.js',
    ],

    // Enable watching files and executing the tests whenever one of the above files changes
    autoWatch : true,

    frameworks: [
      'jasmine',
      'jasmine-matchers'
    ],

    // List of browsers to launch and capture
    browsers : [
      'Chrome',
      'PhantomJS',
    ],

    plugins : [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-jasmine-matchers',
      'karma-jasmine-html-reporter',
      'karma-mocha-reporter',
      'karma-babel-preprocessor',
      'karma-coverage',
      'karma-coveralls',
    ],

    // List of reporters to use
    reporters: [
      'kjhtml',
      'mocha',
      'coverage',
    ],

    // Preprocessors to use
    preprocessors: {
      'app/**/*.spec.js': 'babel',
      '.dev/scripts/main.js': 'coverage',
    },

    coverageReporter: {
      type: 'lcov',
      dir: 'coverage/'
    },

    babelPreprocessor: {
      options: {
        presets: ['es2015'],
        sourceMap: 'inline'
      },
      filename: function (file) {
        return file.originalPath.replace(/\.js$/, '.es5.js');
      },
      sourceFileName: function (file) {
        return file.originalPath;
      }
    }

  });

  if (process.env.TRAVIS) {
    config.reporters.push('coveralls');
  }
};
