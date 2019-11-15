class Snake {
  constructor() {
    this.len = 1;
    this.body = [];
    this.body[0] = createVector(0, 0);
    this.xdir = 0;
    this.ydir = 0;
    // this.head = this.body[this.body.length - 1];
  }

  update() {
    let head = this.getHead();
    this.body.shift();
    head.x += this.xdir;
    head.y += this.ydir;
    this.len++;
    this.body.push(head);
    // console.log("this.body[0].x", this.body[0].x);
    // console.log("this.body[0].y", this.body[0].y);
  }

  show() {
    for (const cell of this.body) {
      print(this.body);
      print(cell);
      fill(0);
      noStroke();
      rect(cell.x, cell.y, 1, 1);
    }
  }

  grow() {
    let head = this.getHead();
    this.body.push(createVector(head.x, head.y));
  }

  eat(foodPosition) {
    let head = this.getHead();

    if (head.x == foodPosition.x && head.y == foodPosition.y) {
      print("FOOD EATEN");
      this.grow();
      return true;
    }
    return false;
  }

  setDir(x, y) {
    // need to check if the snake is at the margin of the world
    // console.log("x,y", x, y);
    this.xdir = x;
    this.ydir = y;
    // console.log("this x,y", this.xdir, this.ydir);
  }

  endGame() {
    let { x, y } = this.getHead();
    if (x < 0 || x > w - 1 || y < 0 || y > h - 1) {
      print("END GAME");
      return true;
    }
    return false;
  }

  getHead() {
    return this.body[this.body.length - 1].copy();
  }
}
