const themes = ['default', 'skyblue', 'violet', 'lightpink', 'green', 'red', 'white', 'yellow'];
let currentThemeIndex = 0;

function applyTheme(themeName) {
  document.body.setAttribute('data-theme', themeName);
  localStorage.setItem('selectedTheme', themeName);
}

function resetToDefault() {
  applyTheme('default');
  currentThemeIndex = 0;
}

// Always apply default on first load
resetToDefault();

// Change Theme button logic
document.getElementById('theme-toggle')?.addEventListener('click', () => {
  currentThemeIndex = (currentThemeIndex + 1) % themes.length;
  applyTheme(themes[currentThemeIndex]);
});

// Default Theme button logic
document.getElementById('default-theme')?.addEventListener('click', resetToDefault);

// Mobile fallback
document.getElementById('theme-toggle-mobile')?.addEventListener('click', () => {
  document.getElementById('theme-toggle')?.click();
});
