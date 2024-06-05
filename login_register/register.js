const signUpForm = document.getElementById('signUpForm');
const registerMessage = document.getElementById('registrationMessage');
const site_name = document.getElementById('site-name');

document.getElementById('loginLink').addEventListener('click', (event) => {
  event.preventDefault();
  window.location.href = 'login.html';
});

signUpForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (password !== confirmPassword) {
    registerMessage.textContent = 'Passwords do not match';
    registerMessage.style.color = 'red';
    hideMessageAfterTimeout(registerMessage, 3000);
    return;
  }

  if (localStorage.getItem(email)) {
    registerMessage.textContent = 'User with this email already exists';
    registerMessage.style.color = 'red';
    hideMessageAfterTimeout(registerMessage, 3000);
  } 
  else {
    const user = { username, email, password };
    localStorage.setItem(email, JSON.stringify(user));
    sessionStorage.setItem('currentUser', JSON.stringify(user));
    
    registerMessage.textContent = 'Registration successful!';
    registerMessage.style.color = 'green';
    setTimeout(() => {
      window.location.href = '../index.html';
    }, 1000);
  }
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
