/* Add EventListener For When The Keys Were Pressed */
document.addEventListener("keydown", function (event) {
    if (event.code == "KeyA"){
        let audioA = new Audio("media/A.mp3").play();
    } else if (event.code == "KeyS") {
        let audioS = new Audio("media/S.mp3").play();
    } else if (event.code == "KeyD") {
        let audioD = new Audio("media/D.mp3").play();
    } else if (event.code == "KeyF") {
        let audioF = new Audio("media/F.mp3").play();
    } else if (event.code == "KeyG") {
        let audioG = new Audio("media/G.mp3").play();
    } else if (event.code == "KeyH") {
        let audioH = new Audio("media/H.mp3").play();
    } else if (event.code == "KeyJ") {
        let audioJ = new Audio("media/J.mp3").play();
    } else if (event.code == "KeyW") {
        let audioJ = new Audio("media/W.mp3").play();
    } else if (event.code == "KeyE") {
        let audioJ = new Audio("media/E.mp3").play();
    } else if (event.code == "KeyT") {
        let audioJ = new Audio("media/T.mp3").play();
    } else if (event.code == "KeyY") {
        let audioJ = new Audio("media/Y.mp3").play();
    } else if (event.code == "KeyU") {
        let audioJ = new Audio("media/U.mp3").play();
    }
});