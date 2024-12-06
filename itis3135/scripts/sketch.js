function setup() {
    
    createCanvas(710,400);

    // Set the background to white
    background(255);

    // Set width of the strokes(lines)
    strokeWeight(20);

    // Set color mode to hue-saturation-brightness (HSB)
    colorMode(HSB);

    // Set screen reader accessible description
    describe('A blank canvas where the graphics user draws by dragging the mouse');
}
function draw(){
    // Set the color based on the mouse position, and draw a circle
    // at the mouse position
    let circleHue = (mouseX + mouseY) % 360;
    stroke(circleHue, 100, 100);
    circle(300, 200, 100);
}
function mouseDragged() {
    // Set the color based on the mouse position, and draw a line
    // from the previous position to the curret position
    let lineHue = (mouseX - mouseY) % 360;
    stroke(lineHue, 100, 100);
    line(pmouseX, pmouseY, mouseX, mouseY);
}
