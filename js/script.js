$('#slickSlider').slick({  //settings for slick slider
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
  speed: 500,
  cssEase: 'linear',
  pauseOnFocus: false,
  pauseOnHover: false
});

$(document).ready(function(){       //counter in statistic-block (our statistic)
  $('.statistic-list').viewportChecker({
    callbackFunction: function(elem, action){
      $('#statistic-num-1').animateNumber({ number: 125 },2300);
      $('#statistic-num-2').animateNumber({ number: 300000 },2300);
      $('#statistic-num-3').animateNumber({ number: 880000 },2300);
    },
  });
});
