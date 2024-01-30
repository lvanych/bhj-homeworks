let list = document.querySelector(".dropdown__list");
let dropdownValue = document.querySelector(".dropdown__value");
let dropdownItems = document.querySelectorAll(".dropdown__item");
let arr = Array.from(dropdownItems)
debugger
dropdownValue.addEventListener("click", function(evt) {
    evt.preventDefault();
    list.classList.add("dropdown__list_active");
})

for (let i = 0; i < arr.length; i++) {
    arr[i].addEventListener("click", function(evt) {
        evt.preventDefault();
        list.classList.remove("dropdown__list_active");
        dropdownValue.textContent = arr[i].textContent;
    })
}
