let editor = document.getElementById('editor')

if (localStorage.text) {
    editor.value = localStorage.text
}

editor.addEventListener('change', () => {
    let text = editor.value.trim()
    localStorage.text = text
})