module.exports = function (grunt) {
    // Configuração do Grunt
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Compilação do LESS
        less: {
            development: {
                files: {
                    'dev/styles/main.css': 'src/styles/main.less' 
                }
            },
            production: {
                options: {
                    compress: true 
                },
                files: {
                    'dist/styles/main.min.css': 'src/styles/main.less'
                }
            }
        },
        uglify: {
            production: {
                files: {
                    'dist/scripts/main.min.js': ['src/scripts/**/*.js'] 
                }
            }
        },
        watch: {
            less: {
                files: ['src/styles/**/*.less'],
                tasks: ['less:development']
            },
            js: {
                files: ['src/scripts/**/*.js'],
                tasks: ['uglify']
            }
        },

        // Limpeza da pasta dist antes do build
        clean: {
            build: ['dist/*']
        }
    });

    // Carrega plugins do Grunt
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // Tarefas padrão e de build
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['clean', 'less:production', 'uglify:production']);
};
