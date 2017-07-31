class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
  }

  start() {
    setInterval(() => {
      this.game.draw(this.ctx);
      this.game.step();
    }, 20);
  }
}

module.exports = GameView;
