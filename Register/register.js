var form = document.getElementById("registerForm");
var error = document.getElementById("error");

form.addEventListener("submit", function(e){
    e.preventDefault(); 

    // var firstName = document.getElementById("firstName").value.trim();
    // var lastName = document.getElementById("lastName").value.trim();
    // var email = document.getElementById("email").value.trim();
    // var password = document.getElementById("password").value;
    // var rePassword = document.getElementById("rePassword").value;

    // var nameregex = /^[A-Za-z]+$/;
    // if(!nameregex.test(firstName) || !nameregex.test(lastName)){
    //     error.textContent = "Name must contain letters";
    //     return;
    // }

 
    // var emailregex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    // if(!emailregex.test(email)){
    //     error.textContent = "Invalid email address";
    //     return;
    // }

  
    // if(password.length < 8){
    //     error.textContent = "Password must be at least 8 characters";
    //     return;
    // }

    // if(password !== rePassword){
    //     error.textContent = "Passwords don't match";
    //     return;
    // }

    // var userData = {
    //     username: firstName, 
    //     password: password
    // };

    localStorage.setItem("userData", JSON.stringify(userData));
    localStorage.setItem("registered", "true");

    alert("Registration successful!");
    window.location.href = "login/login.html"; 
});

