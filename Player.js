class Player {
  static get VERSION() {
    return '2.5';
  }

  static betRequest(gameState, bet) {
    let holecards = [];
    let communityCards = [];

    console.error(gameState);
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
    if (holecards[0].rank == holecards[1].rank ) {
      bet(100);
    } else {


      bet(5)
    }
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
