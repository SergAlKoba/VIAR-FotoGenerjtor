$(document).ready(function(){

    jcf.replaceAll();

    $('.filter li').on('click', function () {
        var itemData = $(this).data('item');
        $('.filter li').removeClass('active');
        $(this).addClass('active');
        $('.personal-item').removeClass('active');
        $('.filter-content li').removeClass('active');
        if(itemData == 0){
            $('.filter-content li').removeClass('active');
            $('.personal-item').removeClass('active');
        }
        $('.' + itemData).addClass('active');
        $('.' + itemData).addClass('active');
    });

    if($(window).width() >= 768){

        $('.filter-content ul li p').matchHeight({
          byRow: false
        });

        $('.completed-item .img').matchHeight({
            byRow: false
        });
    
        $('.acting-item .img').matchHeight({
            byRow: false
        });

    }

    if($(window).width() >= 1024){

        $('.bonuses-item').matchHeight({
            byRow: false
        });

    }

});

$(window).resize(function(){


  
});