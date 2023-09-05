window.addEventListener("load", function () {
  const preloader = document.querySelector(".preloader");
  const content = document.getElementById("content");
  const logo = document.querySelector(".hid-logo");
  const nav_links = document.querySelector(".nav-links");
  const login = document.querySelector(".login");

  preloader.style.animation = "fadeOut 1s";
  logo.style.animation = "fadeIn-right 750ms,opacity 1200ms,delay 500ms";
  nav_links.style.animation = "fadeIn-down 750ms,opacity 1200ms,delay 500ms";
  login.style.animation = "fadeIn-left 750ms,opacity 1200ms,delay 500ms";


  
  preloader.addEventListener("animationend", function () {
    preloader.style.display = "none";

    content.classList.remove("hidden");

  });
});

/* const primarynav = document.querySelector("#primary-nav");
const navtoggle = document.querySelector(".btn-i");
const list = document.querySelector(".list");
const width = window.innerWidth;

navtoggle.addEventListener("click", () => {
  if (list.style.transform === "translateX(100%)") {
    primarynav.style.transition = "opacity 800ms, transform 600ms, delay 500ms";
    primarynav.style.opacity = 1;
    list.style.transform = "translateX(0)";
  } else {
    primarynav.style.transition = "opacity 800ms, transform 600ms, delay 500ms";
    primarynav.style.opacity = 1;

    list.style.transform = "translateX(100%)";
  }
}); */
const primarynav = document.querySelector("#primary-nav");
const navtoggle = document.querySelector(".btn-i");
const nav = document.querySelector("#primary-nav");
navtoggle.addEventListener("click", function () {
  if (nav.classList.contains("visible")) {
    nav.classList.remove("visible");
  } else {
    nav.classList.add("visible");
  }
});
