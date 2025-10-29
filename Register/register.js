var form = document.getElementById("registerForm");
var error = document.getElementById("error");

form.addEventListener("submit", function(e){
    e.preventDefault(); 


    

   
    localStorage.setItem("userData", JSON.stringify(userData));
    localStorage.setItem("registered", "true");

    alert("Registration successful!");
    window.location.href = "login/login.html"; 
});

