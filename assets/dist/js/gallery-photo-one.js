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

    $('.jcf-fake-input').text('Загрузить фотографии');

    $('.interior-slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: '<a href="javascript:void(0)" class="slick-arrow next"><i class="icon-icon25"></i></a>',
      prevArrow: '<a href="javascript:void(0)" class="slick-arrow prev"><i class="icon-icon22"></i></a>',
    });

    $('.slider-tabs').on('click', 'a', function(){
      var tabsData = $(this).data('tabs');
      $('.slider-tabs a').removeClass('active');
      $(this).addClass('active');
      $('.tabs-item').removeClass('active');
      $('.' + tabsData).addClass('active');
      $('.picture').get(0).slick.setPosition();
      $('.interior-slider').get(0).slick.setPosition();
      $('.ramu-slider').get(0).slick.setPosition();
      $('.ramu-item .img').matchHeight({
        byRow: false
      });
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
      // $(".rama-height").css({ "height": rh - $(this).val() });
      // $(".ram").css({ "width": ra - $(this).val() });
      // $(".rama-corner").css({ 'height': rch - $(this).val() });
      // $(".rama-corner").css({ 'width': rcw - $(this).val() });
      // $(".main-photo.active").css({ "padding": ra - $(this).val() });
      // var numInp = +$("#my-range").val();
      // var forObj = objNum.find(obj => obj.input === numInp);
      // $("#changeSm").text(forObj.size)
      // $(".priceText").text(forObj.price)
      // // console.log(numInp)
      // // console.log(forObj)
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

    

});