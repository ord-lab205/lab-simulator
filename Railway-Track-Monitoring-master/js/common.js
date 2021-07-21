$(function(){
  var windowHeight =$('body').height();
  var contentHeight = windowHeight - 96;
  $('.right').css({
    'min-height': contentHeight+'px'
  })
})