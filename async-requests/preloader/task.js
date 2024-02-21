let preloader = document.getElementById('loader');
let xhr = new XMLHttpRequest();
xhr.onload = processFinish;
xhr.open ("GET", " https://students.netoservices.ru/nestjs-backend/slow-get-courses");
xhr.send();

function processFinish () {
    preloader.classList.remove('loader_active');
    let dumpText = xhr.response;
    let dump = JSON.parse(dumpText)
    let valute = Object.entries(dump.response.Valute)
    let valuteList = document.getElementById('items');
    
    for (item of valute) {
        valuteList.insertAdjacentHTML('afterbegin', `
        <div class="item">
        <div class="item__code">
                ${item[1].CharCode}
            </div>
            <div class="item__value">
                ${item[1].Value}
            </div>
            <div class="item__currency">
                руб.
            </div>
      </div>
        `)
    }
}
