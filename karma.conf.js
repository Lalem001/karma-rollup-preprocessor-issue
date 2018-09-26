// Karma configuration
// Generated on Fri Sep 21 2018 15:34:47 GMT-0400 (EDT)

module.exports = function(config) {
	config.set({
		browsers: ['Chrome'],
		files: ['src/**/*.spec.js'],
		frameworks: ['jasmine'],
		preprocessors: {
		  'src/**/*.spec.js': ['rollup']
		},
		reporters: ['progress'],
		rollupPreprocessor: {
			cache: true,
			output: {
				format: 'iife',
				name: 'test',
				sourcemap: 'inline',
			},
		},
        autoWatch: true,
        colors: true,
        concurrency: Infinity,
        logLevel: config.LOG_INFO,
        port: 9876,
        singleRun: false,
	})
};
