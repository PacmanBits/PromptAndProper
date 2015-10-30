module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
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
          'public/js/app.js' : 'source/js/script.js'
        }
      }
    },
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'public/css/style.css': 'source/css/style.scss'
        }
      }
    }
  });

  grunt.loadNpmTasks( 'grunt-contrib-jshint' );
  grunt.loadNpmTasks( 'grunt-browserify'     );
  grunt.loadNpmTasks( 'grunt-contrib-sass'   );

  grunt.registerTask('default', [
    'jshint', 'browserify',  // JS
    'sass'                   // CSS
  ]);

};
