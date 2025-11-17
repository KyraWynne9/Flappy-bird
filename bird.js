export class Bird {
    
    x = 50;
    y = 50;
    width = 50;
    height = 50;
    canvas;
    pencil;

    ySpeed = 1;
    maximumYSpeed = 20;

    constructor(canvas, pencil) {
        this.canvas = canvas;
        this.pencil = pencil;
    }

    draw() {
        //top pipe
        this.pencil.fillStyle = 'black'; // Set the fill color
        this.pencil.fillRect(
            this.x, 
            this.y, 
            this.width, 
            this.height
        ); // x, y, w, h
    }

    flap() {
        console.log("Flapped!")
        this.ySpeed = -15;
    }

    gravity() {
        this.y += this.ySpeed
        this.ySpeed += 2;

        if(this.ySpeed > this.maximumYSpeed) {
            this.ySpeed = this.maximumYSpeed;
        }

    }

    isHitByPipe(pipeObstacle) {
        //this detects collisions for the top pipe
        let isFarEnoughRight = this.x > pipeObstacle.topPipeTopLeft.x;
        let isLowEnough = this.y > pipeObstacle.topPipeTopLeft.y;
        let isFarEnoughLeft = this.x < pipeObstacle.topPipeBottomRight.x;
        let isHighEnough = this.y < pipeObstacle.topPipeBottomRight.y;

        if(isFarEnoughRight && isLowEnough && isFarEnoughLeft && isHighEnough)
            return true;

        //use the logic above to detect for the bottom pipe here:
        let isFarEnoughRight2 = this.x > pipeObstacle.bottomPipeTopLeft.x;
        let isLowEnough2 = this.y > pipeObstacle.bottomPipeTopLeft.y;
        let isFarEnoughLeft2 = this.x < pipeObstacle.bottomPipeBottomRight.x;
        let isHighEnough2 = this.y < pipeObstacle.bottomPipeBottomRight.y;

        if(isFarEnoughRight2 && isLowEnough2 && isFarEnoughLeft2 && isHighEnough2)
            return true;
        //use the logic above to detect for the bottom pipe here:

        return false;
    }


}