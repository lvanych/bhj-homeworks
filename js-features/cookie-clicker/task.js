let clicker = document.getElementById("clicker__counter");
let cookie = document.getElementById("cookie");

cookie.onclick = function() {
    clicker.textContent++;
    
    if (clicker.textContent % 2) {
        cookie.width = 300;
    }
    else {
        cookie.width = 200;
    }
}
