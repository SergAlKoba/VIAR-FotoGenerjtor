$(document).ready(function(){

    $('.gallery-photo-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<button class="slick-arrow next"><i class="icon-icon28"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-icon23"></i></button>',
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

    $('.foto-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: '<button class="slick-arrow next"><i class="icon-icon28"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-icon23"></i></button>',
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  nextArrow: '<button class="slick-arrow next"><i class="icon-icon28"></i></button>',
                    prevArrow: '<button class="slick-arrow prev"><i class="icon-icon23"></i></button>',
                }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                nextArrow: '<button class="slick-arrow next"><i class="icon-icon28"></i></button>',
                prevArrow: '<button class="slick-arrow prev"><i class="icon-icon23"></i></button>',
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                nextArrow: '<button class="slick-arrow next"><i class="icon-icon28"></i></button>',
                prevArrow: '<button class="slick-arrow prev"><i class="icon-icon23"></i></button>',
              }
            }
        ]
    });

});


