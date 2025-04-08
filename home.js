// Tab switching
const loginTab = document.getElementById('loginTab');
const signupTab = document.getElementById('signupTab');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

loginTab.addEventListener('click', () => {
  loginForm.classList.add('active');
  signupForm.classList.remove('active');
  loginTab.classList.add('active');
  signupTab.classList.remove('active');
});

signupTab.addEventListener('click', () => {
  signupForm.classList.add('active');
  loginForm.classList.remove('active');
  signupTab.classList.add('active');
  loginTab.classList.remove('active');
});

// Login form logic
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  if (!user || !pass) {
    alert('Please fill in all fields!');
  } else {
    alert(`Welcome back, ${user}!`);
  }
});

// Sign up logic
document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const newUser = document.getElementById('newUsername').value;
  const newEmail = document.getElementById('newEmail').value;
  const newPass = document.getElementById('newPassword').value;

  if (!newUser || !newEmail || !newPass) {
    alert('Please complete the sign-up form!');
  } else {
    alert(`Account created for ${newUser}!`);
  }
});

// Password visibility toggle
document.getElementById('togglePassword').addEventListener('click', () => {
  const passInput = document.getElementById('password');
  const type = passInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passInput.setAttribute('type', type);
});

document.getElementById('togglePasswordSignup').addEventListener('click', () => {
  const passInput = document.getElementById('newPassword');
  const type = passInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passInput.setAttribute('type', type);
});
