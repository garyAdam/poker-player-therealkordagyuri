class Player {

  static get VERSION() {
    return '3.11';
  }

  static betRequest(gameState, bet) {
    try {
      let holecards = [];
      let communityCards = [];

      for (let card of gameState.community_cards) {
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
      console.error(e + "catched");
      bet(10)
    }
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
