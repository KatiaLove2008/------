document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("quiz-form");
  const result = document.getElementById("result");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    const counts = { anya: 0, bogdana: 0, margo: 0, nika: 0, ira: 0 };

    for (let value of formData.values()) {
      if (counts[value] !== undefined) {
        counts[value]++;
      }
    }

    const bestMatch = Object.keys(counts).reduce((a, b) =>
      counts[a] > counts[b] ? a : b
    );

    const names = {
      anya: "Аня 💃 – весела і життєрадісна",
      bogdana: "Богдана 🧗 – пригодниця і смілива",
      margo: "Маргарита 🌸 – романтична і стильна",
      nika: "Ніка 🎨 – творча і спокійна",
      ira: "Іра 🤍 – чуйна і підтримуюча",
    };

    result.textContent = `Ти – ${names[bestMatch]}!`;
  });
});
