class Player {

  static get VERSION() {
    return '4.kecske.2';
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
          if (holecards[0].rank <= "6" && holecards[0].rank != "10") {
            //call
            this.call(bet, gameState);
          } else {
            //minimum raise
            this.raise(bet, gameState);
          }
          // two big boi
        } else if (holecards[0].rank > "9" && holecards[1].rank > "9") {
          // call
          this.call(bet, gameState)
        }
        //no big boi && no pair
        else if (gameState.players[gameState.in_action].bet != 0 && gameState.current_by_in < 100) {
          this.call(bet, gameState);
        } else {
          bet(0);

        }
      } else {
        if (communityCards) {
          let pairCounter = 0;
          let suitCounter = 0;
          if (holecards[0].rank == holecards[1].rank) {
            pairCounter++;
          }
          if (holecards[0].suit == holecards[1].suit) {
            suitCounter++;
          }
          for (let card of communityCards) {
            if (holecards[0].rank == card.rank || holecards[1].rank == card.rank) {
              pairCounter++;
            }
            if (holecards[0].suit == card.suit || holecards[1].suit == card.suit) {
              suitCounter++;
            }
          }
          if (suitCounter == 4) {
            this.allIn(bet, gameState);


          }

          switch (pairCounter) {
            case 0:
              bet(0);
              break;
            case 1:
              this.call(bet, gameState);
              break;
            case 2:
              this.raise(bet, gameState);
              break;
            case 3:
              this.allIn(bet, gameState);
              break;

          }

        }
        this.call(bet, gameState);
      }


    } catch (e) {
      console.error(e + "catched");
      bet(10)
    }
  }

  static call(bet, gameState) {
    bet(parseInt(gameState.current_buy_in) - parseInt(gameState.players[gameState.in_action].bet));
  }

  static raise(bet, gameState) {
    bet(parseInt(gameState.current_buy_in) - parseInt(gameState.players[gameState.in_action].bet) + parseInt(gameState.minimum_raise));
  }

  static allIn(bet, gameState) {
    bet(10000000000000000000);
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
