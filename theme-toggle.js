const themes = [
  {
    name: "skyblue",
    background: "linear-gradient(135deg, #001f3f, #003366)",
    text: "#00cfff",
    accent: "#0074D9"
  },
  {
    name: "violet",
    background: "linear-gradient(135deg, #2e003e, #4b0082)",
    text: "#d580ff",
    accent: "#9900cc"
  },
  {
    name: "lightpink",
    background: "linear-gradient(135deg, #33001a, #ff66a3)",
    text: "#ffb6c1",
    accent: "#ff66a3"
  },
  {
    name: "green",
    background: "linear-gradient(135deg, #002b00, #004d00)",
    text: "#00ff99",
    accent: "#00cc66"
  },
  {
    name: "red",
    background: "linear-gradient(135deg, #330000, #660000)",
    text: "#ff4d4d",
    accent: "#ff1a1a"
  },
  {
    name: "white",
    background: "linear-gradient(135deg, #111111, #333333)",
    text: "#ffffff",
    accent: "#cccccc"
  },
  {
    name: "yellow",
    background: "linear-gradient(135deg, #332900, #4d3900)",
    text: "#ffff66",
    accent: "#ffcc00"
  }
];

let currentThemeIndex = 0;

function applyTheme(theme) {
  document.body.style.background = theme.background;
  document.body.style.color = theme.text;

  const header = document.querySelector("header");
  const footer = document.querySelector("footer");
  if (header) header.style.background = theme.accent;
  if (footer) footer.style.background = "#111";

  const buttons = document.querySelectorAll("button");
  buttons.forEach(btn => {
    btn.style.backgroundColor = theme.accent;
    btn.style.color = "#fff";
    btn.style.border = `1px solid ${theme.text}`;
  });

  const inputs = document.querySelectorAll("input, textarea");
  inputs.forEach(el => {
    el.style.backgroundColor = "#000";
    el.style.color = theme.text;
    el.style.border = `1px solid ${theme.accent}`;
  });

  const links = document.querySelectorAll("a");
  links.forEach(link => {
    link.style.color = theme.text;
  });
}

function cycleTheme() {
  currentThemeIndex = (currentThemeIndex + 1) % themes.length;
  applyTheme(themes[currentThemeIndex]);
}

document.addEventListener("DOMContentLoaded", () => {
  applyTheme(themes[0]);
  const toggleButton = document.getElementById("theme-toggle");
  if (toggleButton) {
    toggleButton.addEventListener("click", cycleTheme);
  }

  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }
});
