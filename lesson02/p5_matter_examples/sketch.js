let rect1;
let rect2;
let ground;
let wallLeft;
let wallRight;
let ceiling;


function setup() {
    const canvas = createCanvas(800, 600);

    // create an engine
    let engine = Matter.Engine.create();
    let world = engine.world;

    // add blocks
    const group = Matter.Body.nextGroup(true);
    rect1 = new Block(world,
        { x: 400, y: 200, w: 400, h: 30, color: '#62BBC1' },
        { collisionFilter: { group: group }, angle: PI / 10 * 2 }
    );
    rect2 = new Block(world,
        { x: 400, y: 200, w: 400, h: 30, color: '#62BBC1' },
        { collisionFilter: { group: group }, angle: PI - PI / 10 * 4 }
    );

    // revolute
    rect2.constrainTo(rect1, { length: 0, stiffness: .001, color: '#62BBC1' });

    // rubberband
    rect1.constrainTo(rect2, {
        pointA: { x: 0, y: 80 },
        pointB: { x: -25, y: 120 },
        length: 70,
        stiffness: 1,
        color: '#62BBC1'
    });

    let wallColor = "#FFD166";

    // ground
    ground = new Block(world, { x: width / 2, y: height, w: 810, h: 10, color: wallColor }, { isStatic: true });

    // wall
    wallLeft = new Block(world, { x: 0, y: height / 2, w: 10, h: height, color: wallColor }, { isStatic: true });
    wallRight = new Block(world, { x: width - 2, y: height / 2, w: 10, h: height, color: wallColor }, { isStatic: true });

    // ceiling
    ceiling = new Block(world, { x: width / 2 - 10, y: 0, w: width, h: 10, color: wallColor }, { isStatic: false });

    // setup mouse
    mouse = new Mouse(engine, canvas);

    // run the engine
    Matter.Runner.run(engine);
}

function draw() {
    background(0);
    ground.draw();
    wallLeft.draw();
    wallRight.draw();
    ceiling.draw();
    rect1.draw();
    rect2.draw();
    rect1.drawConstraints();
    rect2.drawConstraints();
    mouse.draw();
}
