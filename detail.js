$(function () {
  $(".smallImg-box img").eq(0).addClass("is-active");

  $(".smallImg-box img").on("click", function () {
    var idx = $(this).index();

    $(".smallImg-box img").removeClass("is-active");
    $(this).addClass("is-active");

    $(".bigImg-box img").hide().eq(idx).fadeIn(150);
  });

  $(".toggleRow").on("click", function () {
    $(".toggleCont").stop().slideToggle();
    $(this).find("i").toggleClass("bi-chevron-down bi-chevron-up");
  });

 
let price = 229000;

function comma(num){
  return "₩" + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function totalCalc(){
  let cnt = $(".qtyInput").val();
  cnt = cnt < 1 ? 1 : cnt;

  $(".qtyInput").val(cnt);
  $(".totalPrice").text(comma(price * cnt));
  $(".totalCnt").text("(" + cnt + "개)");
}

$(".qtyBtn.plus").click(function(){
  let cnt = Number($(".qtyInput").val());
  $(".qtyInput").val(cnt + 1);
  totalCalc();
});

$(".qtyBtn.minus").click(function(){
  let cnt = Number($(".qtyInput").val());
  if(cnt > 1){
    $(".qtyInput").val(cnt - 1);
  }
  totalCalc();
});

$(".qtyInput").on("keyup change", function(){
  totalCalc();
});

totalCalc();

});

$('.heartEmpty').on('click',function(){
    $('.heartEmpty').css({display:'none'});
    $('.fill').css({display:'block'});
    $('.heart').addClass('active');
})
$('.fill').on('click',function(){
    $('.heartEmpty').css({display:'block'});
    $('.fill').css({display:'none'});
    $('.heart').removeClass('active');
})

$(".contNav .product").on("click", function () {
  let target = $(this).data("target");
  let top = $(target).offset().top - 180; 

  $("html, body").animate({
    scrollTop: top
  }, 500);
});