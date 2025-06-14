let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById('cart-items');
  const totalElement = document.getElementById('total');

  cartList.innerHTML = '';
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ₴${item.price}`;
    cartList.appendChild(li);
  });

  totalElement.textContent = `Сума: ₴${total}`;
}

function addToCart(name, price) {
    const anim = document.getElementById('cart-animation');
anim.classList.add('active');
setTimeout(() => {
  anim.classList.remove('active');
}, 1000);
  const audio = new Audio('bell-notification-337658.mp3');
audio.play();
  const item = { name, price };
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(item);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${name} додано в кошик!`);
}

