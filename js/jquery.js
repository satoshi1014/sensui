$(function(){
    $('.slick01').slick({ //{}を入れる
        // autoplay: true,
        dots: true, //複数書く場合は「,」でつなぐ
        // autoplaySpeed:5000,
    });
  var $nav   = $('#navArea');
  var $btn   = $('.toggle_btn');
  var $mask  = $('#mask, .inner ul li a');
  var open   = 'open'; // class
  // menu open close
  $btn.on( 'click', function() {
    if ( ! $nav.hasClass( open ) ) {
      $nav.addClass( open );
    } else {
      $nav.removeClass( open );
    }
  });
  // mask close
  $mask.on('click', function() {
    $nav.removeClass( open );
  });
   $('#header-list li a, .inner ul li a, #main-image-list li a').click(function(){
        var id = $(this).attr('href');
        var position = $(id).offset().top;
        $('html, body').animate({
            'scrollTop': position
        }, 500);
    });
    $('#header-title a').click(function(){
        $('html, body').animate({
          'scrollTop': 0
        }, 500);
    });
    window.onload = function() {
      const spinner = document.getElementById('loading');
      spinner.classList.add('loaded');
    }
});
