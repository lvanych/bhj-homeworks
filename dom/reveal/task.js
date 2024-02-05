let reveal = document.querySelectorAll(".reveal");

document.addEventListener("scroll", () => scroll());

function scroll() {
  for (let i = 0; i < reveal.length; i++) {
    let { top, bottom } = reveal[i].getBoundingClientRect();
    if (top > 0 && bottom < window.innerHeight) {
      reveal[i].classList.add("reveal_active");
    }
  }
}
