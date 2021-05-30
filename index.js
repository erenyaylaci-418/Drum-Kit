for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
}
document.addEventListener("keypress", function (event) {
    var key = event.key;
    makeSound(key);
    buttonAnimation(key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            soundPlay("tom-1")
            break;
        case "a":
            soundPlay("tom-2")
            break;
        case "s":
            soundPlay("tom-3")
            break;
        case "d":
            soundPlay("tom-4")
            break;
        case "j":
            soundPlay("snare")
            break;
        case "k":
            soundPlay("crash")
            break;
        case "l":
            soundPlay("kick-bass")
            break;
    }
}

function soundPlay(name) {
    let audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();
}

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");

    }, 100)
}