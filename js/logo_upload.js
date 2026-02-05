document.addEventListener("DOMContentLoaded", () => {
  const dropZone = document.getElementById("drop-zone");
  const fileInput = document.getElementById("fileInput");
  const selectBtn = document.getElementById("selectBtn");
  const fileInfo = document.getElementById("fileInfo");

  // If this page doesn't have the upload widget, do nothing.
  if (!dropZone || !fileInput || !selectBtn || !fileInfo) return;

  // click "Select files"
  selectBtn.addEventListener("click", (e) => {
    e.preventDefault();
    fileInput.click();
  });

  // show selected file name
  fileInput.addEventListener("change", () => {
    if (fileInput.files && fileInput.files.length > 0) {
      fileInfo.textContent = "Selected: " + fileInput.files[0].name;
    } else {
      fileInfo.textContent = "";
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

    // Note: assigning to fileInput.files is not reliable in all browsers.
    // Best practice is: just read the dropped files and show the name.
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      fileInfo.textContent = "Selected: " + files[0].name;
      // You can’t reliably set fileInput.files programmatically everywhere.
      // If you need the file to submit with the form, user must select via fileInput.
    }
  });
});
