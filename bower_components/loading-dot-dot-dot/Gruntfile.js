module.exports = function (grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({

    /**
     *  ___ _  _____ 
     * | _ \ |/ / __|
     * |  _/ ' < (_ |
     * |_| |_|\_\___|
     *
     */
    
    pkg : {
      name         : 'loading...',
      app_path     : './app',
      dist_path    : './dist',
      loading_path : './frontend/loading...'
    },

    /**
     *  _              
     * | |   ___ ______
     * | |__/ -_|_-<_-<
     * |____\___/__/__/                
     *
     */
    
    less: {
      loading: {
        expand: true,
        cwd: "frontend/loading.../css/",
        src: "*.less",
        dest: "frontend/loading.../css/"
      }
    },

    /**
     *   ___       __  __ _      
     *  / __|_____|  \/  (_)_ _  
     * | (__(_-<_-< |\/| | | ' \ 
     *  \___/__/__/_|  |_|_|_||_|
     *
     */
    
    cssmin: {
      my_target: {
        files: {
          'dist/loading....min.css': 'dist/loading....css'
        }
      }
    },

    /**
     *  ___                    ___         _        _ _ 
     * | _ ) _____ __ _____ _ |_ _|_ _  __| |_ __ _| | |
     * | _ \/ _ \ V  V / -_) '_| || ' \(_-<  _/ _` | | |
     * |___/\___/\_/\_/\___|_||___|_||_/__/\__\__,_|_|_|
     *                                                  
     */
    
    bowerInstall: {
      target: {
        src: [ 'app/*.html' ]
      }
    },

    /**
     * __      ___         ___           
     * \ \    / (_)_ _ ___|   \ ___ _ __ 
     *  \ \/\/ /| | '_/ -_) |) / -_) '_ \
     *   \_/\_/ |_|_| \___|___/\___| .__/
     *                             |_|   
     */
    
    wiredep: {
      target: {
        src: [
          'app/*.html'
        ],
        cwd: '',
        dependencies: true,
        devDependencies: false
      }
    },

    /**
     *   ___               
     *  / __|___ _ __ _  _ 
     * | (__/ _ \ '_ \ || |
     *  \___\___/ .__/\_, |
     *          |_|   |__/ 
     */
    
    copy: {
      loading_css: {
        src: './dist/loading....js',
        dest: './app/loading....js'
      },
      loading_js: {
        src: './dist/loading....css',
        dest: './app/loading....css'
      }
    },

    /**
     *  _   _      _ _  __      
     * | | | |__ _| (_)/ _|_  _ 
     * | |_| / _` | | |  _| || |
     *  \___/\__, |_|_|_|  \_, |
     *       |___/         |__/ 
     *
     */
    
    uglify: {
      loading: {
        src: './dist/loading....js',
        dest: './dist/loading....min.js'
      }
    },

    /**
     *   ___                      _   
     *  / __|___ _ _  _ _  ___ __| |_ 
     * | (__/ _ \ ' \| ' \/ -_) _|  _|
     *  \___\___/_||_|_||_\___\__|\__|                                
     *
     */

    connect: {
      options: {
        port: 9000,
        livereload: true,
        hostname: 'localhost',
        /**
         *  middleware to serve up static HTML to standalone app
         *  @param  {[type]} connect     [description]
         *  @param  {[type]} options     [description]
         *  @param  {[type]} middlewares [description]
         *  @return {[type]}             [description]
         */
        // middleware: function (connect, options, middlewares) {
        //   var server = require('./mock/server.js');
        //   middlewares.push(server);
        //   return middlewares;
        // }
      },
      livereload: {
        options: {
            open: true,
            base: [ 'app' ]
        }
      }
    },
    
    /**
     *  _  _     _____               _      _          
     * | \| |__ |_   _|__ _ __  _ __| |__ _| |_ ___ ___
     * | .` / _` || |/ -_) '  \| '_ \ / _` |  _/ -_|_-<
     * |_|\_\__, ||_|\___|_|_|_| .__/_\__,_|\__\___/__/
     *      |___/              |_|                     
     *      
     */
    
    ngtemplates: {
      options: {
        module: 'loading...'
      },
      debug: {
        options: {
          htmlmin: {
            collapseBooleanAttributes     : false,
            collapseWhitespace            : false,
            removeAttributeQuotes         : false,
            removeComments                : false,
            removeEmptyAttributes         : false,
            removeRedundantAttributes     : false,
            removeScriptTypeAttributes    : false,
            removeStyleLinkTypeAttributes : false
          }
        },
        cwd: 'frontend/loading.../',
        src: 'views/**/*.html',
        dest: 'frontend/loading.../views/templates.js'
      }
    },

    /**
     *   ___                  _   
     *  / __|___ _ _  __ __ _| |_ 
     * | (__/ _ \ ' \/ _/ _` |  _|
     *  \___\___/_||_\__\__,_|\__|
     *                            
     */

    concat: {
      options: {
        separator: ';'
      },
      js: {
        src: [ 'frontend/loading.../app.js', 'frontend/loading.../**/*.js' ],
        dest: 'dist/loading....js'
      },
      css: {
        src: [ 'frontend/loading.../css/*.css' ],
        dest: 'dist/loading....css'
      }
    },

    /**
     *     _    _  _ _     _   
     *  _ | |__| || (_)_ _| |_ 
     * | || (_-< __ | | ' \  _|
     *  \__//__/_||_|_|_||_\__|
     *                         
     */

    jshint: {
      all: [
        "feature/**/*.js"
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    /**
     * __      __    _      _    
     * \ \    / /_ _| |_ __| |_  
     *  \ \/\/ / _` |  _/ _| ' \ 
     *   \_/\_/\__,_|\__\__|_||_|
     *                           
     */

    watch: {
      scripts: {
        files: [ 'Gruntfile.js', 'test/**/*.js', 'frontend/**/*.{css,js,html}', 'app/**/*' ],
        tasks: [ 'jshint', 'build' ]
      }
    },

    /**
     *  _  __                    
     * | |/ /__ _ _ _ _ __  __ _ 
     * | ' </ _` | '_| '  \/ _` |
     * |_|\_\__,_|_| |_|_|_\__,_|
     *                         
     */

    karma: {
      unit: {
        options: {
            basePath: '',
            files: [ 'dist/loading....js', 'test/spec/**/*.js' ],
            port: 3000,
            runnerPort: 9999,
            frameworks: [ 'jasmine' ],
            singleRun: true,
            browsers: [ 'PhantomJS' ]
        }
      }
    }
  }

  );

  // Load Grunt Tasks
  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-wiredep');

  // Custom
  grunt.registerTask('dev', [ 'connect', 'watch' ]);
  grunt.registerTask('test', [ 'jshint', 'karma' ]);
  grunt.registerTask('build:css', [ 'less', 'cssmin', 'concat:css', 'copy:loading_css' ]);
  grunt.registerTask('build:js', [ ]);
  grunt.registerTask('build', [ 'build:css', 'ngtemplates', 'concat', 'uglify', 'copy', 'wiredep' ]);
  grunt.registerTask('default', [ 'test' ]);
};
