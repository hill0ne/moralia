const sectionVideo = document.querySelector(".section-video");
const sectionContetns = document.querySelector(".section-contents");
const title = document.querySelector(".title");
const textWrap = document.querySelector(".text_wrap");
const footer = document.querySelector(".footer");

sectionVideo.addEventListener("wheel", moveTopToDown);
sectionContetns.addEventListener("wheel", moveDownToTop);

function moveTopToDown(e) {
  e.preventDefault();
  let wheelValue = e.deltaY;
  if (wheelValue > 0) {
    sectionVideo.classList.add("is-active");
    title.classList.add("is-active");
    textWrap.classList.add("is-active");
    footer.classList.add("is-active");
  }
}

function moveDownToTop(e) {
  e.preventDefault();
  let wheelValue = e.deltaY;
  if (wheelValue < 0) {
    sectionVideo.classList.remove("is-active");
    title.classList.remove("is-active");
    textWrap.classList.remove("is-active");
    footer.classList.remove("is-active");
  }
}
