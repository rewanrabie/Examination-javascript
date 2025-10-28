
if (localStorage.getItem("registered") === "true") {
  alert("You are already registered!");
  window.location.href = "login.html";
}


const form = document.getElementById("registerForm");
const error = document.getElementById("error");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const rePassword = document.getElementById("rePassword").value;

 
  const namePattern = /^[A-Za-z]+$/;
  if (!namePattern.test(firstName) || !namePattern.test(lastName)) {
    error.textContent = "Names must contain only letters.";
    return;
  }


  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    error.textContent = "Invalid email address.";
    return;
  }

  if (password.length < 8) {
    error.textContent = "Password must be at least 8 characters.";
    return;
  }

  if (password !== rePassword) {
    error.textContent = "Passwords do not match.";
    return;
  }

 
  const userData = {
    firstName,
    lastName,
    email,
    password,
  };
  localStorage.setItem("userData", JSON.stringify(userData));
  localStorage.setItem("registered", "true");

  alert("Registration successful!");
  window.location.href = "login.html";
});
