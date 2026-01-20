
$(document).on('click', '.section0 .title-btn button', function(e){
  e.preventDefault();

  const idx = $(this).index(); 

  $('.section0 .title-btn button').removeClass('active');
  $(this).addClass('active');

  const $lists = $('.section0 .container .weekly'); 
  $lists.removeClass('active').hide();              

  $lists.eq(idx).addClass('active').fadeIn();   
});

$(function(){
  $('.section0 .title-btn button').removeClass('active').eq(0).addClass('active');
});

$(document).on('click', '.section2 .title-btn button', function () {
  const idx = $(this).index();

  $('.section2 .title-btn button').removeClass('active');
  $(this).addClass('active');

  $('.section2 .prod-grid').removeClass('active').hide();
  $('.section2 .prod-grid').eq(idx).addClass('active').fadeIn();
});

$(document).on('click', '.section4 .video-overlay', function () {
  const $section = $(this).closest('.section4');
  const $iframe = $section.find('iframe');

  $section.find('.container .right').hide();

  const baseSrc = $iframe.attr('data-src') || $iframe.attr('src');
  const playSrc = baseSrc + (baseSrc.includes('?') ? '&' : '?') + 'autoplay=1&mute=1';

  $iframe.attr('src', playSrc);

  $(this).remove();
});