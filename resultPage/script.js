const mark  = localStorage.getItem("mark")






  const scoreEl = document.getElementById("score");

        
  // scoreEl.textContent = mark + "%";
  
  
  
  let count = 0;
  const interval = setInterval(() => {
    if (count >= mark) clearInterval(interval);
    else {
      count++;
      scoreEl.textContent = count + "%";
      scoreEl.style.setProperty('--s', count);
    }
  }, 60);