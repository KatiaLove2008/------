const allReviews = document.getElementById("all-reviews");

// Список імен подруг — використовуй ті, які є на сайті
const friends = ["anya", "bogdan", "margarita", "nika", "ira"];

function loadAllReviews() {
  friends.forEach((friend) => {
    const reviews = JSON.parse(localStorage.getItem(`reviews-${friend}`)) || [];
    if (reviews.length === 0) return;

    const section = document.createElement("section");
    section.innerHTML = `<h2>Відгуки про ${friend.charAt(0).toUpperCase() + friend.slice(1)}</h2>`;

    reviews.forEach((r) => {
      const div = document.createElement("div");
      div.className = "review-item";
      div.innerHTML = `
        <strong>${r.name}</strong> — <em>${r.rating} ★</em>
        <p>${r.text}</p>
      `;
      section.appendChild(div);
    });

    allReviews.appendChild(section);
  });
}

document.addEventListener("DOMContentLoaded", loadAllReviews);
