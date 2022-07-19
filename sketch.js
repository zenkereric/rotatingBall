let rotation1 = 0.0002;
let rotation2 = 0.0005;
let rotation3 = 0.0001;

function setup() {
  createCanvas(700, 700, WEBGL);
  frameRate(60);
}

function draw() {
  background(0);

  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;

  pointLight(255, 255, 255, locX, locY, 100);

  ambientMaterial(250);
  for (var x = 10; x < width; x += width / 20) {
    coin(x, 0, x, height);
  }
}

function coin() {
  rotateZ(frameCount * rotation1);
  rotateX(frameCount * rotation2);
  rotateY(frameCount * rotation3);
  cylinder(280, 15, 60, 1);
}
