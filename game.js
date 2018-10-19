var sketchProc = function(processingInstance) {
    with (processingInstance) {
        // Outside of Khan Academy, you can control the size of your sketch!
        size(400, 400); 
       
        // Program goes here
        draw = function() {
            if (pmouseX > 0) {
                line(mouseX, mouseY, pmouseX, pmouseY);
            }
        }
    }
};