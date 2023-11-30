// import { func } from "prop-types";

// header 
$(function () {
  var didScroll;
  var lastScrollTop = 0;

  var delta = 5; // 이벤트를 발생시킬 스크롤의 이동 범위
  var navbarHeight = $("header").outerHeight();

  $(window).scroll(function(event){
      didScroll = true;
  });
  

  setInterval(function() {
      if (didScroll) {
          hasScrolled();
          didScroll = false;
      }
  }, 250); // 스크롤이 멈춘 후 동작이 실행되기 까지의 딜레이

  function hasScrolled() {
      var st = $(this).scrollTop(); // 현재 window의 scrollTop 값

      if(windowWidth > 767){
        // delta로 설정한 값보다 많이 스크롤 되어야 실행된다.
        if(Math.abs(lastScrollTop - st) <= delta)
            return;
  
        if (st > lastScrollTop && st > navbarHeight){
            // 스크롤을 내렸을 때
            $("header").slideUp("fast"); // header 숨기기
        } else {
            // 스크롤을 올렸을 때
            if(st + $(window).height() < $(document).height()) {
                $("header").slideDown("fast"); // header 보이기
            }
        }
  
        lastScrollTop = st; // 현재 멈춘 위치를 기준점으로 재설정

      }
  }
})


//sec1 - swiper slider
const swiper = new Swiper('.swiper', {
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop:true,
  autoplay:{
    delay:3000,
    disableOnInteraction: false,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


//sec4,5 - scroll motion
const docEle = document.documentElement;
const sec4Image = document.querySelector('.sec4-left img');
const sec4Text1 = document.querySelector('.sec4-right-1');
const sec4Text2 = document.querySelector('.sec4-right-2');
const sec4Text3 = document.querySelector('.sec4-right-button');
const notice1 = document.querySelector('.notice1');
const notice2 = document.querySelector('.notice2');
const notice3 = document.querySelector('.notice3');

window.onscroll = function(){
  let st = docEle.scrollTop;
  if(st > 2360){
    sec4Image.style.transform = 'translateX(350px)'
    sec4Image.style.opacity = 1;
    sec4Text1.style.transform = 'translateX(-200px)'
    sec4Text1.style.opacity = 1;
    sec4Text2.style.transform = 'translateX(-200px)'
    sec4Text2.style.opacity = 1;
    sec4Text3.style.transform = 'translateX(-200px)'
    sec4Text3.style.opacity = 1;
  }else{
    sec4Image.style.transform = 'translateX(-100px)'
    sec4Image.style.opacity = 0;
    sec4Text1.style.transform = 'translateX(400px)'
    sec4Text1.style.opacity = 0;
    sec4Text2.style.transform = 'translateX(400px)'
    sec4Text2.style.opacity = 0;
    sec4Text3.style.transform = 'translateX(400px)'
    sec4Text3.style.opacity = 0;
  }
  if(st > 3210){
    console.log(st) 
    notice1.style.opacity = 1;
    notice2.style.opacity = 1;
    notice3.style.opacity = 1;
  }else{
    notice1.style.opacity = 0;
    notice2.style.opacity = 0;
    notice3.style.opacity = 0;
  }
} 


// // quick menu
$(document).ready(function(){
  var currentPosition = parseInt($("#quick").css("top"));
  $(window).scroll(function() {
    var position = $(window).scrollTop(); 
    $("#quick").stop().animate({"top":position+currentPosition+"px"},1000);
  });
});

accordion
var coll = document.getElementsByClassName("contentBx");
// const sub = document.querySelector('.acc-sub')
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var sub = this.querySelector('.acc-sub');
    if (sub.style.display === "block") {
      sub.style.display = "none";
    } else {
      sub.style.display = "block";
    }
  });
}