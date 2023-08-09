window.addEventListener("load", function () {
  // Lock scroll and hide the preloader
  const preloader = document.querySelector(".preloader");
  const content = document.getElementById("content");

  document.body.style.overflow = "hidden"; // Lock scroll

  preloader.style.animation = "fadeOut 0.5s ease forwards";

  preloader.addEventListener("animationend", function () {
    preloader.style.display = "none";
    content.classList.remove("hidden");
    document.body.style.overflow = "auto"; // Allow scroll
  });
});
