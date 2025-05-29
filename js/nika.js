const reviewsList = document.getElementById('reviews-list');
const reviewForm = document.getElementById('review-form');

const friendName = 'anya'; // Встав сюди динамічно ім'я подруги

function loadReviews() {
  const reviews = JSON.parse(localStorage.getItem(`reviews-${friendName}`)) || [];
  reviewsList.innerHTML = '';
  reviews.forEach(r => {
    const div = document.createElement('div');
    div.classList.add('review-item');
    div.innerHTML = `
      <strong>${r.name}</strong> — <em>${r.rating} ★</em>
      <p>${r.text}</p>
    `;
    reviewsList.appendChild(div);
  });
}

reviewForm.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('reviewer-name').value.trim();
  const rating = document.getElementById('review-rating').value;
  const text = document.getElementById('review-text').value.trim();

  if (!name || !text) return;

  const reviews = JSON.parse(localStorage.getItem(`reviews-${friendName}`)) || [];
  reviews.push({ name, rating, text });
  localStorage.setItem(`reviews-${friendName}`, JSON.stringify(reviews));

  reviewForm.reset();
  loadReviews();
});

// Завантажуємо відгуки при завантаженні сторінки
document.addEventListener('DOMContentLoaded', loadReviews);
