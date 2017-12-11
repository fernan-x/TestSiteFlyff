$(document).ready(function(){
  $('.a1').click(function(){
    $('.ch1').show(500);
    $('.ch0, .ch2, .ch3, .ch4, .ch5, .ch6, .ch7, .ch8').hide(500);
    $(this).addClass('acth');
    $('.a2, .a3, .a4, .a5, .a6, .a7, .a8').removeClass('acth');
  });
  $('.a2').click(function(){
    $('.ch2').show(500);
    $('.ch0, .ch1, .ch3, .ch4, .ch5, .ch6, .ch7, .ch8').hide(500);
    $(this).addClass('acth');
    $('.a1, .a3, .a4, .a5, .a6, .a7, .a8').removeClass('acth');
  });
  $('.a3').click(function(){
    $('.ch3').show(500);
    $('.ch0, .ch1, .ch2, .ch4, .ch5, .ch6, .ch7, .ch8').hide(500);
    $(this).addClass('acth');
    $('.a1, .a2, .a4, .a5, .a6, .a7, .a8').removeClass('acth');
  });
  $('.a4').click(function(){
    $('.ch4').show(500);
    $('.ch0, .ch1, .ch3, .ch2, .ch5, .ch6, .ch7, .ch8').hide(500);
    $(this).addClass('acth');
    $('.a1, .a3, .a2, .a5, .a6, .a7, .a8').removeClass('acth');
  });
  $('.a5').click(function(){
    $('.ch5').show(500);
    $('.ch0, .ch1, .ch3, .ch2, .ch4, .ch6, .ch7, .ch8').hide(500);
    $(this).addClass('acth');
    $('.a1, .a3, .a2, .a4, .a6, .a7, .a8').removeClass('acth');
  });
  $('.a6').click(function(){
    $('.ch6').show(500);
    $('.ch0, .ch1, .ch3, .ch2, .ch4, .ch5, .ch7, .ch8').hide(500);
    $(this).addClass('acth');
    $('.a1, .a3, .a2, .a4, .a5, .a7, .a8').removeClass('acth');
  });
  $('.a7').click(function(){
    $('.ch7').show(500);
    $('.ch0, .ch1, .ch3, .ch2, .ch4, .ch5, .ch6, .ch8').hide(500);
    $(this).addClass('acth');
    $('.a1, .a3, .a2, .a4, .a5, .a6, .a8').removeClass('acth');
  });
  $('.a8').click(function(){
    $('.ch8').show(500);
    $('.ch0, .ch1, .ch3, .ch2, .ch4, .ch5, .ch6, .ch7').hide(500);
    $(this).addClass('acth');
    $('.a1, .a3, .a2, .a4, .a5, .a6, .a7').removeClass('acth');
  });
});
