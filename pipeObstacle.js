//Uppercase p for the class name, lowercase for file name.
//This class draws the pipe obstacle on the screen.
export class PipeObstacle {

    x = 300;
    y = 100;
    height = 500;
    canvas;
    pencil;
    speed = 20;
    gap = 300;

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
            this.y - (this.height), 
            100, 
            this.height
        ); // x, y, w, h

        //bottom
        this.pencil.fillStyle = 'violet'; // Set the fill color
        this.pencil.fillRect(this.x, this.y + this.gap, 100, this.height); // x, y, w, h
    }

    move() {
        this.x -= this.speed;

        if(this.x < -100) {
            this.x = this.canvas.width;
        }
    }



}