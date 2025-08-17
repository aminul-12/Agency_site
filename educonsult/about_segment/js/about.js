window.addEventListener("DOMContentLoaded", () => {
  const box = document.querySelector(".about-agency");
  box.style.opacity = 0;
  setTimeout(() => {
    box.style.transition = "opacity 1s ease";
    box.style.opacity = 1;
  }, 300);
});