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

  power(keys) {
    if (keys[87]) {
            if (this.vel[1] > -Ship.SPEED) {
                this.vel[1]--;
            }
        }

        if (keys[83]) {
            if (this.vel[1] < Ship.SPEED) {
                this.vel[1]++;
            }
        }
        if (keys[68]) {
            if (this.vel[0] < Ship.SPEED) {
                this.vel[0]++;
            }
        }
        if (keys[65]) {
            if (this.vel[0] > -Ship.SPEED) {
                this.vel[0]--;
            }
        }
      }
}

Ship.SPEED = 2;
Ship.RADIUS = 15;
module.exports = Ship;
