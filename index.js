#!/usr/bin/env node
var prompt = require('prompt');

prompt.start();

const TicGame = function() {
  this._board = [[null,null,null],[null,null,null],[null,null,null]]
  this._turn = true;
}

let game = TicGame();

TicGame.prototype.addMove = function(options){
  if(this._turn){
    this._board[options.column][options.row] = 'X';
    console.log('Player 2\'s turn');
  } else {
    this._board[options.column][options.row] = 'O';
    console.log('Player 1\'s turn');
  }
}

prompt.get(['column','row'], function(err, result){
  game.addMove(result);
});