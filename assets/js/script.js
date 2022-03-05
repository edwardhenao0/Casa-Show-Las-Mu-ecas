const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector("#menu");
const activePage = location.href;
const navLinks = document.querySelectorAll("nav ul li a");
const navLength = navLinks.length;
for (let i = 0; i < navLength; i++) {
  if (navLinks[i].href === activePage) {
    navLinks[i].className = "active";
  }
}

console.log(activePage);

btnMenu.addEventListener("click", function () {
  menu.classList.toggle("show");
  console.log(menu);
});
