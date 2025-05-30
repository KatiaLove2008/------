const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

function setTheme(theme) {
  if (theme === "dark") {
    body.classList.add("dark-theme");
    toggleBtn.textContent = "Світла тема";
  } else {
    body.classList.remove("dark-theme");
    toggleBtn.textContent = "Темна тема";
  }
  localStorage.setItem("theme", theme);
}

// При завантаженні сторінки
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);
});

toggleBtn.addEventListener("click", () => {
  if (body.classList.contains("dark-theme")) {
    setTheme("light");
  } else {
    setTheme("dark");
  }
});


