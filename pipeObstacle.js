export class PipeObstacle {

    x = 300;
    y = 300;
    height; //height will be dynamic
    width = 100;
    canvas;
    pencil;
    speed = 15;
    gap = 175;

    //pipe parts
    topPipeTopLeft;
    topPipeBottomRight;
    bottomPipeTopLeft;
    bottomPipeBottomRight;

    topPipeSprite = document.getElementById("Top_pillar");
    bottomPipeSprite = document.getElementById("Bottom_pillar");

    constructor(canvas, pencil) {
        this.pencil = pencil;
        this.canvas = canvas;

        this.height = canvas.height;
    }

    draw() {

        this.topPipeTopLeft = { 
            x : this.x,
            y : this.y - this.height
        }

        this.topPipeBottomRight = { 
            x : this.x + this.width,
            y : this.y - this.height + this.height
        }

        this.bottomPipeTopLeft = {
            x : this.x,
            y : this.y + this.gap
        }

        this.bottomPipeBottomRight = {
            x : this.x + this.width,
            y : this.y + this.gap + this.height
        }

        //top pipe
        this.pencil.fillStyle = 'blue'; // Set the fill color
        this.pencil.drawImage(
            this.topPipeSprite,
            this.x, 
            this.y - this.height, 
            this.width, 
            this.height
        ); // x, y, w, h

        //bottom pipe
        this.pencil.fillStyle = 'violet'; // Set the fill color
        this.pencil.drawImage(
            this.bottomPipeSprite,
            this.x, 
            this.y + this.gap, 
            this.width, 
            this.height
        ); // x, y, w, h
    }

    move() {
        this.x -= this.speed;

        //check if we need to recycle
        if(this.x < -this.width) {
            this.x = this.canvas.width;
            this.y = Math.random() * this.canvas.height;
        }



    }



}