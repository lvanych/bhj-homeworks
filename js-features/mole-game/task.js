let kill = document.getElementById("dead");
let lost = document.getElementById("lost");
getHole = index => document.getElementById(`hole${index}`)

for (let n = 1; n < 10; n++) {
    let element = getHole(n)
    element.onclick = () => onHoleClick(element)
}

function onHoleClick(holeElement) {

    if (holeElement.className.includes('hole_has-mole')) {
        kill.textContent++;
    } else {
        lost.textContent++;
    }
    setTimeout(stopGame, 1);
}

function stopGame() {
    if (lost.textContent == 5) {
        alert('Вы проиграли');
        kill.textContent = 0;
        lost.textContent = 0;
    }
    if (kill.textContent == 10) {
        alert('Вы подбедили');
        lost.textContent = 0;
        kill.textContent = 0;
    }
}

