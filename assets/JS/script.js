// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

// define global variables
var score = 0;
var currentQuestion = 0;
var timer = document.querySelector("#timer");
var startTimer = document.querySelector("#start-button");
var startScreen = document.querySelector(".start-screen")
var questionContainer = document.querySelector("#questions");

var secondsLeft = 60;

var interval = 0;
var penalty = 10;

var choiceContainer = document.createElement("ol");

//  define questions so they can be displayed later
var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },

    {
        question: "The Condition in an if/else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parantheses"
    },

    {
        question: "Arrays in JavaScript can be used to store",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },

    {
        question: "String values must be enclosed within ____ when being assigned to variables",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
    },

    {
        question: "A very useful tool used during development and debugging for prinitng content to the debugger is:",
        choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
        answer: "console.log"
    },
]


// Event listener for a on click function to start the time and remove homescreen so questions can be displayed. Tells what to be displayed to user based on secondsLeft when game is over

startTimer.addEventListener("click", function () {
    startScreen.setAttribute("style", "display: none;");
    if (interval === 0) {
        interval = setInterval(function () {
            secondsLeft--;
            timer.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(interval);
                endGame();
                timer.textContent = "GAME OVER, YOU HAVE RUN OUT OF TIME!";
            }
        }, 1000);
    }
    render(currentQuestion);
});

// display questions on the screen using a for loop

function render(currentQuestion) {
    currentQuestion.innerHTML = "";
    choiceContainer.innerHTML = "";

    for (var i = 0; i < questions.length; i++) {
        var userQ = questions[currentQuestion].question;
        var userC = questions[currentQuestion].choices;
        questionContainer.textContent = userQ;
    }

    userC.forEach(function (choiceSelection) {
        var listItem = document.createElement("li");
        listItem.textContent = choiceSelection;
        questionContainer.appendChild(choiceContainer)
        choiceContainer.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}


// compare function to compare users choice with the correct answer
function compare(event) {
    var element = event.target;

    if (element.matches("li")) {
        var newDiv = document.createElement("div");
        newDiv.setAttribute("id", "newDiv");

        if (element.textContent == questions[currentQuestion].answer) {
            score++
            newDiv.textContent = "Correct! The answer is: " + questions[currentQuestion].answer;
        }
        else {
            secondsLeft = secondsLeft - penalty;
            newDiv.textContent = "Wrong! THE CORRECT ANSWER IS: " + questions[currentQuestion].answer;
        }
    }


    currentQuestion++

    if (currentQuestion >= questions.length) {
        endGame();
        newDiv.textContent = "QUIZ OVER!" + " " + "You got " + score + " out of " + questions.length + " Correct!";
    }
    else {
        render(currentQuestion)
    }
    questionContainer.appendChild(newDiv);

}

// endGame function to be run when user reaches the end of the quiz
// create, add content, append
function endGame() {
    questionContainer.innerHTML = "";
    timer.innerHTML = "";

    var h1 = document.createElement("h1");
    h1.setAttribute("id", "h1");
    h1.textContent = "END GAME!"

    questionContainer.appendChild(h1)

    var p = document.createElement("p");
    p.setAttribute("id", "p");

    questionContainer.appendChild(p);


    // if more than zero seconds then tell user their score
    if (secondsLeft >= 0) {
        var timeLeft = secondsLeft;
        var p2 = document.createElement("p");
        clearInterval(interval);
        p.textContent = "Your score is: " + timeLeft;

        questionContainer.appendChild(p2);

    }
    // create, add content, append 
    var label = document.createElement("label");
    label.setAttribute("id", "label");
    label.textContent = "Enter your name: ";

    questionContainer.appendChild(label);

    // create, add content, append
    var input = document.createElement("input")
    input.setAttribute("type", "text");
    input.setAttribute("id", "name");
    input.textContent = "";

    questionContainer.appendChild(input);

    // create, add content, append
    var submitForm = document.createElement("button");
    submitForm.setAttribute("type", "submit");
    submitForm.setAttribute("id", "Submit");
    submitForm.textContent = "Submit";

    questionContainer.appendChild(submitForm);

    // add event listener for when user submits their score
    submitForm.addEventListener("click", function () {
        var name = input.value;

        if (name === null) {
            console.log("no name enetered");

        }
        // get and set highscore to the localstorage
        else {

            var finalScore = {
                name: name,
                score: timeLeft
            }
            console.log(finalScore);
            var highScores = localStorage.getItem("highScores");
            if (highScores === null) {
                highScores = [];
            }
            else {
                highScores = JSON.parse(highScores);
            }
            highScores.push(finalScore);
            var newScore = JSON.stringify(highScores);
            localStorage.setItem("highScores", newScore);

            // window.location.assign("/");
        }
    });


}



// function getValue() {
//     return localStorage.getItem('highScores');
// }
// console.log(getValue());

// getValue()

// function renderLastRegistered() {
//     var email = localStorage.getItem("name");
//     var password = localStorage.getItem("score");

// }

// renderLastRegistered()