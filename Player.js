class Player {
  static get VERSION() {
    return '2.2';
  }

  static betRequest(gameState, bet) {
    let holecards = [];
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"+gameState+"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbb");

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
      }
        else {
          //minimum raise
          bet(parseInt(gameState.current_buy_in) - parseInt(gameState.players[in_action][bet]) + parseInt(gameState.minimum_raise));
        }
      }
      else {
        bet(0);
      }
    }
    else {
      bet(parseInt(gameState.current_buy_in) - parseInt(gameState.players[in_action][bet]));
    }


  }

  static showdown(gameState) {
  }
}

module.exports = Player;
