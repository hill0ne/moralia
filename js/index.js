const sectionVideo = document.querySelector(".section-video");
const sectionContetns = document.querySelector(".section-contents");
// const slideList = document.querySelector(".list");
const btn = document.querySelector(".test");
const textWrap = document.querySelector(".text_wrap");
const title = document.querySelector(".title");
const footer = document.querySelector(".footer");

// 메인 페이지 이동
sectionVideo.addEventListener("wheel", pageMoveTopToDown);

function pageMoveTopToDown(e) {
  e.preventDefault();
  let wheelValue = e.deltaY;
  if (wheelValue > 0) {
    sectionVideo.classList.add("is-active");
    title.classList.add("is-active");
    textWrap.classList.add("is-active");
    footer.classList.add("is-active");
  }
}

// 스와이퍼 슬라이드 라이브러리
// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 3,
//   spaceBetween: 30,
//   slidesPerGroup: 3,
//   loop: true,
//   loopFillGroupWithBlank: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });
