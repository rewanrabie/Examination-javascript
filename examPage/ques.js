let btnNext  = document.getElementById("next")
let btnpre  = document.getElementById("pre")
let checkedInput = document.querySelector("input[name='xx']:checked");
let checked = checkedInput ? checkedInput.value : 0;
let answered_ques = new Object()
localStorage.setItem("mark",0)
let question  = 1 ;


answered_ques[question] = checked;

// let question5 = {
//     ques : "What does HTML stand for?",
//     answers :["Hyper Trainer Marking Language","Hyper Text Markup Language","Hyper Text Marketing Language","Hyper Tool Multi Language"],
//     correct : 2
// }

// let question6 = {
//     ques : "Which tag is used to create a hyperlink in HTML?",
//     answers :["<link>", "<a>", "<href>", "<hyper>"],
//     correct : 2
// }

// let question7 = {
//     ques : "Which HTML element is used to define an internal style sheet?",
//     answers :["<style>", "<css>", "<script>", "<design>"],
//     correct : 1
// }

// let question8 = {
//     ques : "What does CSS stand for?",
//     answers :["Colorful Style Sheets","Creative Style System","Cascading Style Sheets","Computer Styling Syntax"],
//     correct : 3
// }

// let question9 = {
//     ques : "Which property is used to change the background color in CSS?",
//     answers :["bgcolor","color","background-color","background"],
//     correct : 3
// }

// let question10 = {
//     ques : "How can you make text bold in HTML?",
//     answers :["<bold>","<strong>","<bld>","<b>"],
//     correct : 4
// }

// let question11 = {
//     ques : "Which CSS property controls the text size?",
//     answers :["font-style","text-size","font-size","text-style"],
//     correct : 3
// }

// let question12 = {
//     ques : "Which HTML tag is used to display an image?",
//     answers :["<picture>","<img>","<image>","<src>"],
//     correct : 2
// }

// let question13 = {
//     ques : "How do you add a comment in CSS?",
//     answers :["// This is a comment","/* This is a comment */","<!-- This is a comment -->","# This is a comment"],
//     correct : 2
// }

// let question14 = {
//     ques : "Which attribute is used to specify the path of an image in HTML?",
//     answers :["link","src","path","href"],
//     correct : 2
// }

// let question15 = {
//     ques : "Which CSS property is used to center text?",
//     answers :["text-align","align","text-center","center"],
//     correct : 1
// }

// let question16 = {
//     ques : "What is the correct HTML tag for a line break?",
//     answers :["<lb>","<br>","<break>","<newline>"],
//     correct : 2
// }

// let question17 = {
//     ques : "Which property is used to change the font in CSS?",
//     answers :["font-family","font-name","text-font","font-weight"],
//     correct : 1
// }

// let question18 = {
//     ques : "Which HTML element is used for the largest heading?",
//     answers :["<head>","<h6>","<h1>","<heading>"],
//     correct : 3
// }

// let question19 = {
//     ques : "Which CSS property adds space inside an element’s border?",
//     answers :["margin","padding","spacing","border-gap"],
//     correct : 2
// }

// let ques = [
    
//     question5,question6,question7,question8,
//     question9,question10,question11,question12,
//     question13,question14,question15,question16,
//     question17,question18,question19
// ];
const questions = `
[
    {"ques": "What does HTML stand for?", "answers": ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Tool Multi Language", "Home Tool Markup Language"], "correct": 1},
    {"ques": "Which HTML element defines the largest heading?", "answers": ["<heading>", "<h6>", "<h1>", "<head>"], "correct": 3},
    {"ques": "What is the correct HTML tag for inserting a line break?", "answers": ["<break>", "<lb>", "<br>", "<newline>"], "correct": 3},
    {"ques": "Which tag is used to create a hyperlink?", "answers": ["<link>", "<a>", "<href>", "<hyper>"], "correct": 2},
    {"ques": "Which attribute specifies an image source?", "answers": ["src", "href", "alt", "path"], "correct": 1},
    {"ques": "Which tag is used for an unordered list?", "answers": ["<ul>", "<ol>", "<list>", "<li>"], "correct": 1},
    {"ques": "Which HTML tag is used to display an image?", "answers": ["<picture>", "<src>", "<image>", "<img>"], "correct": 4},
    {"ques": "What does the <title> tag define?", "answers": ["Document body", "Document title in browser tab", "Main heading", "Footer title"], "correct": 2},
    {"ques": "Which tag is used to create a numbered list?", "answers": ["<nl>", "<ol>", "<ul>", "<li>"], "correct": 2},
    {"ques": "Which HTML tag is used to add a table row?", "answers": ["<td>", "<table>", "<th>", "<tr>"], "correct": 4},

    {"ques": "What does CSS stand for?", "answers": ["Colorful Style Sheets", "Creative Style System", "Cascading Style Sheets", "Computer Styling Syntax"], "correct": 3},
    {"ques": "Which CSS property changes text color?", "answers": ["color", "font-color", "text-color", "foreground"], "correct": 1},
    {"ques": "Which property sets the background color?", "answers": ["bgcolor", "background", "background-color", "color"], "correct": 3},
    {"ques": "Which property controls text alignment?", "answers": ["align-text", "text-align", "font-align", "align"], "correct": 2},
    {"ques": "Which property adds space inside an element?", "answers": ["margin", "padding", "spacing", "border-gap"], "correct": 2},
    {"ques": "Which property adds space outside an element?", "answers": ["padding", "margin", "border", "spacing"], "correct": 2},
    {"ques": "Which property changes the font of text?", "answers": ["font-family", "font-name", "font-weight", "font-style"], "correct": 1},
    {"ques": "Which property makes text bold?", "answers": ["font-style", "font-weight", "font-bold", "text-bold"], "correct": 2},
    {"ques": "Which CSS property makes the text italic?", "answers": ["font-weight", "font-style", "font-family", "text-decoration"], "correct": 2},
    {"ques": "Which CSS property controls the size of text?", "answers": ["text-size", "font-style", "font-size", "font-height"], "correct": 3},

    {"ques": "What does JS stand for?", "answers": ["JavaSource", "JavaStyle", "JavaScript", "JustScript"], "correct": 3},
    {"ques": "Which company developed JavaScript?", "answers": ["Microsoft", "Netscape", "Google", "Mozilla"], "correct": 2},
    {"ques": "Which symbol is used for comments in JavaScript?", "answers": ["//", "/* */", "<!-- -->", "#"], "correct": 1},
    {"ques": "Which method displays a message box?", "answers": ["prompt()", "confirm()", "alert()", "show()"], "correct": 3},
    {"ques": "How do you declare a variable in JavaScript?", "answers": ["variable name;", "var name;", "v name;", "set name;"], "correct": 2},
    {"ques": "Which keyword declares a constant?", "answers": ["let", "const", "var", "constant"], "correct": 2},
    {"ques": "Which operator is used for strict equality?", "answers": ["===", "==", "=", "!="], "correct": 1},
    {"ques": "Which method converts a string to lowercase?", "answers": ["toLowerCase()", "toLower()", "changeLower()", "lowerCase()"], "correct": 1},
    {"ques": "What will 'typeof []' return?", "answers": ["object", "array", "list", "undefined"], "correct": 1},
    {"ques": "Which symbol is used to access object properties?", "answers": [".", ":", "#", "@@"], "correct": 1}
]
`;


const ques = JSON.parse(questions);




ques.sort(()=> (Math.random()-.5));


let quesEl = document.querySelector(".question h1")


function showQuest(question){
    if(Number(answered_ques[question])){
        let ans =document.querySelector(`input[name="xx"][value="${answered_ques[question]}"]`);
        if (ans) ans.checked = true;
    }else{
        let nu =document.querySelector(`input[name="xx"][value="0"]`)
        if (nu) nu.checked = true;
    }
    
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

showQuest(question)


function next(){

    if(question==1){
       btnpre.style.display="inline" 
       question ++;
    showQuest(question)  
    }else if(question==ques.length){
     btnNext.style.display="none";
    return;
}

    else{
        question ++;
        showQuest(question)    
    }

    

    
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
         let bu =document.getElementById(`question-${question}`)
         bu.hidden=false;
    }else{
        marked_ques.add(question)
        document.querySelector(".marked").innerHTML+=(`<div id="question-${question}"><button class="question-marked"  onclick="change(${question})">Question ${question}</button></div>`)
    }

}

let button_marked = document.getElementById(`question-${question}`)
function change(q){
    showQuest(q);
    question =q;
    let bu =document.getElementById(`question-${q}`)
    bu.remove()
    marked_ques.delete(q)

}
let correct_answers = new Set();

function choose(answer){
    
    // console.log(answer)
    answered_ques[question] = answer;
    if(!correct_answers.has(question)){
        
        if((ques[question-1].correct)==answer){
            
            correct_answers.add(question)
        }
    }else{
        if((ques[question-1].correct)!=answer){
            
            correct_answers.delete(question)
        }
    }
    let result = (correct_answers.size/ques.length)*100;
    
    localStorage.setItem("mark",result);
}

function submit(){
    window.location.href="../resultPage/index.html"
}







