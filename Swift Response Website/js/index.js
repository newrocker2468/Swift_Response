window.addEventListener("load", function () {
  const preloader = document.querySelector(".preloader");
  const content = document.getElementById("content");

  // Display the preloader on initial page load and page reload
  preloader.style.animation = "fadeOut 0.5s ease forwards";

  // After animation completes, hide the preloader and show the content
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
    /*     primarynav.style.transition = "opacity 800ms, transform 600ms, delay 500ms"; */

    nav.classList.remove("visible");
  } else {
    nav.classList.add("visible");
    /*     primarynav.style.transition = "opacity 800ms, transform 600ms, delay 500ms"; */
  }
});
