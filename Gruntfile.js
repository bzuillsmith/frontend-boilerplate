module.exports = function (grunt) {
	'use strict';
	grunt.initConfig({
        watch: {
		 	'less': {
		 	    files: ['frontend/less/*.less'],
		 	    tasks: ['less']
		 	},
            'public': {
                files: ['frontend/public/**', '!**/bower_components/**'],
                options: {
                    livereload: true
                }
            }
        },

		less: {
			development: {
				options: {
                    sourceMap: true,
                    paths: ['frontend/public/bower_components/bootstrap/less']
                },
                files: {
					'frontend/public/css/style.css': 'frontend/less/style.less'
				}
			}
		},
        
        'http-server': {
            'dev': {

                // the server root directory
                root: 'frontend/public',

                port: 8000,
                // port: function() { return 8282; }

                host: "127.0.0.1",

                cache: 0,
                showDir : true,
                autoIndex: true,
                defaultExt: "html",

                // run in parallel with other tasks
                runInBackground: true

            }
        }
		
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-http-server');


	grunt.registerTask('default', ['less', 'http-server', 'watch']);
};

