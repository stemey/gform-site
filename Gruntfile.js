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
        clean: ["./build"]
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-dojo');
    grunt.loadNpmTasks('grunt-ftp-deploy');

    // Default task(s).
    grunt.registerTask('default', ['clean', 'dojo:dist']);

};