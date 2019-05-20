class Player {
  static;

  static get VERSION() {
    return '2.9';
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
      // first round
      if (gameState.community_cards.length == 0) {
        // we have a pair
        if (holecards[0].rank == holecards[1].rank) {
          // small pair
          if (holecards[0].rank < "10") {
            //call
            bet(parseInt(gameState.current_buy_in) - parseInt(gameState.players[in_action][bet]));
          } else {
            //minimum raise
            bet(parseInt(gameState.current_buy_in) - parseInt(gameState.players[in_action][bet]) + parseInt(gameState.minimum_raise));
          }
        } else {
          bet(0);
        }
      } else {
        bet(parseInt(gameState.current_buy_in) - parseInt(gameState.players[in_action][bet]));
      }


      bet(5)
    } catch (e) {
      console.error("catched");
      bet(10)
    }
  }

  showdown(gameState) {
  }
}

module.exports = Player;
