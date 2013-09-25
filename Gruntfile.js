module.exports = function (grunt) {
    grunt.config.init({
        watch: {
            css: {
                files: ['scss/**/*.scss'],
                tasks: ['compass:dev']
            }
        },
        compass: {
            options: {
                basePath: '/',
                sassPath: 'scss',
                cssPath: 'css',
                imagesPath: 'img',
                javascriptsPath: 'js',
                noLineComments: true,
                force: true
            },
            dist: {
                options: {
                    outputStyle: 'compressed'
                }
            },
            dev: {
                options: {
                    outputStyle: 'expanded'
                }
            }
        },
        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 7,
                    progressive: true
                },
                files: [{
                    expand: true,
                    cwd: 'img',
                    src: ['*.png'],
                    dest: 'img',
                    ext: '.png'
                },{
                    expand: true,
                    cwd: 'img',
                    src: ['*.jpg'],
                    dest: 'img',
                    ext: '.jpg'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.task.registerTask('default', ['watch']);
    grunt.task.registerTask('build', ['compass:dist', 'imagemin:dist']);
    grunt.task.registerTask('dev', ['compass:dev']);
}