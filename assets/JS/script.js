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
var questionContainer = document.createElement("div")
var score = 0

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

var timerCount = document.querySelector(".timer-count")
var secondsLeft = 60;
var interval = 0;
var penalty = 10;


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

startButton.addEventListener("click", function (event) {
    event.preventDefault()
    console.log("YOU CLICKED ME");
    startScreen.setAttribute("style", "display: none;");
    startQuestions();
    countdown();
})

var currentQuestion = 0

function startQuestions() {

    var choiceContainer = document.createElement("ul")
    for (var i = 0; i < questions[currentQuestion].choices.length; i++) {
        var choiceButton = document.createElement("button")
        choiceButton.textContent = questions[currentQuestion].choices[i]
        choiceButton.setAttribute("value", questions[currentQuestion].choices[i])
        choiceContainer.appendChild(choiceButton)
        choiceButton.addEventListener("click", nextQuestion)
        choiceButton.addEventListener("click", (compare))
    }

    questionContainer.textContent = questions[currentQuestion].question;

    document.getElementById("questions").appendChild(questionContainer);
    document.getElementById("questions").appendChild(choiceContainer)



}

function nextQuestion() {
    currentQuestion++;
    document.getElementById("questions").innerHTML = ""
    startQuestions()

}

// Event to compare choices with answer
function compare(event) {
    var element = event.target;

    if (element.matches("choiceButton")) {

        var newDiv = document.createElement("div");
        newDiv.setAttribute("id", "createDiv");
        // Correct condition 
        if (element.textContent == questions[currentQuestion].answer) {
            score++;
            newDiv.textContent = "Correct! The answer is:  " + questions[currentQuestion].answer;
            // Correct condition 
        } else {
            // Will deduct -5 seconds off secondsLeft for wrong answers
            secondsLeft = secondsLeft - penalty;
            newDiv.textContent = "Wrong! The correct answer is:  " + questions[currentQuestion].answer;
        }

    }
}


currentQuestion++;


if (currentQuestion >= questions.length) {
    // All done will append last page with user stats
    allDone();
    newDiv.textContent = "End of quiz!" + " " + "You got  " + score + "/" + questions.length + " Correct!";
} else {

}
questionContainer.appendChild(newDiv);

