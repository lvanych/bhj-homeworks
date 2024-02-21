let xhr = new XMLHttpRequest();
xhr.onload = processFinish;
xhr.open ("GET", " https://students.netoservices.ru/nestjs-backend/poll");
xhr.send();

function processFinish () {
    let dumpText = xhr.response;
    let dump = JSON.parse(dumpText)
    let poolTitle = document.getElementById('poll__title');
    let poolAnswers = document.getElementById('poll__answers');
    
    poolTitle.textContent = dump.data.title;
    let answers = dump.data.answers;
    
    for (answer of answers) {
        poolAnswers.insertAdjacentHTML('beforeend', `
        <button class="poll__answer">
        ${answer}
      </button>
        `)
    }

    let buttons = document.querySelectorAll('.poll__answer')

    buttons.forEach((item) => {
        item.addEventListener('click', () => {
            alert('Спасибо, ваш голос засчитан!')
        })
    })
}


