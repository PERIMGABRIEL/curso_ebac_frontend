module.exports = function (grunt){
    grunt.initConfig ({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                options: {
                    compress: true,
                },
                files: {
                    'dist/main.css' : 'src/styles/main.less',
                },
            },
        },
        uglify: {
            options: {
                mangle: false,
            },
            target: {
                files: {
                    'dist/scripts/main.min.js': 'src/scripts/main.js'
                }
            }
        }
    })

    grunt.registerTask('olaGrunt', function(){
        console.log('Olá Grunt');
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less' , 'uglify']);
}
