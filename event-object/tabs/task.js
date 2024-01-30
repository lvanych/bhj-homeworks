let tabs = document.querySelectorAll(".tab");
let tabContent = document.querySelectorAll(".tab__content");


function switchTab(index) {
    let tabElement = tabs[index];
    let tabContentElement = tabContent[index];

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('tab_active');
        tabContent[i].classList.remove('tab__content_active');
    }
    tabElement.classList.add('tab_active');
    tabContentElement.classList.add('tab__content_active')
}






for (let i = 0; i < tabs.length; i++) {
    let el = tabs[i];
    el.addEventListener("click", () => switchTab(i))
}