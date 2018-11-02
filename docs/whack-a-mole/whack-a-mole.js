var sketchProc = function (processingInstance) {
    with (processingInstance) {

        size(400, 400);

        // ES6 way of creating object blueprints
        class Mole {

            // ES6 way to define a function
            // to create a new Mole instance
            constructor(x, y, radius) {
                // Save the values we received as parameters into the object we're creating
                this.x = x;
                this.y = y;
                this.radius = radius;
            }

            // Defining a draw function for moles
            draw() {
                // Body of mole
                noStroke();
                fill(140, 89, 8);
                ellipse(this.x,
                    this.y,
                    this.radius * 2,
                    this.radius * 2);

                // Left eye
                fill(222, 222, 222);
                ellipse(this.x - this.radius / 3,
                    this.y - this.radius / 3,
                    this.radius / 5,
                    this.radius / 2);

                // Right eye
                fill(222, 222, 222);
                ellipse(this.x + this.radius / 3,
                    this.y - this.radius / 3,
                    this.radius / 5,
                    this.radius / 2);
            }

            containsPoint(pointX, pointY) {
                return dist(pointX, pointY, this.x, this.y) <= this.radius;
            }
        }
        
        // A list of all the moles
        var moles = [];

        // Add it to our list of moles
        moles.push(new Mole(158, 146, 85),
            new Mole(210, 150, 40),
            new Mole(110, 310, 30),
            new Mole(60, 40, 45),
            new Mole(320, 80, 50));

        var score = 0;

        draw = function () {

            background(158, 155, 155);

            for (var i = 0; i < moles.length; i++) {
                var mole = moles[i];
                mole.draw();
            }

            fill(26, 25, 25);
            text("Score: " + score, 10, 20);

            if (frameCount % 60 === 0) {
                moles.push(new Mole(random(width), random(height), random(50, 100)));
            }
        };

        mouseClicked = function () {

            // Look all moles, and whack the ones we click on
            for (var i = moles.length - 1; i >= 0; i--) {
                var mole = moles[i];

                // If we click on a mole, remove it
                if (mole.containsPoint(mouseX, mouseY)) {

                    // Removes the mole from the array
                    moles.splice(i, 1);
                    score += 1;

                    // Break out of the loop - don't keep removing moles if 
                    // we already removed one
                    break;
                }
            }
        };
    }
};