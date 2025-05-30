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

  let currentFriend = select.value;

  function loadChat(friend) {
    const saved = localStorage.getItem("chat_" + friend);
    if (saved) {
      chatBox.innerHTML = saved;
      chatBox.scrollTop = chatBox.scrollHeight;
    } else {
      chatBox.innerHTML = "";
    }
  }

  function saveChat(friend) {
    localStorage.setItem("chat_" + friend, chatBox.innerHTML);
  }

  select.addEventListener("change", () => {
    saveChat(currentFriend);
    currentFriend = select.value;
    loadChat(currentFriend);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const userText = input.value.trim();
    if (userText === "") return;

    chatBox.innerHTML += `<div class="user-msg">Ти: ${userText}</div>`;

    const replyList = responses[currentFriend];
    const botReply = replyList[Math.floor(Math.random() * replyList.length)];
    chatBox.innerHTML += `<div class="bot-msg">${botReply}</div>`;

    chatBox.scrollTop = chatBox.scrollHeight;
    input.value = "";
    saveChat(currentFriend);
  });

  loadChat(currentFriend);
});


