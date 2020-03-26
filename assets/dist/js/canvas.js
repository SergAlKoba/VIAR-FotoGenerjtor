$(document).ready(function(){

  var flag=0;
  $('.canvas-tabs .tabs-item li').on('click', function () {
      var tabsData = $(this).data('tads');
      $('.canvas-tabs .tabs-item li').removeClass('active');
      $('.tabs-container .tabs-item').removeClass('active');
      $(this).addClass('active');
      $('.' + tabsData).addClass('active');
      $('.tabs-work-slider').get(0).slick.setPosition();
      flag = 0;
      console.log(flag);
      $('.tabs-container .tabs-item').removeClass('open');
      $('.collapse').addClass('active');
      $('.height-content').animate({
        height: 467
        }, 1000, function() {
      });
      $(this).find('span').text('открыть');

      event.preventDefault();
      var id  = $(this).data('tads');
      var top = $('.' + id).offset().top -100;
      $('body,html').animate({scrollTop: top}, 1000);

  });

  function clickCounter() {
    return flag;
  }

  $('.collapse').on('click', function(){
    if (clickCounter() == 0){
      flag = 1;
      console.log(flag);
      var tabsPrev = $(this).prev();
      var tabsData = $(this).data('collapse');
      var tabsHeight = $('.' + tabsData).height() + 100;
      $('.tabs-item').removeClass('open');
      $(this).parent().addClass('open');
      $(this).addClass('active');
      $( tabsPrev ).animate({
          height: tabsHeight
        }, 1000, function() {
      });
      $(this).find('span').text('скрыть');

      event.preventDefault();
      var top = $('.' + tabsData).offset().top -100;
      $('body,html').animate({scrollTop: top}, 1000);

    }
    else {
      flag=0;
      console.log(flag);
      var tabsPrev = $(this).prev();
      var tabsData = $(this).data('collapse');
      var tabsHeight = $('.' + tabsData).height();
      $('.tabs-item').removeClass('open');
      $(this).parent().removeClass('open');
      $(this).removeClass('active');
      $( tabsPrev ).animate({
          height: 467
        }, 1000, function() {
      });
      $(this).find('span').text('открыть');

      var top = $('body').offset().top;
      $('body,html').animate({scrollTop: top}, 1000);

    }
  });

    $('.tabs-work-slider').slick({
        infinite: true,
        slidesToShow: 4,
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

    $('.stages-items').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: '<button class="slick-arrow next"><i class="icon-icon25"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-icon22"></i></button>',
        responsive: [
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

    if($(window).width() >= 1025){

      $('.stages-items').slick('unslick');

    }

    if($(window).width() >= 768){

      $('.stages-item .img').matchHeight({
        byRow: false
      });

      $('.stages-item .text').matchHeight({
        byRow: false
      });

      $('.our-work-item .img').matchHeight({
        byRow: false
      });

      $('.our-work-item .name').matchHeight({
        byRow: false
      });

      $('.our-work-item .text').matchHeight({
        byRow: false
      });

      $('.search-image-item').matchHeight({
        byRow: false
      });

    }

    jcf.replaceAll();

    $('.jcf-fake-input').text('Загрузить фотографии');


    $('.slider-tabs').on('click', 'a', function(){
      var tabsData = $(this).data('tabs');
      $('.slider-tabs a').removeClass('active');
      $(this).addClass('active');
      $('.gallery-photo .tabs-item').removeClass('active');
      $('.' + tabsData).addClass('active');
      $('.picture').get(0).slick.setPosition();
      $('.interior-slider').get(0).slick.setPosition();
      $('.ramu-slider').get(0).slick.setPosition();
      $('.ramu-item .img').matchHeight({
        byRow: false
      });
    });

    $('.picture').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: '<button class="slick-arrow next"><i class="icon-icon25"></i></button>',
      prevArrow: '<button class="slick-arrow prev"><i class="icon-icon22"></i></button>',
    });

    $('.interior-slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: '<a href="javascript:void(0)" class="slick-arrow next"><i class="icon-icon25"></i></a>',
      prevArrow: '<a href="javascript:void(0)" class="slick-arrow prev"><i class="icon-icon22"></i></a>',
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

    $('.interior-item').on('click', function(){
      $('.interior-item').removeClass('active');
      $(this).addClass('active');
    });

    $('.ramu-item').on('click', function(){
      $('.ramu-item').removeClass('active');
      $(this).addClass('active');
    });

    $("#my-range").on("input", function () {

    });

    $('.ramu-slider').slick({
      rows: 2,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: '<a href="javascript:void(0)" class="slick-arrow next"><i class="icon-icon25"></i></a>',
      prevArrow: '<a href="javascript:void(0)" class="slick-arrow prev"><i class="icon-icon22"></i></a>',
    });

    $('.ramu-item .img').matchHeight({
      byRow: false
    });

});

$(window).resize(function(){

    if($(window).width() >= 1025){

      $('.stages-items').slick('unslick');
      
    }

});
