const files = JSON.parse(localStorage.getItem('files')) || {};
let currentFile = null;
renderFileList();

function createFile() {
    const filename = document.getElementById('filename').value.trim();
    if (!filename) return alert('Enter a file name');
    if (files[filename]) return alert('File already exists');
    files[filename] = '';
    localStorage.setItem('files', JSON.stringify(files));
    renderFileList();
}

function deleteFile() {
    if (!currentFile) return alert('No file selected');
    delete files[currentFile];
    localStorage.setItem('files', JSON.stringify(files));
    document.getElementById('editor').value = '';
    currentFile = null;
    renderFileList();
}

function selectFile(filename) {
    currentFile = filename;
    document.getElementById('editor').value = files[filename];
}

function saveFile() {
    if (!currentFile) return;
    files[currentFile] = document.getElementById('editor').value;
    localStorage.setItem('files', JSON.stringify(files));
}

function renderFileList() {
    const fileList = document.getElementById('file-list');
    fileList.innerHTML = '';
    Object.keys(files).forEach(filename => {
        const btn = document.createElement('button');
        btn.textContent = filename;
        btn.onclick = () => selectFile(filename);
        fileList.appendChild(btn);
        fileList.appendChild(document.createElement('br'));
    });
}
