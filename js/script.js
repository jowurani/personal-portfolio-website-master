// FORM SUBMIT
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message sent 🚀");
});

// DARK / LIGHT MODE TOGGLE
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  toggle.textContent = document.body.classList.contains("light")
    ? "☀️"
    : "🌙";
});

// IMAGE CLICK ZOOM
const images = document.querySelectorAll(".project-img");

images.forEach(img => {
  img.addEventListener("click", () => {
    img.classList.toggle("zoomed");
  });
});