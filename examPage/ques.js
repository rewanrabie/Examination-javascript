let btnNext  = document.getElementById("next")
let btnpre  = document.getElementById("pre")
localStorage.setItem("mark",0)

let question1 = {
    ques : "how are you doing?",
    answers :["good","bad","nice","Stright"] ,
    correct : 1
}

let question2 = {
    ques : "how many fingers are  in your both hands?",
    answers :["5","10","15","20"] ,
    correct : 2
}
let question3 = {
    ques : "Do dogs fly?",
    answers :["No","Yes","Maybe","IDK"] ,
    correct : 3
}
let question4 = {
    ques : "where is Egypt?",
    answers :["No","Yes","Maybe","IDK"] ,
    correct : 4
}

let ques = [question1,question2,question3,question4];


let quesEl = document.querySelector(".question h1")


function showQuest(question){
    quesEl.textContent = question+"- "+ques[question-1].ques;
for(let i = 1; i<=4;i++){
    let answer = document.querySelector(`.answers .answer-${i} p`)
    answer.textContent = ques[question-1].answers[i-1]
}
    if(question==1){
        btnpre.style.display="none";
        btnNext.style.display="inline";

    }else if(question ==ques.length){
        btnNext.style.display="none"
        btnpre.style.display="inline";
    };



}


let question  = 1 ;
showQuest(question)

function next(){

    if(question==1){
       btnpre.style.display="inline" 
       question ++;
    showQuest(question)  
    }else if(question==ques.length){
        question++;
        showQuest(question)  
        btnNext.style.display="none";
    }
    else{
        question ++;
        showQuest(question)    
    }

    let a = document.querySelector(`input[name="xx"][value="0"]`);
    a.checked = true;

    
}

function pre(){
    
    if(question ==2){
        if (question==2){btnpre.style.display = "none"}
        question --;
        showQuest(question)
    }
    
    else if(question>1){
        question --;
        showQuest(question)
    }
    if(question ==ques.length-1){
        btnNext.style.display="inline";
    }
}



if (question==1){btnpre.style.display = "none"}

let marked_ques  = new Set();
function mark(){
    if(marked_ques.has(question)){

    }else{
        marked_ques.add(question)
        document.querySelector(".marked").innerHTML+=(`<div><button class="question-marked" id="question-${question}" onclick="change(${question})">Question ${question}</button></div>`)
    }

}

let button_marked = document.getElementById(`question-${question}`)
function change(q){
    showQuest(q);
    question =q;
}
let correct_answers = new Set();
let answered_ques = new Object()
function choose(answer){
    // let checked = document.querySelector("input[name='xx']:checked").value
    // console.log(answer)
    answered_ques[question] = answer;
    if(!correct_answers.has(question)){
        
        if((ques[question-1].correct)==answer){
            
            correct_answers.add(question)
        }
    }
    console.log(correct_answers.size) ; let result = (correct_answers.size/ques.length)*100;
    console.log(result)
    localStorage.setItem("mark",result);
}

function submit(){
    window.location.href="../resultPage/index.html"
}







