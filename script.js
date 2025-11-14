// Header component
class THeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <nav>
          <a href="index.html">Home</a>
          <a href="app.html">App</a>
          <a href="color.html">Color</a>
          <a href="draw.html">Draw</a>
          <a href="draw2.html">Draw 2</a>
          <a href="forum.html">Forum</a>
          <a href="video.html">Video</a>
          <a href="simple-programs.html">Simple Programs</a>
          <a href="https://github.com/MetalFingerDev/IWP" class="btn" target="_blank">GitHub</a>
        </nav>
      </header>
    `;
  }
}

// Register the component
customElements.define("t-header", THeader);

// Color tool functionality
if (document.getElementById('x')) {
  const input = document.getElementById('x');
  const preview = document.getElementById('pv');
  const controls = document.getElementById('c');
  const styleBtn = document.getElementById('b1');
  const colorBtn = document.getElementById('b2');
  const fontBtn = document.getElementById('b3');

  let currentStyle = 'normal';
  let currentColor = '#eee';
  let currentFont = 'Arial';

  input.addEventListener('input', function () {
    const text = this.value.trim();
    if (text) {
      preview.textContent = text;
      preview.style.fontWeight = currentStyle;
      preview.style.color = currentColor;
      preview.style.fontFamily = currentFont;
      controls.classList.remove('hidden');
    } else {
      preview.textContent = 'Nothing to preview — start typing above.';
      controls.classList.add('hidden');
    }
  });

  styleBtn.addEventListener('click', function () {
    currentStyle = currentStyle === 'normal' ? 'bold' : 'normal';
    this.textContent = `Style: ${currentStyle}`;
    preview.style.fontWeight = currentStyle;
  });

  colorBtn.addEventListener('click', function () {
    const colors = ['#eee', '#e94560', '#0f3460', '#1a1a2e'];
    const currentIndex = colors.indexOf(currentColor);
    currentColor = colors[(currentIndex + 1) % colors.length];
    this.textContent = `Color: ${currentColor}`;
    preview.style.color = currentColor;
  });

  fontBtn.addEventListener('click', function () {
    const fonts = ['Arial', 'Times New Roman', 'Courier New', 'Georgia'];
    const currentIndex = fonts.indexOf(currentFont);
    currentFont = fonts[(currentIndex + 1) % fonts.length];
    this.textContent = `Font: ${currentFont}`;
    preview.style.fontFamily = currentFont;
  });
}

// Forum functionality
function displayLatestData() {
  const form = document.getElementById('registrationForm');
  const display = document.getElementById('display-data');

  if (form && display) {
    const formData = new FormData(form);
    let output = '';

    for (let [key, value] of formData.entries()) {
      if (value) {
        output += `${key}: ${value} | `;
      }
    }

    display.textContent = output || 'No data submitted yet.';
  }
}

// Canvas drawing functionality
if (document.getElementById('canvas')) {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#e94560';
  ctx.fillRect(10, 10, 50, 50);

  ctx.strokeStyle = '#0f3460';
  ctx.lineWidth = 3;
  ctx.strokeRect(80, 10, 50, 50);

  ctx.fillStyle = '#1a1a2e';
  ctx.beginPath();
  ctx.arc(175, 35, 25, 0, 2 * Math.PI);
  ctx.fill();
}

// Canvas drawings for draw2.html
if (document.getElementById('canvasVIT')) {
  // VIT Canvas
  const vitCanvas = document.getElementById('canvasVIT');
  const vitCtx = vitCanvas.getContext('2d');

  vitCtx.fillStyle = '#e94560';
  vitCtx.font = '24px Arial';
  vitCtx.fillText('VIT University', 50, 50);

  vitCtx.strokeStyle = '#0f3460';
  vitCtx.lineWidth = 2;
  vitCtx.strokeRect(10, 70, 280, 40);

  // Car Canvas
  const carCanvas = document.getElementById('canvasCar');
  const carCtx = carCanvas.getContext('2d');

  carCtx.fillStyle = '#e94560';
  carCtx.fillRect(50, 80, 120, 40);

  carCtx.fillStyle = '#0f3460';
  carCtx.beginPath();
  carCtx.arc(70, 120, 15, 0, 2 * Math.PI);
  carCtx.fill();

  carCtx.beginPath();
  carCtx.arc(150, 120, 15, 0, 2 * Math.PI);
  carCtx.fill();

  // Flag Canvas
  const flagCanvas = document.getElementById('canvasFlag');
  const flagCtx = flagCanvas.getContext('2d');

  flagCtx.fillStyle = '#e94560';
  flagCtx.fillRect(20, 20, 260, 20);

  flagCtx.fillStyle = '#0f3460';
  flagCtx.fillRect(20, 40, 260, 20);

  flagCtx.fillStyle = '#1a1a2e';
  flagCtx.fillRect(20, 60, 260, 20);
}
