function makePost(e) {
    e.preventDefault();
    const formData = new FormData(document.getElementById('form'));
    const xhrPost = new XMLHttpRequest();
    xhrPost.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhrPost.setRequestHeader('Content-type', 'multipart/form-data');
    xhrPost.upload.onprogress = function (e) {
        document.getElementById('progress').value = e.loaded / e.total;
    }
    xhrPost.send(formData);
}

document.getElementById('form').addEventListener('submit', makePost);