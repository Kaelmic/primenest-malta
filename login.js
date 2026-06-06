const validEmail = "admin@primenest.com";
const validPassword = "PrimeNest2026";

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("loginError");

  if (email === validEmail && password === validPassword) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "./portal.html";
  } else {
    error.textContent = "Invalid email or password.";
  }
});