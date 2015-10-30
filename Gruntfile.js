module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      build: [
        'public/js/app.js'
      ]
    },
    jshint: {
      files: ['Gruntfile.js', 'source/js/*.js'],
      options: {
        globals: {
          console: true
        }
      }
    },
    browserify: {
      dev: {
        options: {
          browserifyOptions: {
            debug: true
          }
        },
        files: {
          'public/js/app.js'  : 'source/js/script.js'
        }
      }
    },
    watch: {
      options: {
        atBegin: true
      },
      dev: {
        files: ['source/js/*.js'],
        tasks: ['jshint', 'browserify']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint', 'browserify']);

};
