// Set year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Dark/Light toggle (saved in localStorage)
const btn = document.getElementById("themeBtn");
const saved = localStorage.getItem("theme");

if (saved === "light") {
  document.body.classList.add("light");
  btn.textContent = "☀️";
} else {
  btn.textContent = "🌙";
}

btn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");
  localStorage.setItem("theme", isLight ? "light" : "dark");
  btn.textContent = isLight ? "☀️" : "🌙";
});
