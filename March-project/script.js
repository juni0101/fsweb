// sec1 carousel
let wi = 1104;
let num = 0;
let bannerLi = document.querySelectorAll('#banner li');
let banner = document.querySelector('#banner');
let copy1 = bannerLi[0].cloneNode(true);
banner.appendChild(copy1);
function auto() { 
  if (num === bannerLi.length) { 
      num = 0; 
      banner.style.transition = 'none'; 
      banner.style.marginLeft = '0px'; 
  } 
  const autoInterval = setTimeout(function () { 
      num++; 
      banner.style.transition = 'margin-left 1s'; 
      banner.style.marginLeft = -num * wi + "px"; 
  }, 2000); 
}
setInterval(auto, 2000); 

let buttons = document.querySelectorAll('.button-wrap button'); 
buttons.forEach(function (button, index) {  
  button.addEventListener('click', function () {  
    num = index;  
    banner.style.transition = 'margin-left 1s';  
    banner.style.marginLeft = -num * wi + 'px'; 
  }); 
}); 


// sec2 carousel
let slides2 = document.querySelector('.slides'),
      slide2 = document.querySelectorAll('.slides li'),
      currentIdx2 = 0, 
      slideCount2 = slide2.length, 
      slideWidth2 = 525, 
      slideMargin2 = 30; 
      prevBtn2 = document.querySelector('article .prev');  
      nextBtn2 = document.querySelector('article .next');  

    makeClone2();
      //클론만들기
      function makeClone2() {
        for(let i=0; i<slideCount2; i++){
          let cloneSlide2 = slide2[i].cloneNode(true);
          cloneSlide2.classList.add('clone');
          slides2.appendChild(cloneSlide2);
        }
        for(let i=slideCount2 -1; i>=0; i--){
          let cloneSlide2 = slide2[i].cloneNode(true);
          cloneSlide2.classList.add('clone');
          slides2.prepend(cloneSlide2);
        }
        updateWidth2();
        setInitialPos2();
        setTimeout(() => {
          slides2.classList.add('animated');
        }, 100);
      }

      // 전체너비지정 함수
      function updateWidth2(){
        let currentSlides2 = document.querySelectorAll('.slides li');
        let newSlideCount2 = currentSlides2.length;

        let newWidth2 = (slideWidth2+slideMargin2) * newSlideCount2 - slideMargin2 + 'px';
        slides2.style.width = newWidth2;
      }
      // 전체슬라이드너비 이동
      function setInitialPos2() {
        let initialTranslateValue2 = -(slideWidth2 + slideMargin2)*slideCount2; 
        slides2.style.transform = 'translateX('+initialTranslateValue2+'px)'
        slides2.classList.add('animated');
      }

      // 버튼클릭 이벤트
      nextBtn2.addEventListener('click',function () { 
        moveSlide2(currentIdx2 + 1);
        stopSlide2();
       });
      prevBtn2.addEventListener('click',function () { 
        moveSlide2(currentIdx2 - 1);
        stopSlide2();
       });

      //  움직이는 이벤트
      function moveSlide2(num2) { 
        slides2.style.left = -num2 * (slideWidth2 + slideMargin2) + 'px';
        currentIdx2 = num2;
        
        if(currentIdx2 == slideCount2 || currentIdx2 == -slideCount2){
          setTimeout(() => {
            slides2.classList.remove('animated');
            slides2.style.left = '0px';
            currentIdx2 = 0;
          }, 500);
          setTimeout(() => {
            slides2.classList.add('animated');
          }, 600);
        }
      }
      // 오토
      let timer2 = undefined;
      function autoSlide2() { 
        if(timer2 == undefined){
          timer2 = setInterval(function () { 
            moveSlide2(currentIdx2 + 1);
          },3000)
        }
      }
      autoSlide2();
      function stopSlide2() { 
        clearInterval(timer2);
        timer2 = undefined;
      }
      slides2.addEventListener('mouseenter',function () { 
        stopSlide2();
      });
      slides2.addEventListener('mouseleave',function () { 
        autoSlide2();
      });




// sec3 tab
const tags = document.querySelectorAll('#tab-menu a');
const contents = document.querySelectorAll('#tab-content > div');

contents[0].style.display = 'block';
for(let i=0; i<tags.length; i++){
  tags[i].addEventListener('click',function(){
    for(let j=0; j<tags.length; j++){
      if(i == j){
        tags[j].classList.add('active');
        contents[j].style.display = 'block';
      }else{
        tags[j].classList.remove('active');
        contents[j].style.display = 'none';
      }
    }
  })
}




// sec4 
let slides = document.querySelector('.products'),
      slide = document.querySelectorAll('.products li'),
      currentIdx = 0,
      slideCount = slide.length,
      slideWidth = 261,
      slideMargin = 32;
      prevBtn = document.querySelector('.sec4-button .prev'); 
      nextBtn = document.querySelector('.sec4-button .next'); 

      makeClone();
      // 클론만들기
      function makeClone() {
        for(let i=0; i<slideCount; i++){
          let cloneSlide = slide[i].cloneNode(true);
          cloneSlide.classList.add('clone');
          slides.appendChild(cloneSlide);
        }
        for(let i=slideCount -1; i>=0; i--){
          let cloneSlide = slide[i].cloneNode(true);
          cloneSlide.classList.add('clone');
          slides.prepend(cloneSlide);
        }
        updateWidth();
        setInitialPos();
        setTimeout(() => {
          slides.classList.add('animated');
        }, 100);
      }

      // 전체너비지정 함수
      function updateWidth(){
        let currentSlides = document.querySelectorAll('.slides li');
        let newSlideCount = currentSlides.length;

        let newWidth = (slideWidth+slideMargin) * newSlideCount - slideMargin + 'px';
        slides.style.width = newWidth;
      }
      // 전체슬라이드너비 이동
      function setInitialPos() {
        let initialTranslateValue = -(slideWidth + slideMargin)*slideCount; 
        slides.style.transform = 'translateX('+initialTranslateValue+'px)'
        slides.classList.add('animated');
      }

      // 버튼클릭 이벤트
      nextBtn.addEventListener('click',function () { 
        moveSlide(currentIdx + 1);
       });
      prevBtn.addEventListener('click',function () { 
        moveSlide(currentIdx - 1);
       });

      //  움직이는 이벤트
      function moveSlide(num) { 
        slides.style.left = -num * (slideWidth + slideMargin) + 'px';
        currentIdx = num;
        
        if(currentIdx == slideCount || currentIdx == -slideCount){
          setTimeout(() => {
            slides.classList.remove('animated');
            slides.style.left = '0px';
            currentIdx = 0;
          }, 500);
          setTimeout(() => {
            slides.classList.add('animated');
          }, 600);
        }
      }

      // 오토
      let timer = undefined;
      function autoSlide() { 
        if(timer == undefined){
          timer = setInterval(function () { 
            moveSlide(currentIdx + 1);
           },3000)
        }
       }
       autoSlide();
       function stopSlide() { 
        clearInterval(timer);
        timer = undefined;
      }
      slides.addEventListener('mouseenter',function () { 
        stopSlide();
      });
      slides.addEventListener('mouseleave',function () { 
        autoSlide();
      });

      

