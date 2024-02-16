let links = document.querySelectorAll(".has-tooltip");

for (let i = 0; i < links.length; i++) {
  let div = document.createElement("div");
  div.textContent = links[i].title;
  div.classList.add("tooltip");
  links[i].insertAdjacentElement("afterend", div);
}

let tooltips = document.querySelectorAll(".tooltip");

for (let n = 0; n < links.length; n++) {
  links[n].addEventListener("click", showHint);
}

function showHint(e) {
  e.preventDefault();
  let el = e.target;
  let tooltipActive = el.nextSibling;

  for (let tooltip of tooltips) {
    if (tooltip.classList.contains("tooltip_active")) {
      tooltip !== tooltipActive ? tooltip.classList.remove("tooltip_active") : null;
    }
  }
  tooltipActive.classList.toggle("tooltip_active");

  let linkRect = el.getBoundingClientRect();

  tooltipActive.style.top = `${linkRect.bottom}px`;
  tooltipActive.style.left = `${linkRect.left}px`;
}
