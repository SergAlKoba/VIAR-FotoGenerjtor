$(document).ready(function(){

    if($(window).width() >= 768){

        $('.stocks-item h3').matchHeight({
          byRow: false
        });

        $('.stocks-item p').matchHeight({
          byRow: false
        });

    }

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

    $('.other-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<button class="slick-arrow next"><i class="icon-icon25"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-icon22"></i></button>',
    });

    jcf.replaceAll();

    $('.jcf-fake-input').text('Выбрать файл');

});


