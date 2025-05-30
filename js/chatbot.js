const chatWindow = document.getElementById('chat-window');
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');

const botReplies = {
  "привіт": "Привіт! Як ся маєш? 😊",
  "як справи": "В мене все супер! Дякую, що питаєш 😉",
  "ти красива": "Ой, дякую! Ти теж красуня 😘",
  "хочу подругу": "Ти вже знайшов чудову подругу на сайті! 💖",
  "дякую": "Будь ласка! Звертайся ще 😊",
  "пока": "До зустрічі! 👋",
  "default": "Вибач, я не розумію, але хочу дружити! 😄"
};

function addMessage(text, className) {
  const msg = document.createElement('div');
  msg.textContent = text;
  msg.className = 'message ' + className;
  chatWindow.appendChild(msg);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("chat-form");
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const select = document.getElementById("friend-select");

  const responses = {
    anya: ["Привіт, я Аня 💕", "Як твій настрій сьогодні?", "Я люблю каву і смішні фільми ☕🎬"],
    bogdana: ["Привіт, я Богдана 😎", "Давай поговоримо про пригоди!", "Я готова на будь-який челендж!"],
    margarita: ["Привіт, я Маргарита 🌸", "Хочеш послухати музику зі мною?", "Обожнюю весну і квіти 🌼"],
    nika: ["Привіт, я Ніка 🎀", "Люблю малювати і мріяти ☁️", "Розкажи щось цікаве!"],
    ira: ["Привіт, я Іра 🤍", "Я можу вислухати тебе завжди", "Давай мріяти разом 🦋"]
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const userText = input.value.trim();
    const friend = select.value;

    if (userText === "") return;

    // Відображення повідомлення користувача
    chatBox.innerHTML += `<div class="user-msg">Ти: ${userText}</div>`;

    // Відповідь подруги
    const replyList = responses[friend];
    const botReply = replyList[Math.floor(Math.random() * replyList.length)];
    chatBox.innerHTML += `<div class="bot-msg">${botReply}</div>`;

    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
  });
});
