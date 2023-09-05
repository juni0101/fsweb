const sec1_slide = document.querySelector("main");

index = 0;

function slide() {
  if (index === 2) {
    index = 0;
  } else {
    index += 1;
    sec1_slide.style.transform = `translateX(-${1600 * index}px)`;
  }
}

setTimeout(slide(), 1000);
