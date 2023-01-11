$(document).ready(function(){
  $('nav li').mouseenter(function(){
    let i = $(this).index()
    console.log(i)
    $('.submenu>ul').slideUp()
    $('.sub'+(i+1)).slideDown()
  });
  $('header').mouseleave(function(){
    $('.submenu>ul').slideUp()
  });
});