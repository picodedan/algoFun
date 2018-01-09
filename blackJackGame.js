/*
Here's your first challenge in class-based programming challenges:
Design a simple blackjack game using Object-Oriented Design principles - NO UI REQUIRED!

Start with pseudocode describing all of the key elements/functionality, then work toward coding a solution using JSFiddle (https://jsfiddle.net/).

___________________
If you're feeling a little rusty, here's a high-level refresher:

A = 1 or 11 
2-9 = exactly what you'd expect
J, Q, K = 10

The aim of the game is to have cards totaling as close to 21 as possible (without going over). The dealer issues each player 2 cards (which becomes their 'Hand'). 

Players must then choose to either 'Stay' (take no more cards) or 'Hit' (take one more card). Players can continue taking additional cards ('Hit') or stop receiving cards ('Stay') until they exceed 21, in which case they are out.

At the end of the round, all players' hands are compared and whoever has the highest value (<= 21) wins.
___________
*/

/*
things we will need:
  A dealer who will deal out cards as appropriate, interact with the players, and declare the winner to all players. 
  Player(s) who will perform several actions in each round

  Player class/component functionality:
    Join:
      joins an available dealer's table to start play on the next available round
    Stay:
      tell the dealer to not deal any additional cards this round. 
    Hit:
      tell the dealer to grant one more card to players hand.
    Hand:
      holds all cards dealt this round
    Leave: 
      leave the dealer's table at the end of the current round.  
    Table:  
      listing of all other players and their hands
    EndOfRound:
      clear hand and update table

  Dealer class/component functionality:
    Deck:
      deck of cards (4 each of the various types) that can be dealt to the players at the dealers table
    Table: 
      list of players at the table, their respective hand values, and intent to leave at end of round
    Deal:
      give one card to each player and log the value
    Hit:
      give on card to the requesting player, update value of players hand
        if over 21 log player as bust and do not deal any more cards this round
    StayList:
      track all players who have registered a 'stay'
    Shuffle:
      shuffle the deck
    DeclareWinner:
      check each players hand value,  report to all players, whichever player had the highest hand or 21. 
      clear all hands,values, leaving players, Shuffle, and Deal.
*/

class Player {
  join() {}

  leave() {}

  stay() {}

  hit() {}

  hand = [];

  table = {};

}