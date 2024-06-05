document.addEventListener('DOMContentLoaded', () => {
  const userGreeting = document.getElementById('userGreeting');
  const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
  const site_name = document.getElementById('site-name');

  if (currentUser) {
    userGreeting.textContent = `Welcome, ${currentUser.username}!`;
  }

  site_name.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = 'index.html';
  });
});

const galleryImages = document.querySelectorAll('.gallery img');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeButton = document.getElementsByClassName('close')[0];

galleryImages.forEach(image => {
  image.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = image.src;
  });
});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', event => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Обробник події для відкриття/закриття блоку "Прогноз погоди"
const weatherHeader = document.querySelector('.weather-header');
const weatherSection = document.querySelector('.weather-section');

weatherHeader.addEventListener('click', () => {
  weatherSection.classList.toggle('open');
});