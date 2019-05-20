class Player {
  static get VERSION() {
    return '2.0';
  }

  static betRequest(gameState, bet) {
    bet(1000)
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
