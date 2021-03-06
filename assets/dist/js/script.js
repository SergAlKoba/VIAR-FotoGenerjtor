$(document).ready(function(){

    $('.phone').mask('+7 (000) 000 00 00', {placeholder: "+7 (___) ___ __ __"});

    $('.close-popup').on('click', function(){
        $('.popup').removeClass('active');
    });

    $('.close-content').on('click', function(){
        $('.popup').removeClass('active');
    });

    $('.office').on('click', function(){
        $('.popup').removeClass('active');
        $('.popup-login-registration').addClass('active');
    });

    $('.login').on('click', function(){
        $('.popup').removeClass('active');
        $('.popup-login').addClass('active');
    });

    $('.registration').on('click', function(){
        $('.popup').removeClass('active');
        $('.popup-registration').addClass('active');
    });

    $('.forgotYour_js').on('click', function(){
        $('.popup').removeClass('active');
        $('.popup-forgotYour').addClass('active');
    });

    $('.datas_js').on('click', function(){
        $('.popup').removeClass('active');
        $('.popup-dates').addClass('active');
    });

    $('.friend_js').on('click', function(){
        $('.popup').removeClass('active');
        $('.popup-lnvite-friend').addClass('active');
    });

    $('.printScreen_js').on('click', function(){
        $('.popup').removeClass('active');
        $('.popup-print-screen').addClass('active');
    });

    $('.photo_js').on('click', function(){
        $('.popup').removeClass('active');
        $('.popup-photo').addClass('active');
    });

    $('.invited_js').on('click', function(){
        $(this).toggleClass('active');
        $(this).next().toggleClass('active');
    });

});


