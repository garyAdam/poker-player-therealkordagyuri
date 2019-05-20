class Player {
  static get VERSION() {
    return '1.2';
  }

  static betRequest(gameState, bet) {
    let gameStateData = JSON.parse(gameState);
    if (gameStateData.current_buy_in>300)
    {
      bet(0)
    }
    bet(200);
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
