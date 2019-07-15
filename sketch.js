function setup(){
    createCanvas(500, 500)
background(110, 800, 250)
}
function mouseDragged() {
    ellipse(mouseX, mouseY, random([50], [100]));
    return false;
}
function draw() {
    rect(25, 25, 50, 50);
    fill(500, 200, 100);
}
