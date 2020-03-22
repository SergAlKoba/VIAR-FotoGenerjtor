$(document).ready(function(){

    jcf.replaceAll();

    $('.checkout-tel').mask('0 (000) 000 00 00', {placeholder: "0 (___) ___ __ __"});

    $('.jcf-fake-input').text('Вы можете загрузить фото пример');

    if($(window).width() >= 1024){

        $('.checkout-item .item').matchHeight({
          byRow: false
        });

    }

});

$(window).resize(function(){


  
});