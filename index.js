for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let buttonInnerHtml = this.innerHTML;
        switch (buttonInnerHtml) {
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
    });
}


function soundPlay(name) {
    var audio = new Audio("./sounds/"+name+".mp3");
    audio.play();
}
      
