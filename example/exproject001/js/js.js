$(document).ready(function(){
  // 갤러리이미지움직임설정
  // 왼쪽 버튼을 클릭 시 이미지가 왼쪽으로 이동
  let i = 0
  $('.gallery .left').click(function(){
    if(i<5)i++;
    let gwd = $('.gallery li').width();
    $('.gallery ul').stop().animate({'left':i*-(gwd+5)},200);
    $('.gallery li').removeClass('on');
    $('.gallery li').eq(i).addClass('on');
    $('.gallery li').eq(i-1).stop().animate({'opacity':0},100);
  });
  // 오른쪽 버튼을 클릭 시 이미지가 오른쪽으로 이동
  $('.gallery .right').click(function(){
    if(i>0)i--;
    let gwd = $('.gallery li').width();
    $('.gallery ul').stop().animate({'left':i*-(gwd+5)},200);
    $('.gallery li').removeClass('on');
    $('.gallery li').eq(i).addClass('on');
    $('.gallery li').eq(i).stop().animate({'opacity':1},100);
  });

  // 리뷰움직임설정
  // 왼쪽 버튼을 클릭 시 이미지가 왼쪽으로 이동
  $('.review .left').click(function(){
    if(i<3)i++;
    let rwd = $('.review li').width();
    $('.review ul').stop().animate({'left':i*-(rwd+3)},200);
    $('.review li').removeClass('on');
    $('.review li').eq(i).addClass('on');
    $('.review li').eq(i-1).stop().animate({'opacity':0},100);
  });
  // 오른쪽 버튼을 클릭 시 이미지가 오른쪽으로 이동
  $('.review .right').click(function(){
    if(i>-1)i--;
    let rwd = $('.review li').width();
    $('.review ul').stop().animate({'left':i*-(rwd+3)},200);
    $('.review li').removeClass('on');
    $('.review li').eq(i).addClass('on');
    $('.review li').eq(i).stop().animate({'opacity':1},100);
  });
});