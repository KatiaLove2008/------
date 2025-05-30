const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");
const colorPicker = document.getElementById("colorPicker");
const brushSize = document.getElementById("brushSize");
const clearBtn = document.getElementById("clearBtn");
const saveBtn = document.getElementById("saveBtn");
const gallery = document.getElementById("gallery");

let painting = false;

function startPosition(e) {
  painting = true;
  draw(e);
}

function endPosition() {
  painting = false;
  ctx.beginPath();
}

function draw(e) {
  if (!painting) return;

  const rect = canvas.getBoundingClientRect();
  ctx.lineWidth = brushSize.value;
  ctx.lineCap = "round";
  ctx.strokeStyle = colorPicker.value;

  let x = e.clientX || (e.touches && e.touches[0].clientX);
  let y = e.clientY || (e.touches && e.touches[0].clientY);

  x -= rect.left;
  y -= rect.top;

  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x, y);
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function saveDrawing() {
  const dataURL = canvas.toDataURL();
  let drawings = JSON.parse(localStorage.getItem('drawings') || '[]');
  drawings.push(dataURL);
  localStorage.setItem('drawings', JSON.stringify(drawings));
  addImageToGallery(dataURL);
  clearCanvas();
  alert('Малюнок збережено!');
}

function addImageToGallery(src) {
  const img = document.createElement('img');
  img.src = src;
  gallery.appendChild(img);
}

function loadGallery() {
  let drawings = JSON.parse(localStorage.getItem('drawings') || '[]');
  drawings.forEach(src => addImageToGallery(src));
}

canvas.addEventListener("mousedown", startPosition);
canvas.addEventListener("mouseup", endPosition);
canvas.addEventListener("mousemove", draw);

canvas.addEventListener("touchstart", startPosition);
canvas.addEventListener("touchend", endPosition);
canvas.addEventListener("touchmove", draw);

clearBtn.addEventListener("click", clearCanvas);
saveBtn.addEventListener("click", saveDrawing);

loadGallery();
