const MovingObject = require("./moving_object");
const Util = require("./util");

class Ship extends MovingObject {
  constructor(options) {
    options.radius = Ship.RADIUS;
    options.vel = options.vel || [0,0];
    options.color = options.color || '#32cd32';
    super(options);
  }

  relocate() {
    this.pos = this.game.randomPosition();
    this.vel = [0, 0];
  }

  power(impulse) {
    if (Math.abs(this.vel[0] + impulse[0]) < 5) {
      this.vel[0] += impulse[0];
    }
    if (Math.abs(this.vel[1] + impulse[1]) < 5) {
      this.vel[1] += impulse[1];
    }
  }

}

Ship.MAX_VEL = 5;
Ship.RADIUS = 15;
module.exports = Ship;
