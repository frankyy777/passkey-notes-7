const themes = [
  "theme-1", "theme-2", "theme-3", "theme-4", "theme-5",
  "theme-6", "theme-7", "theme-8", "theme-9", "theme-10"
];

let currentTheme = localStorage.getItem("theme") || "default";

function applyTheme(theme) {
  document.body.className = "";
  if (theme !== "default") document.body.classList.add(theme);
  localStorage.setItem("theme", theme);
}

document.getElementById("changeThemeBtn").onclick = () => {
  let index = themes.indexOf(currentTheme);
  index = (index + 1) % themes.length;
  currentTheme = themes[index];
  applyTheme(currentTheme);
};

document.getElementById("defaultThemeBtn").onclick = () => {
  currentTheme = "default";
  applyTheme(currentTheme);
};

applyTheme(currentTheme);

// Menu toggle
document.getElementById("menuBtn").onclick = () => {
  document.getElementById("menuDropdown").style.display =
    document.getElementById("menuDropdown").style.display === "block" ? "none" : "block";
};
