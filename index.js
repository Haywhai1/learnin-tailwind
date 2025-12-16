const toggle = document.getElementById("theme-toggle");
const root = document.documentElement; // toggles on <html>

toggle.addEventListener("click", () => {
  const isDark = root.classList.toggle("dark");
  localStorage.theme = isDark ? "dark" : "light"; // optional: remember preference
});
