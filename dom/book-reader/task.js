let fontControl = document.querySelectorAll('.font-size')
let book = document.querySelector('.book')

for (let i = 0; i < fontControl.length; i++) {
    fontControl[i].addEventListener("click", e => toggleBook(e, i))
}

function toggleBook(e, index) {
    e.preventDefault();
    for (item of fontControl) {
        item.classList.remove('font-size_active')
    }
    fontControl[index].classList.add('font-size_active')
    if (fontControl[index].classList.contains('font-size_small')) {
        book.classList.add("book_fs-small")
        book.classList.remote("book_fs-big")
    }
    else if (fontControl[index].classList.contains('font-size_big')) {
        book.classList.add("book_fs-big")
        book.classList.remove("book_fs-small")
    }
    else {
        book.classList.remove("book_fs-big")
        book.classList.remove("book_fs-small")
    }
    
}