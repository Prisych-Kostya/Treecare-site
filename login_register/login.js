const loginForm = document.getElementById('loginForm');
const signUpLink = document.getElementById('signUpLink');
const loginMessage = document.getElementById('loginMessage');
const site_name = document.getElementById('site-name');


loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const storedUser = localStorage.getItem(email);
  if (storedUser) {
    const user = JSON.parse(storedUser);
    if (user.password === password) {
      loginMessage.textContent = 'Login successful!';
      loginMessage.style.color = 'green';
      sessionStorage.setItem('currentUser', JSON.stringify(user));
      setTimeout(() => {
        window.location.href = '../index.html';
      }, 1000);
      loginForm.reset(); // Очищення форми входу
    } else {
      loginMessage.textContent = 'Incorrect password';
      loginMessage.style.color = 'red';
      hideMessageAfterTimeout(loginMessage, 3000);
    }
  } else {
    loginMessage.textContent = 'No user found with this email';
    loginMessage.style.color = 'red';
    hideMessageAfterTimeout(loginMessage, 3000);
  }
});


signUpLink.addEventListener('click', (event) => {
  event.preventDefault();
  window.location.href = 'registration.html';
});


site_name.addEventListener('click', (event) => {
  event.preventDefault();
  window.location.href = '../index.html';
});


function hideMessageAfterTimeout(element, timeout) {
  setTimeout(() => {
    element.textContent = '';
  }, timeout);
}


