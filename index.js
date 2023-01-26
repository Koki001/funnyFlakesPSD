const body = document.querySelector("body");
const navLinks = document.querySelector(".navLinks");
const menuIcon = document.querySelector(".menuDiv");
const topScroll = document.querySelector(".backToTop");

const removeClass = function () {
  navLinks.classList.remove("menuOpened");
};
const scrollToTop = function () {
  if (window.scrollY > 600) {
    topScroll.classList.add("topVisible");
  } else {
    topScroll.classList.remove("topVisible");
  }
};
window.addEventListener("scroll", scrollToTop);
menuIcon.addEventListener("click", function () {
  navLinks.classList.toggle("menuOpened");
  if (navLinks.classList.contains("menuOpened")) {
    setTimeout(function () {
      body.addEventListener("click", removeClass);
    }, 500);
    body.removeEventListener("click", removeClass);
  }
});
topScroll.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
