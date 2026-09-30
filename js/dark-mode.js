const themeToggles = [document.getElementById('theme-toggle'), document.getElementById('theme-toggle-mobile')];
const sunIcons = [document.getElementById('sun-icon'), document.getElementById('sun-icon-mobile')];
const moonIcons = [document.getElementById('moon-icon'), document.getElementById('moon-icon-mobile')];
const theme = window.ASLI_THEME;
const THEME_BOUNDARY_HOURS = [5, 18];
const THEME_CHECK_BUFFER_MS = 60000;

function updateThemeIcons() {
  const isDark = document.documentElement.classList.contains('dark');
  sunIcons.forEach(el => el?.classList.toggle('hidden', !isDark));
  moonIcons.forEach(el => el?.classList.toggle('hidden', isDark));
}

function msUntilNextThemeBoundary() {
  const now = new Date();
  let soonest = Infinity;
  THEME_BOUNDARY_HOURS.forEach(hour => {
    [0, 1].forEach(dayOffset => {
      const boundary = new Date(now);
      boundary.setDate(now.getDate() + dayOffset);
      boundary.setHours(hour, 0, 0, 0);
      if (boundary > now && boundary - now < soonest) soonest = boundary - now;
    });
  });
  return soonest + THEME_CHECK_BUFFER_MS;
}

let themeTimer;

function scheduleThemeCheck() {
  clearTimeout(themeTimer);
  if (!theme?.isAuto()) return;
  themeTimer = setTimeout(() => {
    theme.apply();
    updateThemeIcons();
    scheduleThemeCheck();
  }, msUntilNextThemeBoundary());
}

function toggleTheme() {
  document.documentElement.classList.toggle('dark');
  localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  updateThemeIcons();
  scheduleThemeCheck();
}

themeToggles.forEach(btn => btn?.addEventListener('click', toggleTheme));
updateThemeIcons();
scheduleThemeCheck();

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState !== 'visible' || !theme?.isAuto()) return;
  theme.apply();
  updateThemeIcons();
  scheduleThemeCheck();
});

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuOpenIcon = document.getElementById('menu-open-icon');
const menuCloseIcon = document.getElementById('menu-close-icon');

menuToggle?.addEventListener('click', () => {
  mobileMenu?.classList.toggle('hidden');
  menuOpenIcon?.classList.toggle('hidden');
  menuCloseIcon?.classList.toggle('hidden');
});
