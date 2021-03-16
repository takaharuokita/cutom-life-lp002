//成分表
$(function(){
  "use strict";
  $('.ingredientsOuter .ingSwitch').click(function() {
    $(this).fadeOut(300);
    $(this).prev('.ingTex').addClass('texOpen');
  })
});

// フォーム一体型用js
//　ボタンを押した際にフォームに商品情報を挿入
function setProductId(product_id) {
  $('select[name=product_id] option').eq(0).val(product_id).parent().val(product_id);
  //fnModeSubmit('reload', '', '');
  lp_init(product_id,$('#quantity').val(),null); // ここで定期情報などを読み込みます。
  return false;
}
$(document).ready(function(){
// 画面内アンカースクロール
var offsetY = 0;
var time = 500;
  $('a[href^="#"]').click(function() {
    var target = $(this.hash);
    if (!target.length) return ;
    var targetY = target.offset().top+offsetY;
    $('html,body').animate({scrollTop: targetY}, time, 'swing');
    window.history.pushState(null, null, this.hash);
    return false;
  });
});

//FAQ bresmile_white 他
$(function() {
  if($('.faqTab').length) {
    $('.faqTab li').click(function () {
      var index = $('.faqTab li').index(this);
      $('.faqTab li').removeClass('act');
      $(this).addClass('act');
      $('.tabCnt p').removeClass('show').eq(index).addClass('show');
    });
  }
});


//FAQ bresmile_e 他
$(function() {
  if($('.qaTab').length){
    var tab = $('.qaTab li');
    var tabCnt = $('.qaCnt li');
    $(tab).eq(0).addClass('act');
    $(tabCnt).hide();
    $(tabCnt).eq(0).show();
    $(tab).each(function () {
      $(this).on('click', function () {
        if (!$(this).hasClass('act')) {
          if ($('.qaTab').hasClass('tab2')) {
            $('.qaTab').removeClass('tab2');
          } else {
            $('.qaTab').addClass('tab2');
          }
        }
        var index = $(tab).index(this);
        $(tab).removeClass('act');
        $(this).addClass('act');
        $(tabCnt).hide();
        $(tabCnt).eq(index).show();
      });
    });
  }
});

//FAQ bresmile_sup_clear・bresmile_nosup_clear
$(function() {
  if($('.faq-tab').length) {
    $('.faq-tab > div').click(function () {
      $('.faq-txt > div').removeClass('active');
      $('#' + $(this).data('tab')).addClass('active');
    });
  }
});

//FAQ bresmile_clear_us
$(function() {
if($('.faqArea').length) {
$('.faqArea ul li').click(function() {
    $('.faqArea div p').removeClass('show').eq($('.faqArea ul li').index(this)).addClass('show');
});
}
});
