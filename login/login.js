
let user  = document.getElementById("user-name")
let password  = document.getElementById("password")
localStorage.setItem("username","abdo")
localStorage.setItem("password","jjj")
let pp = document.querySelector("p")
function validation(e){
    console.log(user.value)
    console.log(password.value)
    if(localStorage.getItem("username")!==user.value){
        e.preventDefault();
        pp.textContent = "no such a username"
    }else if (localStorage.getItem("password") !=password.value){
        e.preventDefault();
        pp.textContent = "wrong password" 
    }else{
        e.preventDefault();
        pp.textContent = "hello world" 
    }

}


let warning = document.querySelector(".warning")

setTimeout(()=>{
    warning.textContent = "";
},5000)