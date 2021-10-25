$(function(){
  getSize();
  $(window).resize(function(){
    getSize();
  })
  function getSize(){
    var windowWidth = $('body').width();
    var contentWidth = windowWidth - 150;
    var scaleNum = contentWidth/1920;
    $('.right').css({
      'height': 1080*scaleNum+25+'px'
    })
    $('.dt-content').css({
      'transform':'scale('+scaleNum+')',
      '-webkit-transform':'scale('+scaleNum+')',  /*兼容-webkit-引擎浏览器*/
      '-moz-transform':'scale('+scaleNum+')',
      '-webkit-transform':'scale('+scaleNum+')',
      '-o-transform':'scale('+scaleNum+')',
      'transform-origin':'0% 0%',
      '-ms-transform-origin':'0% 0%',
      '-webkit-transform-origin':'0% 0%',
      '-moz-transform-origin':'0% 0%',
      '-o-transform-origin':'0% 0%',
    })
  }
})