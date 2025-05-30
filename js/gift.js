document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('send-gift-btn');
  const friendSelect = document.getElementById('friend-select');
  const giftSelect = document.getElementById('gift-select');
  const giftOutput = document.getElementById('gift-output');
  const giftHistory = document.getElementById('gift-history');

  const names = {
    anya: 'Ані',
    bogdana: 'Богдані',
    margarita: 'Маргариті',
    nika: 'Ніці',
    ira: 'Ірі'
  };

  const gifts = {
    flowers: 'гарний букет квітів 💐',
    chocolate: 'смачний шоколад 🍫',
    meme: 'веселий мем 😂'
  };

  let history = JSON.parse(localStorage.getItem('giftHistory')) || [];
  updateHistory();

  btn.addEventListener('click', () => {
    const friend = friendSelect.value;
    const gift = giftSelect.value;
    const msg = `Ти подарував ${names[friend]}: ${gifts[gift]}`;

    giftOutput.textContent = msg;
    giftOutput.classList.add('show');
    setTimeout(() => giftOutput.classList.remove('show'), 3000);

    const entry = {
      message: msg,
      date: new Date().toLocaleDateString()
    };
    history.push(entry);
    localStorage.setItem('giftHistory', JSON.stringify(history));
    updateHistory();
  });

  function updateHistory() {
    giftHistory.innerHTML = '';
    const latest = history.slice(-10).reverse();
    latest.forEach(entry => {
      const li = document.createElement('li');
      li.textContent = `${entry.date} — ${entry.message}`;
      giftHistory.appendChild(li);
    });
  }
});
