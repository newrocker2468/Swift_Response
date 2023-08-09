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
