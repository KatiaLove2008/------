function loadCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartContainer = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Твій кошик порожній 😢</p>";
    cartTotal.textContent = "0 грн";
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="cart-img" />
      <div>
        <h3>${item.name} (${item.mood})</h3>
        <p>${item.price} грн</p>
        <button onclick="removeItem(${index})" class="back-button">Видалити</button>
      </div>
    `;
    cartContainer.appendChild(div);
    total += item.price;
  });

  cartTotal.textContent = total + " грн";
}

function removeItem(index) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

function clearCart() {
  localStorage.removeItem("cart");
  loadCart();
}

function checkoutCart() {
  alert("Дякуємо за замовлення! 👑");
  clearCart();
}

function addToCart(name, mood, image, price) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, mood, image, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Додано в кошик! 🎉");
}

document.addEventListener("DOMContentLoaded", loadCart);
