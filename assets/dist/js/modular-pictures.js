$(document).ready(function(){

  var flag=0;
  $('.tabs-item li').on('click', function () {
      var tabsData = $(this).data('tads');
      $('.tabs-item li').removeClass('active');
      $('.tabs-item').removeClass('active');
      $(this).addClass('active');
      $('.' + tabsData).addClass('active');
      $('.tabs-work-slider').get(0).slick.setPosition();
      flag = 0;
      console.log(flag);
      $('.tabs-item').removeClass('open');
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

    $('.popular-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: '<button class="slick-arrow next"><i class="icon-icon28"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-icon23"></i></button>',
        responsive: [
            {
              breakpoint: 1280,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                nextArrow: '<button class="slick-arrow next"><i class="icon-icon28"></i></button>',
                prevArrow: '<button class="slick-arrow prev"><i class="icon-icon23"></i></button>',
              }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                nextArrow: '<button class="slick-arrow next"><i class="icon-icon28"></i></button>',
                prevArrow: '<button class="slick-arrow prev"><i class="icon-icon23"></i></button>',
              }
            },
            {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  nextArrow: '<button class="slick-arrow next"><i class="icon-icon28"></i></button>',
                  prevArrow: '<button class="slick-arrow prev"><i class="icon-icon23"></i></button>',
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

});

$(window).resize(function(){

    

});
