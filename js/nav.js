/* Matthew Spooner. 8/6/2024. */
const hambTop = document.getElementById("hamburger-top");

const hambMid = document.getElementById("hamburger-middle");

const hambBot = document.getElementById("hamburger-bottom");

const hambToggle = document.getElementById("hamburger-button");

const navMenu = document.getElementById("nav-menu");

const navList = document.getElementById("nav-list");

function openMenu() {
  hambTop.setAttribute("d", "M10 10 L30 30");
  hambMid.setAttribute("d", "M20 20 L20 20");
  hambBot.setAttribute("d", "M10 30 L30 10");
  hambToggle.removeEventListener("click", openMenu);
  hambToggle.addEventListener("click", closeMenu);
  navMenu.classList.remove("nav-closed");
  navMenu.classList.add("nav-opened");
  navList.classList.remove("display-none");
}

function closeMenu() {
  hambTop.setAttribute("d", "M10 10 L30 10");
  hambMid.setAttribute("d", "M15 20 L25 20");
  hambBot.setAttribute("d", "M10 30 L30 30");
  hambToggle.removeEventListener("click", closeMenu);
  hambToggle.addEventListener("click", openMenu);
  navMenu.classList.remove("nav-opened");
  navMenu.classList.add("nav-closed");
  navList.classList.add("display-none");
}

hambToggle.addEventListener("click", openMenu);
