function setup() {
    createCanvas(1200, 800);
    pixelDensity(3.0);
}

function draw() {
    background(0, 0, 70);
    push();
    smooth();
    textAlign(CENTER, CENTER);
    textSize(200);
    fill(255);
    noStroke();
    text("SCHOCK", width / 2, height / 2);
}