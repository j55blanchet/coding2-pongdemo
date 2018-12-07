
let speed = 10;
let bulletImage;

class Bullet {

    constructor(x, y, destX, destY) {

        if (!bulletImage) {
            bulletImage = loadImage('assets/bullet/orb.png');
        }

        this.x = x;
        this.y = y;

        
        let angle = Math.atan2(destY - y, destX - x);
        this.vx = speed * Math.cos(angle);
        this.vy = speed * Math.sin(angle);
    }

    move() {
        this.x += this.vx;
        this.y += this.vy;
    }

    draw() {
        imageMode(CENTER);
        image(bulletImage, this.x, this.y, 60, 60);
    }
}