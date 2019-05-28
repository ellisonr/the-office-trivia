function scoring(){
    answers = ["dwight","ryan","creed","andy","michael","erin","darryl","deangelo","toby","gabe","jim","date","charles","holly","pam"];
    console.log(answers);
    var correctAnswers = 0
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
    
    var expertise = ["You're a diehard fan of The Office!","Maybe you should watch more episodes!","The Office... ever heard of it?"]
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
    
    document.getElementById("final-score").style.visibility="visible"
    document.getElementById("score").innerHTML = "You got "+correctAnswers+" out of 15!"
    document.getElementById("ranking").innerHTML = expertise[rank]
    alert(" ' 'You miss 100% of the shots you don't take.'\n            -Wayne Gretzky'\n                        -Michael Scott")
    }