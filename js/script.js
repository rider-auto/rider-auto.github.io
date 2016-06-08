$(document).ready(function() {
    // Проверка инпута с имейлом на валидность
    $('#get_ctlg_input').blur(function() {
        if($(this).val() != '') {
            var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
            if(pattern.test($(this).val())){
                $(this).css({'border' : '1px solid #569b44'});
                $('#right').text('');
                $('#not_right').text('');
                $('#empty').text('');

            } else {
                $(this).css({'border' : '1px solid #ff0000'});
                $('#not_right').text('Не правильно введен адрес');
                $('#empty').text(' ');
            }
        } else {
            $(this).css({'border' : '1px solid #ff0000'});
            $('#empty').text('Поле email не должно быть пустым');
            $('#not_right').text(' ');
        }
    });
// закончили
// Плавная прокрутка до якоря 
        $("body").on('click', '[href*="#"]', function(e){
          // var fixed_offset = 100;
          $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top  }, 1000);
          e.preventDefault();
        });
        $("form").on('click', '[href*="#"]', function(e){
          // var fixed_offset = 100;
          $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top  }, 1000);
          e.preventDefault();
        });
//закончили
//Делаю кнопку вверх
 jQuery('#scrollup img').mouseover( function(){
        jQuery( this ).animate({opacity: 0.65},100);
    }).mouseout( function(){
        jQuery( this ).animate({opacity: 1},100);
    }).click( function(){
        window.scroll(0 ,0); 
        return false;
    });

    jQuery(window).scroll(function(){
        if ( jQuery(document).scrollTop() > 0 ) {
            jQuery('#scrollup').fadeIn('fast');
        } else {
            jQuery('#scrollup').fadeOut('fast');
        }
    });
// закончили


});




