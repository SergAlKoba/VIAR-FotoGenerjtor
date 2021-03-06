$(document).ready(function(){

    $('.slider-ideas').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
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


    if($(window).width() >= 1023){

      $('.slider-ideas').slick('unslick');

      $(".slider-ideas").mCustomScrollbar();

    }

});

$(window).resize(function(){

    if($(window).width() >= 1023){
  
      $('.slider-ideas').slick('unslick');
      
    }
  
});