export function flipFunctionality() {
  const projectCards = document.querySelectorAll(".projectContainer");
  projectCards.forEach((card) => card.addEventListener("click", flipCard));
}

function flipCard() {
  if (event.target.nodeName != "A" && window.innerWidth >= 870) {
    this.classList.toggle("flipped");
  }
}
