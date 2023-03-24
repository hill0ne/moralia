const section = document.querySelector(".section-contents");
const slideList = document.querySelector(".list");

// const slideAmout = 3;
// let status = false;
// let slideValue = 56;
// let transformValue = null;
// let count = 1;
// let wheelPosition = 0;

// 슬라이드
section.addEventListener("wheel", actionSlide);
function actionSlide() {
  slideList.style.transfrom = "translateX(-56rem)";
}
