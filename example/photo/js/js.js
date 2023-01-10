$(document).ready(function(){
  // body 높이값과 section의 가로값 통일시키기
  // article개수를 구하고 article의 가로값을 구해서 두 개를 곱한 값을 section의 가로값으로 변환
  let a = $('article').size();
  let awd = $('article').width();
  $('section').width(a*(awd+20));
  $('body').height(a*(awd+20));
  $(window).resize(function(){
  // 화면이 resize 될 때마다, body 높이값과 section의 가로값 통일시키기
  // article개수를 구하고 article의 가로값을 구해서 두 개를 곱한 값을 section의 가로값으로 변환
  let a = $('article').size();
  let aWd= $('article').width()
  $('section').width(a*(aWd+20));
  $('body').height(a*(aWd+20));
  });

  // 화면에서 스크롤바가 움직일 때 상단의 위치값을 찾아라.
  $(window).scroll(function(){
    let sc = $(window).scrollTop();
    // $('h1').text(sc);
    $('section').stop().animate({'left':-sc},600);
  });
  $('.gnb li').click(function(){
    let i = $(this).index();
    $('html,body').scrollTop(1000*i)
  });
});