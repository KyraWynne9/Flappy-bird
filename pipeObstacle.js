//Uppercase p for the class name, lowercase for file name.
//This class draws the pipe obstacle on the screen.
export class PipeObstacle {

    x = 300;
    y = 50;
    height = 500;
    canvas;
    pencil;
    speed = 10;
    gap = 350;

    //pipe
    topPipe;
    bottomPipe;

    constructor(canvas, pencil) {
        this.pencil = pencil;
        this.canvas = canvas;
    }

    draw() {
        //top
        this.pencil.fillStyle = 'blue'; // Set the fill color
        this.pencil.fillRect(
            this.x, 
            this.y - (this.height - this.y), 
            100, 
            this.height
        ); // x, y, w, h

        //bottom
        this.pencil.fillStyle = 'violet'; // Set the fill color
        this.pencil.fillRect(this.x, this.y + this.gap, 100, this.height); // x, y, w, h
    }

    move() {
        this.x -= this.speed;
    }



}