class Player {
  static get VERSION() {
    return '2.0';
  }

  static betRequest(gameState, bet) {
    bet(100)
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
