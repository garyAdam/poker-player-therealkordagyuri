class Player {
  static get VERSION() {
    return '2.1';
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
