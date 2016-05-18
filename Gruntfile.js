module.exports = function (grunt) {

    'use strict';

    if (grunt.option('help')) {
        // Load all tasks so they can be viewed in the help: grunt -h or --help.
        require('load-grunt-tasks')(grunt);
    } else {
        // Use jit-grunt to only load necessary tasks for each invocation of grunt.
        require('jit-grunt')(grunt);
    }

    grunt.config.merge({
        watch: {
            sass: {
                files: [
                    '**/*.sass'
                ],
                tasks: [
                    'sass'
                ]
            },
            svgstore: {
                files: [
                    'images/icons/**/*.svg'
                ],
                tasks: 'svgstore:main'
            },
            demo: {
                files: [
                    'index.html.template'
                ],
                tasks: [
                    'template:demo'
                ]
            }
        },
        sass: {
            options: {
                sourceMap: true,
                sourceMapContents: true,
                includePaths: [
                    'sass'
                ]
            },
            dev: {
                files: {
                   'stylesheets/main.css': 'sass/main.sass'
                }
            }
        },
        svgstore: {
            options: {
                prefix: 'svg-', // This will prefix each ID
                svg: { // will add and overide the the default xmlns="http://www.w3.org/2000/svg" attribute to the resulting SVG
                    viewBox: '0 0 100 100',
                    xmlns: 'http://www.w3.org/2000/svg'
                }
            },
            main: {
                dest: 'images/svg-defs.svg',
                src: ['images/icons/**/*.svg']
            }
        },
        template: {
            demo: {
                options: {
                    data: {
                        svgstore: function (filename) {
                            var contents = grunt.file.read(filename);
                            return contents;
                        }
                    }
                },
                files: [
                    {
                        src: 'index.html.template',
                        // This is committed.
                        dest: 'index.html'
                    }
                ]
            }
        }
    });

    // - - - T A S K S - - -

    grunt.registerTask('default', 'dev');

    grunt.registerTask('dev', [
        'sass',
        'svgstore',
        'watch'
    ]);

    grunt.registerTask('build', [
        'sass',
        'svgstore'
    ]);

    grunt.registerTask('build-demo', [
        'build',
        'template:demo'
    ]);

}
