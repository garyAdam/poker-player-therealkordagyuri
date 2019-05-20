class Player {
  static get VERSION() {
    return '2.6';
  }

  static betRequest(gameState, bet) {
    try {
      let holecards = [];
      let communityCards = [];

      for (let card of gameState.communityCards) {
        communityCards.push(card);
      }

      for (let player of gameState.players) {
        if (player.name == "TheRealKordaGyuri") {

          for (let i = 0; i < player.hole_cards.length; i++) {
            holecards[i] = player.hole_cards[i];
          }
        }
      }
      if (holecards[0].rank == holecards[1].rank) {
        bet(100);
      } else {


        bet(5)
      }
    } catch (e) {
      bet(10)
    }
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
