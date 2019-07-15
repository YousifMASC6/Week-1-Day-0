function setup(){
    createCanvas(500, 500)
background(110, 800, 250)
var button = createButton("RESET")
    button.position(8, 507);
    button.mousePressed(setup);
var button = createButton("ELLIPSE")
    button.position(68, 507);
    mouseDragged()
var button = createButton("SQUARE")
    button.position(138, 507);
}   
function mouseDragged() {
    ellipse(mouseX, mouseY, random([50], [100]));
    return false;
}
function draw() {
    rect(25, 25, 50, 50);
    fill(500, 200, 100);
}

    // function drawSquareClicked() {
    //     drawSquare(mouseX, mouseY, random([50], [100]));
    //     return false;
    // }