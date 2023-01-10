$(document).ready(function(){
  // 화면에서 스크롤바가 움직일 때 상단의 위치값을 찾아라.
  $(window).scroll(function(){
    let sc = $(window).scrollTop();
    $('section').stop().animate({'left':-sc},600);
  });
});