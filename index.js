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

TicGame.prototype.checkWinner = function(){
  function checkHorizontal(){
    for(var i = 0; i < this._board.length; i++){
      if(this._board[i][0] === this._board[i][1] && this._board[i][1] === this._board[i][2]){
        return this._board[i][0] === 'X'
          ? {win: true, player: 'X'}
          : {win: true, player: 'O'}
      } else {
        return false;
      }
    }
  };
  function checkVertical(){
    for(var i = 0; i < this._board.length; i++){
      
    }
  };
  function checkDiagonal(){

  };

  if(checkHorizontal() || checkVertical() || checkDiagonal()){
    return 'Winner winner';
  }
}

prompt.get(['column','row'], function(err, result){
  game.addMove(result);
});