let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        let buttonInnerText = this.innerText;

        makeSound(buttonInnerText);

        buttonAnimation(buttonInnerText);

    });

}

document.addEventListener("keydown", function (event) {

    makeSound(event.key);

    buttonAnimation(event.key);

});


function makeSound(key) {

    switch (key) {
        case "q":
            let tom1 = new Audio("./Sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            let tom2 = new Audio("./Sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            let tom3 = new Audio("./Sounds/tom-3.mp3");
            tom3.play();
            break;

        case "e":
            let tom4 = new Audio("./Sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            let snare = new Audio("./Sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            let crash = new Audio("./Sounds/crash.mp3");
            crash.play();
            break;

        case "p":
            let kick = new Audio("./Sounds/kick-bass.mp3");
            kick.play();
            break;


        default: console.log(key);

    }
}


function buttonAnimation(currentKey) {

    let activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);

}
