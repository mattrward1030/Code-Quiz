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
var score = 0;
var currentQuestion = 0;
var timer = document.querySelector("#timer");
var startTimer = document.querySelector("#start-button");
var questionContainer = document.querySelector("#questions");

var secondsLeft = 80;

var interval = 0;
var penalty = 10;

var choiceContainer = document.createElement("ul");

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
console.log(questions)


startTimer.addEventListener("click", function () {
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

// function countdown() {
//     // Sets interval in variable
//     var timerInterval = setInterval(function () {
//         secondsLeft--;
//         timerCount.textContent = secondsLeft;

//         if (secondsLeft === 0) {
//             // Stops execution of action at set interval
//             clearInterval(timerInterval);
//             // // Calls function to create and append image
//             // sendMessage();
//         }

//     }, 1000);
// }

// startButton.addEventListener("click", function (event) {
//     event.preventDefault()
//     console.log("YOU CLICKED ME");
//     startScreen.setAttribute("style", "display: none;");
//     startQuestions();
//     countdown();
// })

// var currentQuestion = 0
// function startQuestions() {
//     var button = document.createElement("button")
//     button.textContent = "Next Question";
//     button.addEventListener("click", nextQuestion);

//     for (var i = 0; i < questions[currentQuestion].choices.length; i++) {
//         var choiceButton = document.createElement("button")
//         choiceButton.textContent = questions[currentQuestion].choices[i]
//         choiceButton.setAttribute("value", questions[currentQuestion].choices[i])
//         choiceContainer.appendChild(choiceButton)
//     }
//     choiceButton.addEventListener("click", nextQuestion)
//     questionContainer.textContent = questions[currentQuestion].question;
//     // choiceContainer.textContent = questions[currentQuestion].choices;
//     document.body.appendChild(questionContainer);
//     document.body.appendChild(choiceContainer)
//     document.body.appendChild(button);


// }

// function nextQuestion() {
//     currentQuestion++;
//     questionContainer.textContent = questions[currentQuestion].question;
//     choiceContainer.textContent = questions[currentQuestion].choices;

// }