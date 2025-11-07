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
  }, 30);

let gradEl = document.querySelector(".result-details h2")



if(mark<50){
  gradEl.textContent = "You failed ,Try Again don't give Up";
  gradEl.style.color="#274eb2ff";
}
else if(mark>50&&mark<65){
gradEl.textContent = "Not bad! but need to improve yourself";
gradEl.style.color = "#274eb2ff"
}else if(mark>65&&mark<75){
  gradEl.textContent = "Keep Going , You Can do it";
}else if(mark>75&&mark<85){
  gradEl.textContent = "Keep it Up !";
  
}else{
  gradEl.textContent = "Excellent Work !!";
  gradEl.style.color = "#274eb2ff"
}
