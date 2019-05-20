class Player {
  static get VERSION() {
    return '1.7';
  }

  static betRequest(gameState, bet) {
    let holecards;
    for (let player of gameState.game_state.players)
      if (player.name == "TheRealKordaGyuri") {
        {
          for (let i = 0; i < player.hole_cards.length; i++) {
            holecards[i] = player.hole_cards[i];
          }
        }

      }
    if (holecards[0].rank == "A" || holecards[1].rank == "A") {
      bet(100);
    } else {


      bet(5)
    }
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
