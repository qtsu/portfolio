$(document).ready(function(){
  // 제이쿼리선택자는 $(CSS표기방법)으로 선택함
  // addEventLisner의 경우 이벤트와 함수의 조합으로 표현
  $('#gnb li:nth-child(1)').click(function(){
    // 모든 section의 div의 클래스명의 on값을 지워라.
    $('section>div').removeClass('on');
    // section의 div 중 1번째 아이에게 크래스명에 on값을 더해주어라.
    $('section>div:nth-child(1)').addClass('on');
  })
  $('#gnb li:nth-child(2)').click(function(){
    // 모든 section의 div의 클래스명의 on값을 지워라.
    $('section>div').removeClass('on');
    // section의 div 중 2번째 아이에게 크래스명에 on값을 더해주어라.
    $('section>div:nth-child(2)').addClass('on');
  })
  $('#gnb li:nth-child(3)').click(function(){
    // 모든 section의 div의 클래스명의 on값을 지워라.
    $('section>div').removeClass('on');
    // section의 div 중 3번째 아이에게 크래스명에 on값을 더해주어라.
    $('section>div:nth-child(3)').addClass('on');
  })
})