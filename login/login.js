
let user  = document.getElementById("user-name")
let password  = document.getElementById("password")
let c = JSON.parse(localStorage.getItem("userData"))

// localStorage.setItem("username","abdo")
// localStorage.setItem("password","jjj")
let pp = document.querySelector("p")
function validation(e){
    console.log(user.value)
    console.log(password.value)
    if(c.username!==user.value){
        e.preventDefault();
        pp.textContent = "no such a username"
    }else if (c.password!=password.value){
        e.preventDefault();
        pp.textContent = "wrong password" 
    }

}


let warning = document.querySelector(".warning")

setTimeout(()=>{
    warning.textContent = "";
},5000)