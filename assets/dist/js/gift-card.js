$(document).ready(function(){

    jcf.replaceAll();

    if($(window).width() >= 768){

        $('.benefits-item').matchHeight({
          byRow: false
        });

    }

    $(".input-select").change(function(){
      var op = $(this).val()
      console.log(op);
      if(op == '0'){
        console.log(1);
        $('.input-select').next('.jcf-select').addClass('active');
        $('.input-sum').addClass('active');
      }
    });

});

$(window).resize(function(){


  
});