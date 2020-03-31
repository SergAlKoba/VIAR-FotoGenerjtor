$(document).ready(function(){

    jcf.replaceAll();


    $('.slider-tabs').on('click', 'a', function(){
      var tabsData = $(this).data('tabs');
      $('.slider-tabs a').removeClass('active');
      $(this).addClass('active');
      $('.gallery-photo .tabs-item').removeClass('active');
      $('.' + tabsData).addClass('active');
      $('.picture').get(0).slick.setPosition();
      $('.interior-slider').get(0).slick.setPosition();
      $('.ramu-slider').get(0).slick.setPosition();
      $('.ramu-slider2').get(0).slick.setPosition();
      $('.ramu-item .img').matchHeight({
        byRow: false
      });
      $('.ramu-item2 .img').matchHeight({
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

    $('.effects-item').on('click', function(){
      $('.effects-item').removeClass('active');
      $(this).addClass('active');
    });

    $('.effects-item .img').matchHeight({
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

    $('.ramu-slider2').slick({
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

    $('.product-download .jcf-button-content').text('Загрузить');

    $('.imageFile').change(function(){ 
      $('.product-download .jcf-extension-png .jcf-button-content').text('+ Х');
    });

    $('.product-download .img').matchHeight({
      byRow: false
    });
    

});

$(window).resize(function(){

    $('.product-download .img').matchHeight({
      byRow: false
    });

});