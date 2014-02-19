module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        dojo: {
            dist: {
                options: {
                    dojo: './bower_components/dojo/dojo.js', // Path to dojo.js file in dojo source
                    profile: 'dist.profile.js', // Profile for build
                    releaseDir: './build',
                    basePath: ''
                }
            }
        },
        clean: {
            all: ["./build"],
            app: ["./build/app"]
        },
        copy: {
            app: {
                expand: true,
                cwd: 'src/',
                src: '**',
                dest: 'build/app/'
            },
            all: {
                expand: true,
                cwd: 'bower_components/',
                src: '**',
                dest: 'build/'
            }


        },
        deploy: {
            build: {
                auth: {
                    host: 'www.toobop.net',
                    port: 21,
                    authKey: 'site'
                },
                src: 'build',
                dest: 'site'
            }
        },watch: {
            app: {
                files: ['src/**'],
                tasks: ['default'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-dojo');
    grunt.loadNpmTasks('grunt-ftp-deploy');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('dist', ['clean:all', 'dojo']);
    grunt.registerTask('default', ['copy:app']);
    grunt.registerTask('deploy', ['deploy']);

};