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
var startScreen = document.getElementById("start-screen")
var startButton = document.getElementById("start-button")
var timerCount = document.querySelector(".timer-count")
var secondsLeft = 60

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


function countdown() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerCount.textContent = secondsLeft;

        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // // Calls function to create and append image
            // sendMessage();
        }

    }, 1000);
}

startButton.addEventListener("click", function () {
    console.log("YOU CLICKED ME");
    startScreen.setAttribute("style", "display: none;");
    startQuestions();
    countdown();
})

function startQuestions() {
    console.log("GO TO START QUESTIONS")
}

// have to add functions and should define variables for id's and use query selector all

// var startButton = document.querySelector(".start-button")
// var resetButton = document.querySelector(".reset-button")
// var wordBlanks = document.querySelector(".word-blanks")
// var cardTimer = document.querySelector(".timer")




// function random() {


// }
// startButton.addEventListener("click", function (event) {
//     event.preventDefault()
//     random()
//     countdown()
// })
