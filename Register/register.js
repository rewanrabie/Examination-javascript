// if (localStorage.getItem("registered") === "true") {
//   alert("You are already registered!");
//   window.location.href = "login.html";
// }

// var form = document.getElementById("registerForm");
// var error = document.getElementById("error");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   var firstName = document.getElementById("firstName").value.trim();
//   var lastName = document.getElementById("lastName").value.trim();
//   var email = document.getElementById("email").value.trim();
//   var password = document.getElementById("password").value;
//   var rePassword = document.getElementById("rePassword").value;

//   var namePattern = /^[A-Za-z]+$/;
//   if (!namePattern.test(firstName) || !namePattern.test(lastName)) {
//     error.textContent = "Names must contain only letters.";
//     return;
//   }

//   var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
//   if (!emailPattern.test(email)) {
//     error.textContent = "Invalid email address.";
//     return;
//   }

//   if (password.length < 8) {
//     error.textContent = "Password must be at least 8 characters.";
//     return;
//   }

//   if (password !== rePassword) {
//     error.textContent = "Passwords do not match.";
//     return;
//   }

//   var userData = {
//     firstName: firstName,
//     lastName: lastName,
//     email: email,
//     password: password
//   };

//   localStorage.setItem("userData", JSON.stringify(userData));
//   localStorage.setItem("registered", "true");

//   alert("Registration successful!");
//   window.location.href = "login.html";
// });

