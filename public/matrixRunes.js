if (typeof window !== "undefined" && typeof document !== "undefined") {
    const canvas = document.createElement("canvas");
    canvas.className = "matrix-background";
    const ctx = canvas.getContext("2d");
    document.body.appendChild(canvas);
  
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);
  
    // Elder Futhark Runes
    const runes = "ᚠᚢᚦᚨᚱᚲᚷᚹᚺᚾᛁᛃᛇᛈᛉᛋᛏᛒᛖᛗᛚᛜᛞᛟ".split("");
  
    // Function to get theme colors for the matrix
    const getThemeColors = () => {
      const isDark = document.documentElement.classList.contains("dark");
      return {
        background: isDark ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)",
        text: isDark ? "#6929c8" : "#4B0082", // Purple text for both modes
      };
    };
  
    let { background, text } = getThemeColors();
  
    function draw() {
      ctx.fillStyle = background;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
  
      ctx.font = `${fontSize}px monospace`;
  
      for (let i = 0; i < drops.length; i++) {
        const rune = runes[Math.floor(Math.random() * runes.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;
  
        // Purple glow effect
        ctx.shadowColor = text;
        ctx.shadowBlur = 10;
        ctx.fillStyle = text;
  
        // Draw the rune
        ctx.fillText(rune, x, y);
  
        // Add streaks (fade effect)
        ctx.fillStyle = background.replace("0.05", "0.2"); // Slightly stronger fade for streaks
        ctx.fillText(rune, x, y - fontSize);
  
        // Reset drop when it falls off the canvas
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
      drops.length = Math.floor(canvas.width / fontSize);
      drops.fill(1);
    });
  
    // Listen for theme changes and update matrix colors
    const themeToggle = document.getElementById("themeToggle");
    themeToggle.addEventListener("click", () => {
      ({ background, text } = getThemeColors());
    });
  }
  