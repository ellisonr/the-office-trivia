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
document.getElementById("final-score").style.visibility="visible"
document.getElementById("score").innerHTML = "You got "+correctAnswers+" out of 10!"
alert(" ' 'You miss 100% of the shots you don't take.'\n            -Wayne Gretzky'\n                        -Michael Scott")
}
//----------------------------------------
//function for checking and keeping score
// function scoring(){

//     //if user pics the following answer for the following question, add to their correctAnswers score
//     answers = ["dwight","ryan","creed","andy","michael","erin","darryl","deangelo","toby","gabe"];
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