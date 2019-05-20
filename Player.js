class Player {
  static get VERSION() {
    return '1.8';
  }

  static betRequest(gameState, bet) {
    let holecards;
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"+gameState+"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbb");
    bet(1000);
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
