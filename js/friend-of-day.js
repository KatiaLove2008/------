const featured = document.getElementById("friend-of-day");

const friends = [
  {
    name: "Аня",
    mood: "мила",
    price: 299,
    image: "img/аня мила.jpg",
  },
  {
    name: "Ніка",
    mood: "гарна",
    price: 319,
    image: "img/ніка гарна (1).jpg",
  },
  {
    name: "Іра",
    mood: "мила",
    price: 279,
    image: "img/і мила.jpg",
  },
  {
    name: "Маргарита",
    mood: "крута",
    price: 349,
    image: "img/м крута.jpg",
  },
  {
    name: "Богдана",
    mood: "закоханий",
    price: 289,
    image: "img/б закоханий.jpg",
  },
];

const random = friends[Math.floor(Math.random() * friends.length)];

featured.innerHTML = `
  <img src="${random.image}" alt="${random.name}" class="featured-img">
  <h3>${random.name}</h3>
  <p>Настрій: ${random.mood}</p>
  <p><strong>Ціна: ${random.price} грн</strong></p>
  <button onclick="addToCart('${random.name}', '${random.mood}', '${random.image}', ${random.price})" class="add-to-cart">
    Додати в кошик
  </button>
`;
