module.exports = function(grunt){

grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),

	// Concatenate Configuration
	concat: {
		options: {
			separator: ';'
		},
		script: {
			src: [
				'dist/js/script.js'
			],
			dest: '../markup/js/script.min.js'
		}
	},

	// Uglify Configuration
	uglify: {
		dist: {
			files: {
				'../markup/js/jquery.min.js': ['dist/js/plugin/jquery.js'],
				'../markup/js/jquery.mCustomScrollbar.min.js': ['dist/js/plugin/jquery.mCustomScrollbar.js'],
				'../markup/js/BeerSlider.min.js': ['dist/js/plugin/BeerSlider.js'],
				'../markup/js/jcf.min.js': ['dist/js/plugin/jcf.js'],
				'../markup/js/jcf.file.min.js': ['dist/js/plugin/jcf.file.js'],
				'../markup/js/jcf.radio.min.js': ['dist/js/plugin/jcf.radio.js'],
				'../markup/js/jcf.checkbox.min.js': ['dist/js/plugin/jcf.checkbox.js'],
				'../markup/js/jcf.select.min.js': ['dist/js/plugin/jcf.select.js'],
				'../markup/js/slick.min.js': ['dist/js/plugin/slick.js'],
				'../markup/js/jquery.matchHeight.min.js': ['dist/js/plugin/jquery.matchHeight.js'],
				'../markup/js/jquery.mask.min.js': ['dist/js/plugin/jquery.mask.js'],
				'../markup/js/jquery-ui.min.js': ['dist/js/plugin/jquery-ui.js'],
				'../markup/js/script.min.js': ['dist/js/script.js'],
				'../markup/js/script.min.js': ['dist/js/script.js'],
				'../markup/js/home.min.js': ['dist/js/home.js'],
				'../markup/js/collage.min.js': ['dist/js/collage.js'],
				'../markup/js/canvas.min.js': ['dist/js/canvas.js'],
				'../markup/js/collage-constructor.min.js': ['dist/js/collage-constructor.js'],
				'../markup/js/family-constructor.min.js': ['dist/js/family-constructor.js'],
				'../markup/js/modular-pictures.min.js': ['dist/js/modular-pictures.js'],
				'../markup/js/blog.min.js': ['dist/js/blog.js'],
				'../markup/js/terms-sale.min.js': ['dist/js/terms-sale.js'],
				'../markup/js/shipping-payment.min.js': ['dist/js/shipping-payment.js'],
				'../markup/js/faq.min.js': ['dist/js/faq.js'],
				'../markup/js/basket.min.js': ['dist/js/basket.js'],
				'../markup/js/thank-purchase.min.js': ['dist/js/thank-purchase.js'],
				'../markup/js/contacts.min.js': ['dist/js/contacts.js'],
				'../markup/js/gift-card.min.js': ['dist/js/gift-card.js'],
				'../markup/js/about.min.js': ['dist/js/about.js'],
				'../markup/js/partnership.min.js': ['dist/js/partnership.js'],
				'../markup/js/personal-area.min.js': ['dist/js/personal-area.js'],
				'../markup/js/stocks.min.js': ['dist/js/stocks.js'],
				'../markup/js/gallery-photo-catalog.min.js': ['dist/js/gallery-photo-catalog.js'],
				'../markup/js/gallery-reproductions-catalog.min.js': ['dist/js/gallery-reproductions-catalog.js'],
				'../markup/js/gallery-modular-catalog.min.js': ['dist/js/gallery-modular-catalog.js'],
				'../markup/js/gallery.min.js': ['dist/js/gallery.js'],
				'../markup/js/gallery-photo-one.min.js': ['dist/js/gallery-photo-one.js'],
				'../markup/js/gallery-modular-one.min.js': ['dist/js/gallery-modular-one.js'],
				'../markup/js/gallery-reproductions-one.min.js': ['dist/js/gallery-reproductions-one.js'],
				'../markup/js/gallery-reproductions.min.js': ['dist/js/gallery-reproductions.js'],
				'../markup/js/gallery-photo.min.js': ['dist/js/gallery-photo.js'],
				'../markup/js/gallery-modular.min.js': ['dist/js/gallery-modular.js'],
				'../markup/js/stylization-paintings.min.js': ['dist/js/stylization-paintings.js'],
				'../markup/js/stylization-interior.min.js': ['dist/js/stylization-interior.js'],
				'../markup/js/graphic-portrait.min.js': ['dist/js/graphic-portrait.js'],
				'../markup/js/graphic-interior.min.js': ['dist/js/graphic-interior.js'],
				'../markup/js/portrait-name.min.js': ['dist/js/portrait-name.js'],
				'../markup/js/oil-portrait.min.js': ['dist/js/oil-portrait.js'],
			}
		}
	},

	// Sass Configuration
	sass: {
		options: {
			loadPath: ['bower_components/foundation/foundation.scss']
		},
		dist: {
			options: {
				sourcemap: 'none',
				style: 'compressed'
			},
			files: [{
				expand: true,
				cwd: 'dist/scss/',
				src: ['*.scss'],
				dest: '../markup/css/',
				ext: '.css'
			}]
		}
	},

	// Watch Configuration
	watch: {
		grunt: { files: ['Gruntfile.js'], tasks: ['default'] },

		sass: {
			files: 'dist/scss/*.scss',
			tasks: ['buildCss']
		},

		script: {
			files: 'dist/js/*.js',
			tasks: ['buildJs']
		},

		markup: {
			files: '*.html',
			tasks: ['htmlbuild']
		}
	},

	fixturesPath: './',
	sourcesPath: '../markup',

    htmlbuild: {
        dist: {
            src: '*.html',
            dest: '<%= sourcesPath %>/templates/',
            options: {
                beautify: true,
                prefix: '../',
                relative: false,
                sections: {
                    views: '<%= fixturesPath %>/*.html',
                    templates: '<%= fixturesPath %>/*.html',
                    layout: {
						header: '<%= fixturesPath %>/templates/header.html',
                    	footer: '<%= fixturesPath %>/templates/footer.html'
					}
                },
            }
        }
    }


});

// Load Grunt tasks
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-html-build');

// Register Grunt tasks
grunt.registerTask('buildCss', ['sass']);
grunt.registerTask('buildJs',  ['concat', 'uglify']);
grunt.registerTask('default',  ['buildCss', 'buildJs', 'watch', 'sass']);

}
