module.exports = function (karma) {
  karma.set({
    /**
     * From where to look for files, starting with the location of this file.
     */
    basePath: './',

    /**
     * This is the list of file patterns to load into the browser during testing.
     */
    files: [
        'bower_components/swfobject/swfobject/src/swfobject.js',
        'js/**/*.js',
        'test/unit/*.js',
        'test/integration/*.js',
        { pattern: 'demo/*.swf', included: false, served: true },
        { pattern: 'bin/*.swf', included: false, served: true }
    ],
    colors: true,
    exclude: [],
    frameworks: ['mocha', 'chai-sinon', 'browserify', 'source-map-support'],
    plugins: ['karma-*'],
    preprocessors: {
        'js/**/*.js': ['browserify'],
        'test/**/*.js': ['browserify']
    },
    browserify: {
        debug: true,
        transform: [
            'babelify'
        ]
    },

    logLevel: 'ERROR',
    /**
     * How to report, by default.
     */
    reporters: ['spec'],

    /**
     * On which port should the browser connect, on which port is the test runner
     * operating, and what is the URL path for the browser to use.
     */
    port: 9018,
    runnerPort: 9019,
    urlRoot: '/',
    singleRun: true,
    autoWatch: false,

    /**
     * The list of browsers to launch to test on. This includes only "Firefox" by
     * default, but other browser names include:
     * Chrome, ChromeCanary, Firefox, Opera, Safari, PhantomJS
     *
     * Note that you can also use the executable name of the browser, like "chromium"
     * or "firefox", but that these vary based on your operating system.
     *
     * You may also leave this blank and manually navigate your browser to
     * http://localhost:9018/ when you're running tests. The window/tab can be left
     * open and the tests will automatically occur there during the build. This has
     * the aesthetic advantage of not launching a browser every time you save.
     */
    browsers: [
      //'Safari',
      //'Firefox',
      'Chrome'
    ],
    proxies: {
        '/VPAIDFlash.swf': '/base/bin/VPAIDFlash.swf',
        '/TestAd.swf': '/base/demo/TestAd.swf'
    }
  });
};

