$(document).ready(function(){
  // nav를 클릭했을 때 submenu가 보임
  $('nav li').mouseenter(function(){
    let i = $(this).index()
    console.log(i)
    $('.submenu>ul').slideUp()
    $('.sub'+(i+1)).slideDown()
  });
  $('header').mouseleave(function(){
    $('.submenu>ul').slideUp()
  });

  // submenu를 클릭했을 때 글씨 색상 변경
  $('submenu a').click(function(){
    let txt= $(this).text()
    console.log(txt)
    $('.wrap').removeClass()
    $('.wrap').addClass(txt)
})

  // btn을 클릭했을 때 slide img가 이동
  $('.btn li').click(function(){
    let i = $(this).index();
    $('.slide .img').eq(i-1).css({'left':'0'}).animate({'left':'-100%'});
    $('.slide .img').eq(i).css({'left':'100%'}).animate({'left':'0'});
    $('.btn li').removeClass('on');
    $(this).addClass('on');
  });
  // 일정시간 간격으로 btn을 순차적으로 자동 클릭
  let btn = 0
  let slide = setInterval(timer,2000);
  $('.wrap').mouseenter(function(){
    clearInterval(slide)
  });
  $('.wrap').mouseleave(function(){
    slide = setInterval(timer,2000);
  });
  function timer(){
    a++;
    if(btn==3)a=0;
    $('.btn li').eq(a).trigger('click')
  }
});