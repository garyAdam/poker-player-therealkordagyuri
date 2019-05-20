class Player {

  static get VERSION() {
    return '3.32';
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
            bet(parseInt(gameState.current_buy_in) - parseInt(gameState.players[gameState.in_action].bet));
          } else {
            //minimum raise
            bet(parseInt(gameState.current_buy_in) - parseInt(gameState.players[gameState.in_action].bet) + parseInt(gameState.minimum_raise));
          }
        // two big boi
        } else if (holecards[0].rank > "9" && holecards[1].rank > "9") {
        // call
            bet(parseInt(gameState.current_buy_in) - parseInt(gameState.players[gameState.in_action].bet));
        }
        //no big boi && no pair
        else {
          bet(0);
        }
      }

      else {
        bet(parseInt(gameState.current_buy_in) - parseInt(gameState.players[gameState.in_action].bet));
      }

    } catch (e) {
      console.error(e + "catched");
      bet(10)
    }
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
