document.addEventListener('DOMContentLoaded', () => {
    const userGreeting = document.getElementById('userGreeting');
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
  
    if (currentUser) {
      userGreeting.textContent = `Welcome, ${currentUser.username}!`;
    }
  });
  
const site_name = document.getElementById('site-name');
  
site_name.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = '../../../index.html';
});
  
// Знаходимо всі елементи галереї
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