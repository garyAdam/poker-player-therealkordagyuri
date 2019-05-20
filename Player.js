class Player {
  static get VERSION() {
    return '1.1';
  }

  static betRequest(gameState, bet) {
    bet(200);
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
