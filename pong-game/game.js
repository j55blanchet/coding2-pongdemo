var sketchProc = function (processingInstance) {
    with (processingInstance) {

        size(400, 400);
        //
        // Pong Game
        //
        // This is a game where you try to keep the ball from exiting the screen using the paddle
        // 
        // Author: Mr. Blanchet
        // Date: 9/12/2018

        // Start of the ball in the center of the screen, lower down (near paddle)
        var ballX = 200, ballY = 300;
        var ballXVel = 2, ballYVel = -2;
        var ballDiameter = 40;
        var ballRadius = ballDiameter / 2;

        var paddleW = 100,
            paddleH = 15;
        var paddleX = width / 2 - paddleW / 2,
            paddleY = height - paddleH - 10;
        var paddleSpeed = 4,
            paddleHue = 0;

        var isGamePaused = false;

        frameRate(120);

        var makeBallBounce = function () {
            // make ball bounce of right edge of screen
            if (ballX + ballRadius >= width) {
                ballXVel = -ballXVel;
            }
            // make ball bounce of the top edge of the screen
            if (ballY - ballRadius <= 0) {
                ballYVel = -ballYVel;
            }
            // make ball bounce of the left edge of the screen
            if (ballX - ballRadius <= 0) {
                ballXVel = -ballXVel;
            }
            // pause game and tell player they lost when ball hits bottom of screen.
            if (ballY + ballRadius >= height) {
                isGamePaused = true;
                fill(23, 21, 21);
                textSize(30);
                text("You lost!", width / 2 - 50, height / 2);

                textSize(16);
                text("Press 'r' to start over", width / 2 - 25, height / 2 + 50);
            }

            if (ballY + ballRadius >= paddleY &&
                ballX >= paddleX &&
                ballX <= paddleX + paddleW) {

                ballYVel = -ballYVel;
            }
        };

        var makePaddleMove = function () {
            if (__keyPressed && keyCode === LEFT) {
                paddleX -= paddleSpeed;
            }
            if (__keyPressed && keyCode === RIGHT) {
                paddleX += paddleSpeed;
            }
            // ensure the paddle is not off the edge of the screen
            paddleX = max(paddleX, 0);
            paddleX = min(paddleX, width - paddleW);
        };

        draw = function () {
            if (isGamePaused) {
                return;
            }
            colorMode(RGB);
            noStroke();
            fill(255, 255, 255, 10);
            rect(0, 0, width, height);

            ballX += ballXVel;
            ballY += ballYVel;

            // drawing the ball
            fill(30, 30, 30);
            noStroke();
            ellipse(ballX, ballY, ballDiameter, ballDiameter);
            colorMode(HSB);
            fill((paddleHue + 50) % 255, 158, 240);
            ellipse(ballX, ballY, ballDiameter * 0.8, ballDiameter * 0.8);

            // draw the paddle

            fill(paddleHue, 158, 180);
            paddleHue = (paddleHue + 0.15) % 255;
            stroke(30, 30, 30);
            rect(paddleX, paddleY, paddleW, paddleH, 5);

            makePaddleMove();
            makeBallBounce();

        };

        keyTyped = function () {

            if (key.toString() === 'r') {

                // Unpause the game
                isGamePaused = false;
                ballX = 200;
                ballY = 300;
                ballXVel = 2;
                ballYVel = -2;
            }
        };


    }
};