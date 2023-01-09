$(document).ready(function(){
  // 실행문

  // 시간정보찾기
  let now = new Date();
  let hr = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();

  $('.phone span').eq(0).text(hr);
  $('.phone span').eq(1).text(min);
  $('.phone span').eq(2).text(sec);

  setInterval(function(){
    let now = new Date();
    let hr = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
  
    let hNum;
    let mNum;
    let sNum;
    if(sec>=10){
      sNum=sec
    }else{
      sNum = '0'+sec
    };
    if(min>=10){
      mNum = min
    }else{
      mNum = '0'+min
    };
    if(hr>=10){
      hNum = hr
    }else{
      hNum = '0'+hr
    };

    $('.phone span').eq(0).text(hNum);
    $('.phone span').eq(1).text(mNum);
    $('.phone span').eq(2).text(sNum);
    // if(hr>=6 && hr< 12){
    //   $('#wrap').removeClass('night')
    //   $('#wrap').addClass('morning')
    // if(hr>=12 && hr< 18)
    // $('#wrap').removeClass('morning')
    //   $('#wrap').addClass('afternoon')
    // if(hr>=18 && hr< 21)
    // $('#wrap').removeClass('afternoon')
    //   $('#wrap').addClass('evening')
    // if(hr>=21 && hr< 6)
    // $('#wrap').removeClass('evening')
    //   $('#wrap').addClass('night')}
    },1000);

  $('nav li').click(function(){
    let txt = $(this).text()
    console.log(txt)
    $('#wrap').removeClass()
    $('#wrap').addClass(txt)
  });
});