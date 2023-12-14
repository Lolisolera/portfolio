
let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];

let started = false;
let level = 0;

document.addEventListener("keydown", function (event) {
    if (!started) {
        document.getElementById("level-title").innerText = "Level " + level;
        nextSequence();
        started = true;
    }
});

let buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        let userChosenColour = this.id;
        userClickedPattern.push(userChosenColour);

        playSound(userChosenColour);
        animatePress(userChosenColour);

        checkAnswer(userClickedPattern.length - 1);
    });
});


function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        console.log("success");

        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }

    } else {

        console.log("wrong");

        playSound("wrong");

        document.body.classList.add("game-over");

        setTimeout(function () {
            document.body.classList.remove("game-over");
        }, 200);

        document.getElementById("level-title").innerText = "Game Over, Press Any Key to Restart";

        //Call startOver() if the user gets the sequence wrong.
        startOver();
    }

}
function nextSequence() {
    userClickedPattern = [];
    level++;
    document.getElementById("level-title").innerText = "Level " + level;

    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    let element = document.getElementById(randomChosenColour);

    // Trigger the fading effect using CSS transitions
    element.style.transition = "opacity 0.1s";
    element.style.opacity = 1; // Fading in

    // Play the sound
    playSound(randomChosenColour);

    // Delay for fading out
    setTimeout(function () {
        element.style.opacity = 0; // Fading out
    }, 100);

    // Reset opacity after fading out
    setTimeout(function () {
        element.style.transition = "none";
        element.style.opacity = 1;
    }, 200);
}


function playSound(name) {
    let audio = new Audio("simon-game/sounds/" + name + ".mp3");
    audio.play();
}


function animatePress(currentColor) {
    let element = document.getElementById(currentColor);

    // Add the "pressed" class
    element.classList.add("pressed");

    // Remove the "pressed" class after 100 milliseconds
    setTimeout(function () {
        element.classList.remove("pressed");
    }, 100);
}


//1. Create a new function called startOver().
function startOver() {

    //3. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
    level = 0;
    gamePattern = [];
    started = false;
}
