// anya.js

// Зберігає новий відгук для Ані у localStorage
function saveReview() {
  const name = document.getElementById("reviewer-name").value.trim();
  const rating = document.getElementById("review-rating").value;
  const text = document.getElementById("review-text").value.trim();

  if (!name || !rating || !text) {
    alert("Будь ласка, заповніть усі поля.");
    return;
  }

  const newReview = { name, rating, text };
  const storageKey = "reviews-anya";
  const existing = JSON.parse(localStorage.getItem(storageKey)) || [];

  existing.push(newReview);
  localStorage.setItem(storageKey, JSON.stringify(existing));

  document.getElementById("review-form").reset();
  displayReviews();
}

// Показує всі відгуки для Ані
function displayReviews() {
  const reviews = JSON.parse(localStorage.getItem("reviews-anya")) || [];
  const output = document.getElementById("review-output");
  output.innerHTML = "";

  if (reviews.length === 0) {
    output.innerHTML = "<p>Ще немає відгуків. Будь першим!</p>";
    return;
  }

  reviews.forEach(review => {
    const div = document.createElement("div");
    div.classList.add("review-item");
    div.innerHTML = `
      <strong>${review.name}</strong> — ⭐ ${review.rating}<br/>
      <em>${review.text}</em>
    `;
    output.appendChild(div);
  });
}

// Завантажує відгуки при завантаженні сторінки
document.addEventListener("DOMContentLoaded", displayReviews);

