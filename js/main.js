const menuBtn = document.querySelector(".menu-btn");
const menuCloseBtn = document.querySelector(".menu__close-btn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  menu.classList.remove("menu__close");
});

menuCloseBtn.addEventListener("click", () => {
  menu.classList.add("menu__close");
});
