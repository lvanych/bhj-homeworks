let modal = document.querySelector(".modal");
let modalClose = modal.querySelector(".modal__close");

const getCookie = (name) => {
  const value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
};

if (!getCookie("noModal")) {
  modal.classList.add("modal_active");
  modalClose.addEventListener("click", () => {
    modal.classList.remove("modal_active");
    document.cookie = "noModal = true";
  });
}
