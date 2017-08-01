class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.ship = this.game.addShip();
  }

  start() {
    this.bindKeyHandlers();
    setInterval(() => {
      this.game.draw(this.ctx);
      this.game.step();
    }, 20);
  }

  bindKeyHandlers() {
    const ship = this.ship;
    window.addEventListener('keydown', (e) => {
      let move;
      switch(e.keyCode) {
        case 65:
          move = GameView.MOVES['a'];
          this.ship.power(move);
          break;
        case 87:
          move = GameView.MOVES['w'];
          this.ship.power(move);
          break;
        case 83:
          move = GameView.MOVES['s'];
          this.ship.power(move);
          break;
        case 68:
          move = GameView.MOVES['d'];
          this.ship.power(move);
          break;
      }
    });
  }
}

GameView.MOVES = {
  "w": [ 0, -1],
  "a": [-1,  0],
  "s": [ 0,  1],
  "d": [ 1,  0],
};

module.exports = GameView;
