class MovingObject {
  constructor(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
    this.game = options.game;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  move() {
    let wrappedPos = this.game.wrap(this.pos);
    wrappedPos[0] += this.vel;
    wrappedPos[1] += this.vel;
    this.pos = [wrappedPos[0], wrappedPos[1]];
  }

}

module.exports = MovingObject;
