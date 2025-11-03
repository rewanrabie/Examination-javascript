let mark  = localStorage.getItem("mark")
let result = document.querySelector("#score")



result.textContent=mark+"%";

  const scoreElement = document.getElementById("score");
  const scoreValue = mark; 
        
  
  
  
  
  let count = 0;
  const interval = setInterval(() => {
    if (count >= scoreValue) clearInterval(interval);
    else {
      count++;
      scoreElement.textContent = count + "%";
      scoreElement.style.setProperty('--score', count);
    }
  }, 30);