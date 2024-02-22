const saveId = load();
let form = document.getElementById("signin__form");

form.addEventListener("submit", sendData);

if (!saveId.userId) {
  drawSignInCard();
} else {
  drawWelcomeCard();
}

function sendData(e) {
  e.preventDefault();
  let data = new FormData(e.target);
  let xhrPost = new XMLHttpRequest();
  xhrPost.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
  xhrPost.responseType = "json";
  xhrPost.addEventListener("load", saveData);
  xhrPost.send(data);
}

function saveData(e) {
  const answer = e.target.response;
  form.reset();
  if (!answer["success"]) {
    alert("Неверный логин/пароль");
  } else {
    saveId.userId = answer["user_id"];
    save(saveId);
    drawWelcomeCard();
  }
}

function load() {
  return JSON.parse(localStorage.getItem("saveId") || "{}");
}

function save(saveId) {
  localStorage.setItem("saveId", JSON.stringify(saveId));
}

function drawWelcomeCard() {
  document.getElementById("signin").classList.remove("signin_active");
  document.getElementById("welcome").classList.add("welcome_active");
  document.getElementById("user_id").textContent = saveId.userId;
}

function drawSignInCard() {
  document.getElementById("signin").classList.add("signin_active");
  document.getElementById("welcome").classList.remove("welcome_active");
}
