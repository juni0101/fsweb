const prev_btn = document.querySelector(".btn_l");
const next_btn = document.querySelector(".btn_r");

const item_li = document.querySelector(".item_list");

let index = 0;

prev_btn.addEventListener("click", () => {
  if (index === 0) {
    index = 2;
  } else {
    index -= 1;
  }
  // console.log(index);
  btnHide();
  indicator();
  item_li.style.transform = `translateX(-${1320 * index}px)`;
});

next_btn.addEventListener("click", () => {
  if (index === 2) {
    index = 0;
  } else {
    index += 1;
  }
  btnHide();
  indicator();
  item_li.style.transform = `translateX(-${1320 * index}px)`;
  // console.log(index);
});

function btnHide(){
  if(index === 0){
    prev_btn.style.display = "none";
    next_btn.style.display = "block";
  }else if(index === 2){
    next_btn.style.display ="none";
    prev_btn.style.display = "block";
  }else{
    prev_btn.style.display = "block";
    next_btn.style.display = "block";
  }
}







// 인디케이터
function indicator(){

  const ind = document.querySelectorAll(".ind");
  for(let m = 0; m < ind.length; m++){
    ind[m].addEventListener("click", () =>{
      // indBar.style.transform = `translateX(${78 * m} + 78px)`;
      for(let n = 0; n < ind.length; n++){
        ind[n].style.background = "#777";
      }
      ind[index].style.background = "black";
    })
  }
}

// console.log(ind);

btnHide();