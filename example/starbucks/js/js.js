$(document).ready(function(){
  $('.search a').click(function(){
    $('.search').addClass('on')
  });
  // menu를 hover했을 때 sub_menu가 보여라.
  $('.gnb li').mouseenter(function(){
    $('.sub_menu').slideDown()
  })
})