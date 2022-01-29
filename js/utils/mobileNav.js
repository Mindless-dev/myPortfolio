export function mobileNav() {
  const hamburgerMenuBtn = document.querySelector(".hamburgerMenuBtn");
  const closeNavBtn = document.querySelector(".closeBtn");
  const nav = document.querySelector("nav");
  const body = document.querySelector("body");

  closeNavBtn.onclick = () => {
    nav.classList.toggle("hidden");
    body.style.overflow = "initial";
  };
  hamburgerMenuBtn.onclick = () => {
    nav.classList.toggle("hidden");
    body.style.overflow = "hidden";
  };
}
