export class Bird {
    
    x = 50;
    y = 50;
    width = 50;
    height = 50;
    canvas;
    pencil;
    ySpeed

    constructor(canvas, pencil) {
        this.canvas = canvas;
        this.pencil = pencil;
    }


    draw() {
        //bird
        this.pencil.fillStyle = 'black';
        this.pencil.fillRect(
            this.x, 
            this.y, 
            this.width, 
            this.height
        ); // x, y, w, h
    }

    gravity() {
        this.y += this.ySpeed
        this.ySpeed *= 1,2;

        if(this.ySpeed > 20) {
            this.ySpeed = 20;
        }
    }



    chirp() {
        console.log("Cheep!");
    }

}