if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  const canvas = document.createElement("canvas");
  canvas.className = "matrix-background";
  const ctx = canvas.getContext("2d");
  document.body.appendChild(canvas);

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const fontSize = 16;
  const columns = canvas.width / fontSize;
  const drops = Array(Math.floor(columns)).fill(1);

  // Function to get theme colors for the matrix
  const getThemeColors = () => {
    const isDark = document.documentElement.classList.contains("dark");
    return {
      background: isDark ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)",
      text: isDark ? "#6929c8" : "#4B0082",
    };
  };

  let { background, text } = getThemeColors();

  function draw() {
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = text;
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
      const number = Math.floor(Math.random() * 10);
      ctx.fillText(number, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  setInterval(draw, 50);

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  // Listen for theme changes and update matrix colors
  const themeToggle = document.getElementById("themeToggle");
  themeToggle.addEventListener("click", () => {
    ({ background, text } = getThemeColors());
  });
}
