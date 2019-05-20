class Player {
  static get VERSION() {
    return '2.4';
  }

  static betRequest(gameState, bet) {
    try {


      let holecards = [];
      console.error(gameState);
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
        bet(gameState.current_buy_in + gameState.minimum_raise);
      } else {


        bet(0)
      }
    }
    bet(50);
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
