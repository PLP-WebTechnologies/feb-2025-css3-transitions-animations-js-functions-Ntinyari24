const toggleButton = document.getElementById('toggleTheme');
const themeIcon = document.getElementById('themeIcon');

// Function to set theme
function setTheme(theme) {
  document.body.className = theme;
  localStorage.setItem('preferredTheme', theme);
  themeIcon.src = theme === 'dark-theme' ? 'moon.png' : 'sun.png';
}

// Function to toggle theme and animate
function toggleTheme() {
  const currentTheme = document.body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';
  const newTheme = currentTheme === 'dark-theme' ? 'light-theme' : 'dark-theme';
  setTheme(newTheme);

  // Add spin animation
  themeIcon.classList.add('spin');
  setTimeout(() => themeIcon.classList.remove('spin'), 1000);
}

// Load stored preference
window.onload = () => {
  const savedTheme = localStorage.getItem('preferredTheme') || 'light-theme';
  setTheme(savedTheme);
};

// Add event listener
toggleButton.addEventListener('click', toggleTheme);
