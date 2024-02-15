let links = document.querySelectorAll(".has-tooltip");

for (let i = 0; i < links.length; i++) {
  let div = document.createElement("div");
  div.textContent = links[i].title;
  div.classList.add("tooltip");
  links[i].insertAdjacentElement("afterBegin", div);
}

let tooltips = document.querySelectorAll(".tooltip");

for (let n = 0; n < links.length; n++) {
  links[n].addEventListener("click", showHint);
}

function showHint(e) {
  e.preventDefault();
  let el = e.target;
  let tooltipActive = el.querySelector(".tooltip");

  for (let tooltip of tooltips) {
    if (tooltip.classList.contains("tooltip_active")) {
      tooltip.classList.remove("tooltip_active");
    }
  }
  tooltipActive.classList.add("tooltip_active");

  let linkRect = el.getBoundingClientRect();

  tooltipActive.style.top = `${linkRect.bottom}px`;
  tooltipActive.style.left = `${linkRect.left}px`;
}
