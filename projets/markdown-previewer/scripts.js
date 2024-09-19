// script.js

document.addEventListener("DOMContentLoaded", function() {
    const editor = document.getElementById('editor');
    const preview = document.getElementById('preview');

    editor.addEventListener('input', function() {
        const markdownText = editor.value;
        preview.innerHTML = marked(markdownText);
    });
});
