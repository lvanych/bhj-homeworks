let timer = document.getElementById("timer");
let interval = null;

let countdownTimer = function() {
    timer.textContent--;
    if (timer.textContent <= 0) {
        clearInterval(interval);
        alert("Вы победили в конкурсе!")
    }
}

interval = setInterval (countdownTimer, 1000);
