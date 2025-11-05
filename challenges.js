let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d"); // This gives you the drawing context, like a pencil

function gameLoop() {

}

setInterval(gameLoop, 50);

function raiseScore() {
    score += 1;
    let scoreElement = document.getElementById("scoreDisplay");
    scoreElement.innerHTML = score;

}

function detectClick() {
    console.log("Clicked!")
}

canvas.addEventListener("CLick", detectClick);