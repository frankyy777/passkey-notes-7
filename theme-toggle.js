const themes = [
  {
    background: "linear-gradient(135deg, #0ff, #00f)",
    color: "#000",
    glow: "#0ff"
  },
  {
    background: "linear-gradient(135deg, #8e2de2, #4a00e0)",
    color: "#fff",
    glow: "#b174ff"
  },
  {
    background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
    color: "#000",
    glow: "#ffb6c1"
  },
  {
    background: "linear-gradient(135deg, #00ff88, #006644)",
    color: "#000",
    glow: "#00ff88"
  },
  {
    background: "linear-gradient(135deg, #ff4e50, #f9d423)",
    color: "#000",
    glow: "#ff6347"
  },
  {
    background: "linear-gradient(135deg, #ffffff, #dddddd)",
    color: "#000",
    glow: "#fff"
  },
  {
    background: "linear-gradient(135deg, #fefcea, #f1da36)",
    color: "#000",
    glow: "#f1da36"
  }
];

let currentTheme = 0;

document.getElementById("theme-toggle").addEventListener("click", () => {
  currentTheme = (currentTheme + 1) % themes.length;
  applyTheme(themes[currentTheme]);
});

function applyTheme(theme) {
  document.body.style.transition = "background 0.5s ease";
  document.body.style.background = theme.background;
  document.body.style.color = theme.color;
  const title = document.querySelector("h1");
if (theme.glow === "#0ff") {
  title.style.color = "#0ff"; // Sky blue for default theme
} else {
  title.style.color = theme.color;
}


  const buttons = document.querySelectorAll("button");
  buttons.forEach(btn => {
    btn.style.backgroundColor = theme.glow;
    btn.style.color = theme.color === "#000" ? "#000" : "#fff";
    btn.style.boxShadow = `0 0 10px ${theme.glow}`;
  });

  const links = document.querySelectorAll("a");
  links.forEach(link => {
    link.style.color = theme.color === "#000" ? "#000" : "#fff";
  });

  const inputs = document.querySelectorAll("input, textarea");
  inputs.forEach(el => {
    el.style.backgroundColor = "#fff";
    el.style.color = "#000";
  });
}
