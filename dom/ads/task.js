let rotators = document.querySelectorAll('.rotator__case')
let index = 0;
function toggleRotator() {
    for (let i = 0; i < rotators.length; i++) {
        rotators[i].classList.remove('rotator__case_active')
    }
    rotators[index].classList.add('rotator__case_active');
    index++;
    if (index === rotators.length) {
        index = 0;
    }
}

setInterval(toggleRotator, 1000)