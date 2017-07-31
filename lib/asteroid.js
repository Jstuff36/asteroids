import MovingObject from './moving_object';
import * as Util from './util.js';

const DEFAULTS = {
  COLOR: '#505050',
  RADIUS: 25,
  SPEED: 4
};

class Asteroid extends MovingObject {
  constructor(options = {}) {
    options.color = DEFAULTS.COLOR;
    options.radius = DEFAULTS.RADIUS;
    options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED);
    super(options);
  }

}
