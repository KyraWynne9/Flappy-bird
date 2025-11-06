export class PipeObstacle {

    x= 0;
    y= 0;
    canvas;
    pencil;

    // pipe parts

    topPipe;
    bottomPipe;

    constructor(canvas, pencil) {
        this.pencil = pencil;
        this.canvas = canvas;
    }

    sayHello() {
        console.log("Hello")
    }

    draw() {
        pencil.fillStyle = "blue";     // color to fill the rectangle
        pencil.fillRect(this.x, this.y, 100, 75); // x, y, width, height

        pencil.fillStyle = "lavender";     // color to fill the rectangle
        pencil.fillRect(this.x, this.y, 100, 75); // x, y, width, height
    }
}