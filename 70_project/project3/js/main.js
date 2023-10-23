//캐로셀 코드
$(function () {
  setTimeout(function () {
    $(".slider li .text0").addClass("on");
    $(".slider li .atext0").addClass("on");
  }, 1000); //1초후 최초 한번만 실행

  var bx = $(".slider").bxSlider({
    auto: true,
    controls: false,
    pager: false,
    mode: "fade",
    pause: 5000, //실제 슬라이드 속도 - setInterval과 비슷
    autoHover: true,
    onSlideBefore: function () {},
    onSlideAfter: function () {
      var k = bx.getCurrentSlide();
      $(".slider li").find("h2").removeClass("on");
      $(".slider li").find("p").removeClass("on");
      $(".slider li .text" + k).addClass("on");
      $(".slider li .atext" + k).addClass("on");
    },
  });
});

//quick 이동 코드
$(document).ready(function () {
  var currentPosition = parseInt($("#quick").css("top"));
  $(window).scroll(function () {
    var position = $(window).scrollTop();
    $("#quick")
      .stop()
      .animate({ top: position + currentPosition + "px" }, 1000);
  });
});


// 스크롤모션

window.addEventListener('scroll', function(){ 
  scrollMotion() 
}); 

function scrollMotion(){ 
  const scroll = document.querySelectorAll('.scrollMotion'), 
      eleOffset = scroll[0].getBoundingClientRect().top + window.pageYOffset - 300; 

  if(window.scrollY > eleOffset){ 
    scroll.forEach((scroll, idx) => { 
      setTimeout(() => { 
        scroll.style.cssText = 'opacity: 1; transform: translateY(50);' 
      }, 180*idx);  
      }); }
  // }else{  
  //   scroll.forEach((scroll, idx) => {  
  //     setTimeout(() => { 
  //       scroll.style.cssText = 'opacity: 0; transform: translateY(0);' 
  //     }, 180*idx); 
  //     }); 
  // } 
} 