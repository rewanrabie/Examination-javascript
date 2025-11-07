var form = document.getElementById("registerForm");
var error = document.getElementById("error");

form.addEventListener("submit", function(e){
    e.preventDefault(); 

    var firstName = document.getElementById("firstName").value.trim();
    var lastName = document.getElementById("lastName").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value;
    var rePassword = document.getElementById("rePassword").value;


    var nameregex = new RegExp("^[a-z0-9_-]{3,15}$")    ;
    if(!nameregex.test(firstName)){
        error.textContent = "Invalid ";
        return;
    }

 
    var emailregex = new RegExp( "[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+");
    if(!emailregex.test(email)){
        error.textContent = "Invalid email";
        return;
    }

  
    if(password.length < 8){
        error.textContent = "Password must be at least 8 characters";
        return;
    }

    if(password !== rePassword){
        error.textContent = "Passwords don't match";
        return;
    }

    var userData = {
        username: firstName, 
        password: password
};



   
    localStorage.setItem("userData", JSON.stringify(userData));
    localStorage.setItem("registered", "true");

    // alert("Registration successful!");
    window.location.href = "../examPage/index.html";
});