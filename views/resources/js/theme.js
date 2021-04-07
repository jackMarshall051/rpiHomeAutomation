const LOCAL_STORAGE_KEY = "toggle-bootstrap-theme";
const LOCAL_META_DATA = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
// you can change this url as needed
const darkThemePath = "https://bootswatch.com/4/cyborg/bootstrap.min.css";
const darkStyleLink = document.getElementById("dark-theme-style");
let isDark = LOCAL_META_DATA && LOCAL_META_DATA.isDark;
// check if user has already selected dark theme earlier
if (isDark) {
  enableDarkTheme();
} else {
  disableDarkTheme();
}

function toggleTheme() {
  isDark = !isDark;
  if (isDark) {
    enableDarkTheme();
  } else {
    disableDarkTheme();
  }
  const META = { isDark };
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(META));
}
function enableDarkTheme() {
  darkStyleLink.setAttribute("href", darkThemePath);
  $("#theme-toggler").text("🌙 Dark");
}
function disableDarkTheme() {
  darkStyleLink.setAttribute("href", "");
  $("#theme-toggler").text("🌞 Light");
}
$(document).ready(function(){
    enableDarkTheme();
})