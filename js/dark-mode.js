const themeToggles = [document.getElementById('theme-toggle'), document.getElementById('theme-toggle-mobile')];
const sunIcons = [document.getElementById('sun-icon'), document.getElementById('sun-icon-mobile')];
const moonIcons = [document.getElementById('moon-icon'), document.getElementById('moon-icon-mobile')];

function updateThemeIcons() {
  const isDark = document.documentElement.classList.contains('dark');
  sunIcons.forEach(el => el?.classList.toggle('hidden', !isDark));
  moonIcons.forEach(el => el?.classList.toggle('hidden', isDark));
}

function toggleTheme() {
  document.documentElement.classList.toggle('dark');
  localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  updateThemeIcons();
}

themeToggles.forEach(btn => btn?.addEventListener('click', toggleTheme));
updateThemeIcons();

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuOpenIcon = document.getElementById('menu-open-icon');
const menuCloseIcon = document.getElementById('menu-close-icon');

menuToggle?.addEventListener('click', () => {
  mobileMenu?.classList.toggle('hidden');
  menuOpenIcon?.classList.toggle('hidden');
  menuCloseIcon?.classList.toggle('hidden');
});