/* fullpage-layout*/

// try ~ catch -> 에러처리 
const docEle = document.documentElement;
const sec = document.querySelectorAll('.sec');
const wh = window.innerHeight;  /* 창의 높이 */

for(let i=0; i<sec.length; i++){
  sec[i].onwheel = (e) => {
   //기본이벤트방지
   // e.preventDefault();
     if(e.deltaY > 0){  //마우스휠내림 
      let next = e.currentTarget.nextElementSibling.offsetTop;
       docEle.scrollTop = next; 
       
      }else {  //마우스휠올림 
        //html의 스크롤값이 창의높이보다 작으면 wheel 이벤트 멈춤.
        if(docEle.scrollTop < wh ) return;

        /* try~catch -> 에러처리 구문 
          try{
            정상코드;
          } catch(err){
            에러일때 코드;
          } finally {
            무조건실행할코드; 
          }
        */

          // try {        let prev = e.currentTarget.previousElementSibling.offsetTop;
          //   offsetTop;
          //   docEle.scrollTop = prev; 
    

          // }catch(err) {
          //   alert('끝까지올라왔습니다')
          // }
        let prev = e.currentTarget.previousElementSibling.offsetTop;
        docEle.scrollTop = prev; 
      } 
   } 

}