class Player {
  static get VERSION() {
    return '1.6';
  }

  static betRequest(gameState, bet) {
    bet(5)
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
