/*global module:false*/
module.exports = function (grunt) {
    grunt.initConfig({
        uglify: {
            options: {
                sourceMap: true,
                sourceMapIncludeSources: true,
                mangle: false
            },
            app: {
                src: [
                    "app/app.js",
                    "app/*.js",
                    "app/**/**.js"
                ],
                dest: "dist/app.min.js"
            }
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                unused: true,
                boss: true,
                eqnull: true,
                browser: true,
                force: true,
                globals: {"angular": true, "console": true}
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            app: {
                src: '<%= uglify.app.src %>',
            }
        },
        less: {
            options: {
                cleancss: true,
                strictImports: true
            },
            style: {
                files: [
                    {
                        src: "style/main.less",
                        dest: "dist/style.css"
                    }
                ]
            }
        },
        watch: {
            options: {
                livereload: true
            },
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile']
            },
            app: {
                files: '<%= uglify.app.src %>',
                tasks: ['uglify', 'jshint']
            },
            style: {
                files: 'style/*.less',
                tasks: ['less']
            },
            index: {
                files: ['index.html', 'app/template/*.html']
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    // Default task.
    grunt.registerTask('default', ['uglify', 'less', 'jshint']);

};
