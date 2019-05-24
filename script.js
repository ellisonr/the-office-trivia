//function for checking and keeping score
function scoring(){
    var q1 = document.questions.q1.value
    var q2 = document.questions.q2.value
    var q3 = document.questions.q3.value
    var q4 = document.questions.q4.value
    var q5 = document.questions.q5.value
    var q6 = document.questions.q6.value
    var q7 = document.questions.q7.value
    var q8 = document.questions.q8.value
    var q9 = document.questions.q9.value
    var q10 = document.questions.q10.value
    var q11 = document.questions.q11.value
    var q12 = document.questions.q12.value
    var q13 = document.questions.q13.value
    var q14 = document.questions.q14.value
    var q15 = document.questions.q15.value
    var correctAnswers = 0
//if user pics the following answer for the following question, add to their correctAnswers score
if (q1 === "dwight"){correctAnswers ++}
if (q2 === "ryan"){correctAnswers ++}
if (q3 === "creed"){correctAnswers ++}
if (q4 === "andy"){correctAnswers ++}
if (q5 === "michael"){correctAnswers ++}
if (q6 === "erin"){correctAnswers ++}
if (q7 === "darryl"){correctAnswers ++}
if (q8 === "deangelo"){correctAnswers ++}
if (q9 === "toby"){correctAnswers ++}
if (q10 === "gabe"){correctAnswers ++}
if (q11 === "jim"){correctAnswers ++}
if (q12 === "date"){correctAnswers ++}
if (q13 === "charles"){correctAnswers ++}
if (q14 === "holly"){correctAnswers ++}
if (q15 === "pam"){correctAnswers ++}
//the below sets out the rankings depending on how many questions are correct.
var expertise = ["You're a diehard fan of The Office!","Maybe you should watch more episodes!","Have you ever even watched the show?"]
var rank
if(correctAnswers <= 5){
    rank = 2
}
if(correctAnswers >= 6 && correctAnswers <= 11){
    rank = 1
}
if(correctAnswers >=12 && correctAnswers <= 15){
    rank = 0
}
//the below reveals total score and ranking once submit button is clicked
document.getElementById("final-score").style.visibility="visible"
document.getElementById("score").innerHTML = "You got "+correctAnswers+" out of 15!"
document.getElementById("ranking").innerHTML = expertise[rank]
alert(" ' 'You miss 100% of the shots you don't take.'\n            -Wayne Gretzky'\n                        -Michael Scott")
}
//----------------------------------------
//function for checking and keeping score
// function scoring(){

//     //if user pics the following answer for the following question, add to their correctAnswers score
//     answers = ["dwight","ryan","creed","andy","michael","erin","darryl","deangelo","toby","gabe","jim","date","charles","holly","pam"];
//     console.log(answers);
    
//     for(let i =0;i<answers.length; i++){
//         var q = document.questions.q+[i].value
//         var correctAnswers = 0
//         if (q+[i] === answers[i]){
//             correctAnswers ++;
//         }
//     }
//     console.log(correctAnswers);
//     // if (q1 === "dwight"){correctAnswers ++}
//     // if (q2 === "ryan"){correctAnswers ++}
//     // if (q3 === "creed"){correctAnswers ++}
//     // if (q4 === "andy"){correctAnswers ++}
//     // if (q5 === "michael"){correctAnswers ++}
//     // if (q6 === "erin"){correctAnswers ++}
//     // if (q7 === "darryl"){correctAnswers ++}
//     // if (q8 === "deangelo"){correctAnswers ++}
//     // if (q9 === "toby"){correctAnswers ++}
//     // if (q10 === "gabe"){correctAnswers ++}
    
//     document.getElementById("final-score").style.visibility="visible"
//     document.getElementById("score").innerHTML = "You got "+correctAnswers+" out of 10!"
//     alert(" ' 'You miss 100% of the shots you don't take.'\n            -Wayne Gretzky'\n                        -Michael Scott")
//     }