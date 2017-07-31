const Asteroid = require("./asteroid");

class Game {
  constructor() {
    this.asteroids = [];
    this.addAsteroids();
  }

  addAsteroids() {
    for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
      this.asteroids.push(new Asteroid({game: this}));
    }
  }

  randomPosition() {
    return [
      Game.DIM_X * Math.random(),
      Game.DIM_Y * Math.random()
    ];
  }

  draw(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.asteroids.forEach( asteroid => {
      asteroid.draw(ctx);
    });
  }

  moveObjects() {
    this.asteroids.forEach( asteroid => {
      asteroid.move();
    });
  }

  wrap(pos) {
    return([this.boundCalculator(pos[0], Game.DIM_X),
      this.boundCalculator(pos[1], Game.DIM_Y)]);
  }

  boundCalculator(coord, max) {
    if (coord < 0) {
      return(max - Math.abs(coord % max));
    } else if (coord > max) {
      return(coord % max);
    } else {
      return(coord);
    }
  }

  checkCollisions() {
    for (let i = 0; i < this.asteroids.length; i++) {
      for (let j = 0; j < this.asteroids.length; j++) {
        if (i === j) {
          continue;
        } else if (this.asteroids[i].isCollideWith(this.asteroids[j])) {
          this.asteroids[i].collideWith(this.asteroids[j]);
        }
      }
    }
  }

  remove(asteroid) {
    this.asteroids.splice(this.asteroids.indexOf(asteroid), 1);
  }

  step() {
    this.moveObjects();
    this.checkCollisions();
  }

}

Game.DIM_X = 1000;
Game.DIM_Y = 600;
Game.NUM_ASTEROIDS = 10;

module.exports = Game;
