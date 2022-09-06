function setup() {
    createCanvas(700, 450);
    angleMode(DEGREES);
    }
    function draw() {
    background(204);
    fill(66, 245, 66)
    ellipse(350, 225, 200, 200); // Middle
    arc(350, 225, 100, 100, 0, 180); //Mouth
    fill(0) //Fill right eye with black
    ellipse(300, 175, 10, 10); //right eye
    fill(0) //Fill left eye with black
    ellipse(400, 175, 10, 10); //left eye
    
}