let question1 = {
    ques : "how are you doing?",
    answers :["good","bad","nice","Stright"] ,
    correct : 1
}
let question2 = {
    ques : "how many fingers are  in your both hands?",
    answers :["5","10","15","20"] ,
    correct : 1
}
let question3 = {
    ques : "Do dogs fly?",
    answers :["No","Yes","Maybe","IDK"] ,
    correct : 1
}

let ques = [question1,question2,question3];


let quesEl = document.querySelector(".question h1")


function showQuest(question){
quesEl.textContent = ques[question-1].ques;
for(let i = 1; i<=4;i++){
    let answer = document.querySelector(`.answers .answer-${i}`)
    answer.textContent = ques[question-1].answers[i-1]
}
}


let question  = 1 ;
showQuest(question)
function next(){
    if(question<ques.length){
        question ++;
        showQuest(question)
    }
}

function pre(){
    
    if(question>1){
        question --;
        showQuest(question)
    }

}

let btnNext 


if (question===1){

}


