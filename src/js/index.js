const header = document.querySelector(".header");
const title = document.querySelector(".title");
const video = document.querySelector(".section-video");
const contents = document.querySelector(".section-contents");
const slide = document.querySelector(".swiper-slide");
const page_title = document.querySelector(".page-title");
const btn = document.querySelector(".test");
const textWrap = document.querySelector(".text_wrap");
const footer = document.querySelector(".footer");

let status = false;

// 마우스 휠로 페이지 이동
video.addEventListener("wheel", pageMoveTopToDown);
header.addEventListener("wheel", pageMoveDownToTop);
footer.addEventListener("wheel", pageMoveDownToTop);

function pageMoveTopToDown(e) {
  e.preventDefault();
  let wheelValue = e.deltaY;
  if (wheelValue > 0) {
    video.classList.add("is-active");
    title.classList.add("is-active");
    textWrap.classList.add("is-active");
    footer.classList.add("is-active");
  }
}

function pageMoveDownToTop(e) {
  e.preventDefault();
  let wheelValue = e.deltaY;
  if (wheelValue < 0) {
    video.classList.remove("is-active");
    title.classList.remove("is-active");
    textWrap.classList.remove("is-active");
    footer.classList.remove("is-active");
  }
}

contents.addEventListener("wheel", (e) => {
  let y = e.deltaY;
  if (y > 0) {
    console.log();
  }
});

// swiper 라이브러리
var swiper = new Swiper(".slide", {
  width: 600,
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 350,
  mousewheel: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  speed: 1500,
});
