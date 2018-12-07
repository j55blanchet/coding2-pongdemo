
let speed = 10;
let bulletImage;

class Bullet {

    constructor(x, y, destX, destY) {

        if (!bulletImage) {
            bulletImage = loadImage('assets/bullet/orb.png');
        }

        this.x = x;
        this.y = y;
        this.rotation = 0;

        
        let angle = Math.atan2(destY - y, destX - x);
        this.vx = speed * Math.cos(angle);
        this.vy = speed * Math.sin(angle);
    } 

    move() {
        this.x += this.vx;
        this.y += this.vy;
        this.rotation += 2; // 2 degrees per frame
    }

    draw() {
        push();
        imageMode(CENTER);
        translate(this.x, this.y);
        rotate(this.rotation);
        image(bulletImage, 0, 0, 90, 90);
        pop();
    }
}