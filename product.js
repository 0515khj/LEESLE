 $('.goodsList li').on('click', function () {
      location.href = 'detail.html';
    });

    $('.goodsList li').on('mouseenter', function () {
      $(this).find('.img-box img').stop().hide();
      $(this).find('.img-box img').eq(1).stop().show();
    })
    $('.goodsList li').on('mouseleave', function () {
      $(this).find('.img-box img').stop().hide();
      $(this).find('.img-box img').eq(0).stop().show();
    })
    $('.chipBar .chip').on('click', function () {
      $('.chipBar .chip').removeClass('active');
      $(this).addClass('active');
    });