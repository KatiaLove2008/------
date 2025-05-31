document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.getElementById('burger-btn');
  const sideMenu = document.getElementById('side-menu');
  const closeBtn = document.getElementById('close-btn');

  burgerBtn.addEventListener('click', () => {
    sideMenu.classList.add('open');
  });

  closeBtn.addEventListener('click', () => {
    sideMenu.classList.remove('open');
  });

  // Клік поза меню — закриває
  document.addEventListener('click', (e) => {
    if (
      sideMenu.classList.contains('open') &&
      !sideMenu.contains(e.target) &&
      !burgerBtn.contains(e.target)
    ) {
      sideMenu.classList.remove('open');
    }
  });
});

