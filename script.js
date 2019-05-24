// function for checking and keeping score
function scoring(){

    //if user picks the following answer for the corresponding question, add to their correctAnswers score
    answers = ["dwight","ryan","creed","andy","michael","erin","darryl","deangelo","toby","gabe","jim","date","charles","holly","pam"];
    console.log(answers);
    var correctAnswers = 0 //moved outside of the for loop so that it doesn't get set to 0 each time it loops
    for(let i =0;i<answers.length; i++){
        var q = document.querySelector(`.character[name="q${i}"]:checked`)
        var qValue
        if (q) {
            qValue = q.value
        } else {
            qValue = ""
        }
        console.log(qValue)
        console.log(answers[i])
        if (qValue === answers[i]){
            correctAnswers ++;
        }
    }
    console.log(correctAnswers);
    
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