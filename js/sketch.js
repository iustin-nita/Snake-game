let snake;
let rez = 20; // set resolution (size of the snake)
let food;
let w, h; // widh/ height of the world

function setup() {
  createCanvas(400, 400);
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(5); // should start slow and get faster over time

  snake = new Snake();

  generateFood();
}

function generateFood() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);
}

function draw() {
  scale(rez);
  noStroke();
  background(220);

  snake.update();
  snake.show();

  if (snake.eat(food)) {
    generateFood();
  }

  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);
}

function keyPressed() {
  console.log("keyCode", keyCode);
  switch (keyCode) {
    case LEFT_ARROW:
      snake.setDir(-1, 0);
      break;
    case RIGHT_ARROW:
      snake.setDir(1, 0);
      break;
    case UP_ARROW:
      snake.setDir(0, -1);
      break;
    case DOWN_ARROW:
      snake.setDir(0, 1);
      break;
  }
  return false;
}
