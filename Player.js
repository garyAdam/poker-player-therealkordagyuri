class Player {
  static get VERSION() {
    return '1.5';
  }

  static betRequest(gameState, bet) {
    bet(50)
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
