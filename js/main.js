// Header
const navBar = document.querySelector("header");

document.addEventListener("scroll", () => {
  navBar.classList.toggle("sticky", window.scrollY > 200);
});
/***************************************************************/
// CopyRights
const copy = document.querySelector(".copy p span");

const date = new Date().getFullYear();

copy.innerHTML = date;
/***************************************************************/
// Medu And Links
const menu = document.querySelector("header .menu");
const links = document.querySelector("header .links");

menu.addEventListener("click", () => {
  links.classList.toggle("bing");
});
/***************************************************************/
