$(document).ready(function(){

    $('.our-work-items').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: '<button class="slick-arrow next"><i class="icon-icon25"></i></button>',
      prevArrow: '<button class="slick-arrow prev"><i class="icon-icon22"></i></button>',
      responsive: [
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              nextArrow: '<button class="slick-arrow next"><i class="icon-icon25"></i></button>',
              prevArrow: '<button class="slick-arrow prev"><i class="icon-icon22"></i></button>',
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              nextArrow: '<button class="slick-arrow next"><i class="icon-icon25"></i></button>',
              prevArrow: '<button class="slick-arrow prev"><i class="icon-icon22"></i></button>',
            }
          },
          {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                nextArrow: '<button class="slick-arrow next"><i class="icon-icon25"></i></button>',
                prevArrow: '<button class="slick-arrow prev"><i class="icon-icon22"></i></button>',
              }
          }
      ]
    });

    if($(window).width() >= 768){

      $('.our-work-item .img').matchHeight({
        byRow: false
      });

      $('.our-work-item .name').matchHeight({
        byRow: false
      });

      $('.our-work-item .text').matchHeight({
        byRow: false
      });

    }

    $('.other-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: '<button class="slick-arrow next"><i class="icon-icon25"></i></button>',
      prevArrow: '<button class="slick-arrow prev"><i class="icon-icon22"></i></button>',
    });

    $('.picture').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: '<button class="slick-arrow next"><i class="icon-icon25"></i></button>',
      prevArrow: '<button class="slick-arrow prev"><i class="icon-icon22"></i></button>',
    });

    jcf.replaceAll();

    $('.jcf-fake-input').text('Загрузить фотографии')

    $('.slider-tabs').on('click', 'a', function(){
      var tabsData = $(this).data('tabs');
      $('.slider-tabs a').removeClass('active');
      $(this).addClass('active');
      $('.tabs-item').removeClass('active');
      $('.' + tabsData).addClass('active');
      $('.picture').get(0).slick.setPosition();
    });


    new jQueryCollapse($(".filter-accordion"), {
      open: function() {
        this.slideDown(200);
      },
      close: function() {
        this.slideUp(200);
      }
    });

    $('.shapes li a').on('click', function(){
      $('.shapes li a').removeClass('active');
      $(this).addClass('active');
    });

    $('.size li a').on('click', function(){
      $('.size li a').removeClass('active');
      $(this).addClass('active');
    });

    $('.execution-item').on('click', function(){
      $('.execution-item').removeClass('active');
      $(this).addClass('active');
    });

    $('.execution-item .img').matchHeight({
      byRow: false
    });

});

$(window).resize(function(){

    

});