const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".navigation");
const layout = document.querySelector(".layout");

const bindNavToggle = () => {
  console.log("Bound navToggle()");
  nav.querySelectorAll("a").forEach((e) => {
    e.addEventListener("click", toggleNav);
  });
};

const toggleNav = () => {
  layout.classList.toggle("show-menu");
  nav.classList.toggle("show-menu");
};

if (window.innerWidth < 1024) {
  bindNavToggle();
}

window.onresize = () => {
  if (window.innerWidth < 1024) {
    bindNavToggle();
  }
};
