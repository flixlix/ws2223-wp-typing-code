const fillBoolean = false;
const fillColor = 0;
const strokeBoolean = true;
const strokeColor = 255;
const strokeWidth = 1;

function setup() {
    createCanvas(1200, 800);
    pixelDensity(3.0);
}

function draw() {
    background(0, 0, 70);
    translate(0, height / 4 + 30);
    push();
    smooth();

    fill(color(fillColor));
    if (fillBoolean === false) noFill();
    stroke(color(strokeColor));
    strokeWeight(strokeWidth);
    if (strokeBoolean === false) noStroke();

    /* args as follows: */
    /* x-coordinate, y-coordinate, width, height, stroke-color, stroke-weight, fill-boolean, fill-color, rotation  */

    /* S */
    /* TOP CENTER */
    horizontalLeaf(100, 50);
    /* TOP LEFT */
    verticalLeaf(50, 100);
    /* MIDDLE CENTER */
    horizontalLeaf(100, 156);
    /* BOTTOM RIGHT */
    verticalLeaf(155.5, 206);
    /* BOTTOM CENTER */
    horizontalLeaf(100, 262);

    /* H */
    /* TOP LEFT */
    verticalLeaf(300, 100);
    /* BOTTOM LEFT */
    verticalLeaf(300, 205);
    /* MIDDLE CENTER */
    horizontalLeaf(350, 155.3);
    /* TOP RIGHT */
    verticalLeaf(406, 100);
    /* BOTTOM RIGHT */
    verticalLeaf(406, 205);

    /* O */
    /* TOP CENTER */
    horizontalLeaf(605, 50);
    /* TOP LEFT */
    verticalLeaf(555, 100);
    /* BOTTOM LEFT */
    verticalLeaf(555, 205);
    /* TOP RIGHT */
    verticalLeaf(660, 100);
    /* BOTTOM RIGHT */
    verticalLeaf(660, 205);
    /* BOTTOM CENTER */
    horizontalLeaf(605, 260.3);

    /* C */
    /* TOP CENTER */
    horizontalLeaf(861, 50);
    /* TOP LEFT */
    verticalLeaf(810, 100);
    /* BOTTOM LEFT */
    verticalLeaf(810, 205);
    /* BOTTOM CENTER */
    horizontalLeaf(861, 261);

    /* K */
    /* TOP LEFT */
    verticalLeaf(1045, 100);
    /* BOTTOM LEFT */
    verticalLeaf(1045, 205);
    translate(-25, 0);
    push();
    rotate(PI / 8);
    /* translate(0, -h) */
    translate(41, -(height / 2) - 143);
    /* BOTTOM LEFT */
    verticalLeaf(1045, 205);
    pop();
    push();
    rotate(-PI / 8);
    /* translate(0, -h) */
    translate(-76, height / 2 + 15)
    /* translate(40, -(height / 2) - 150) */
    /* BOTTOM LEFT */
    verticalLeaf(1045, 205);
    pop();
    pop();

}

function verticalLeaf(x, y) {
    let w = 150;
    let h = 150;
    push();
    translate(-w / 3 * 1.06, 0);
    arc(x, y, w, h, -1 / 4 * PI, 1 / 4 * PI);
    arc(x + (3.53 / 5 * w), y, w, h, -1 / 4 * PI - PI, 1 / 4 * PI - PI);
    pop();
}

function horizontalLeaf(x, y) {
    let w = 150;
    let h = 150;
    push();
    translate(-w / 3 * 1.06, 0);
    arc(x + w / 3 * 1.11, y + h / 3, w, h, (-1 / 4 * PI) - HALF_PI, (1 / 4 * PI) - HALF_PI);
    arc(x + w / 3 * 1.11, y - h / 3 * 1.11, w, h, (-1 / 4 * PI - PI) - HALF_PI, (1 / 4 * PI - PI) - HALF_PI);
    pop();
}