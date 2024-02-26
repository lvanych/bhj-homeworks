let editor = document.getElementById('editor')

editor.value = localStorage.getItem('text')

editor.addEventListener('input', () => {
    let text = editor.value.trim()
    localStorage.text = text
})