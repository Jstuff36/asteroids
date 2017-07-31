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
    console.log(this.asteroids);
    this.asteroids.forEach( asteroid => {
      asteroid.draw(ctx);
    });
  }

  moveObjects() {
    this.asteroids.forEach( asteroid => {
      asteroid.move();
    });
  }

}

Game.DIM_X = 1000;
Game.DIM_Y = 600;
Game.NUM_ASTEROIDS = 10;

module.exports = Game;
