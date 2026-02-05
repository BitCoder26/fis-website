const dropZone = document.getElementById("drop-zone");
const fileInput = document.getElementById("fileInput");
const selectBtn = document.getElementById("selectBtn");
const fileInfo = document.getElementById("fileInfo");

// click "Select files"
selectBtn.addEventListener("click", () => {
    fileInput.click();
});

// show selected file name
fileInput.addEventListener("change", () => {
    if (fileInput.files.length > 0) {
        fileInfo.textContent = "Selected: " + fileInput.files[0].name;
    }
});

// drag over styling
dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZone.classList.add("drag-over");
});

// remove styling
dropZone.addEventListener("dragleave", () => {
    dropZone.classList.remove("drag-over");
});

// drop file
dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropZone.classList.remove("drag-over");

    fileInput.files = e.dataTransfer.files;

    if (fileInput.files.length > 0) {
        fileInfo.textContent = "Selected: " + fileInput.files[0].name;
    }
});