
$.ajax({
    url:"com.html",
    success:function(data){
        $('body').append(data)
    }
})
scroll();
headerDelete()

$(window).scroll(function(){
    scroll();
    headerDelete()
})

function scroll(){
          let topscroll = $(window).scrollTop();

          if(topscroll > 300) {
              $('.btn-top').css({bottom:'30px'})
          }else {
              $('.btn-top').css({bottom:'-60px'})
          }
      }
function headerDelete(){
          let topscroll = $(window).scrollTop();
          if(topscroll > 30) {
              $('header').css({top:'-31px'})
              $('.sub').css({top:'98px'})
            }else {
              $('header').css({top:'0px'})
              $('.sub').css({top:'130px'})
          }
      }



$(document).on('mouseleave','header .menu-li',function(){
    $(this).find('.sub').stop().hide();
    $('section').css({filter:'none'})
})
$(document).on('mouseenter','header .menu-li',function(){
     $(this).find('.sub').stop().fadeIn();
     $('section').css({filter:'blur(10px)', })
    })

$(document).on('click', 'header .row2 .search input, header .row2 .search i.bi-search', function(e){
  e.preventDefault();
  $('header .searchPop').addClass('active');
});

$(document).on('click', 'header .searchPop .popClose', function(e){
  e.preventDefault();
  $('header .searchPop').removeClass('active');
});

$(document).on('keydown', function(e){
  if(e.key === 'Escape'){
    $('header .searchPop').removeClass('active');
    $('.menuDim').removeClass('active');
    $('.menuPop').removeClass('active');
    $('body').css('overflow','');
  }
});


$(document).on('click', 'header .row2 .right .bi-list', function(e){
  e.preventDefault();
  $('.menuDim').addClass('active');
  $('.menuPop').addClass('active');
  $('body').css('overflow','hidden');
});

$(document).on('click', '.menuClose, .menuDim', function(e){
  e.preventDefault();
  $('.menuDim').removeClass('active');
  $('.menuPop').removeClass('active');
  $('body').css('overflow','');
});
