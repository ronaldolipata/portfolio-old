let nav = document.querySelector("header");

// Toggle menu
let toggleMenu = document.querySelector(".nav__toggle-menu");
let menu = document.querySelector(".nav__menu");

// Navigation
let navLink = document.getElementsByClassName("nav__link");

// Select body for removing the scroll bar when menu active
let body = document.querySelector("body");

// Add header shadow when scroll down
window.addEventListener("scroll", (e) => {
  const header = document.querySelector("header");
  const scrollY = this.scrollY;
  if (scrollY > 0) {
    header.classList.add("nav__shadow");
  } else {
    header.classList.remove("nav__shadow");
  }
});

// Toggle menu
toggleMenu.addEventListener("click", function () {
  menu.classList.toggle("active");
  toggleMenu.classList.toggle("active");
  // body.style.overflow = "hidden";
  body.classList.toggle("active");
});

// Navigation
for (i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", () => {
    menu.classList.remove("active");
    toggleMenu.classList.remove("active");
    body.classList.remove("active");
  });
}

// REMOVE LOCATION HASH
function removeLocationHash() {
  var noHashURL = window.location.href.replace(/#.*$/, "");
  window.history.replaceState("", document.title, noHashURL);
}
window.addEventListener("popstate", function (event) {
  removeLocationHash();
});
window.addEventListener("hashchange", function (event) {
  event.preventDefault();
  removeLocationHash();
});
window.addEventListener("load", function () {
  removeLocationHash();
});

// Slide animation (JQUERY)
$(window).scroll(function () {
  $(".section__slide-animation").each(function () {
    let pos = $(this).offset().top;

    let winTop = $(window).scrollTop();
    if (pos < winTop + 650) {
      $(this).addClass("slide");
    }
  });
});
