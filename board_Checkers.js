
var rowChecker=function(row){
	if(row[0]+row[1]+row[2]===3){
		console.log("row condition met");
		return true;
	}
	else{
		return false;
	}
};
var checkAllRow= function(BoardMatrix){
return rowChecker(BoardMatrix[0]) || rowChecker(BoardMatrix[1]) ||  rowChecker(BoardMatrix[2]);
};

var colChecker=function(col,BoardMatrix){
	if(BoardMatrix[0][col]+ BoardMatrix[1][col] + BoardMatrix[2][col]===3){
		console.log("column condition met");
		return true;
	}
	else{
		return false;
	}
};

var checkAllCol= function(BoardMatrix){
	return colChecker(0,BoardMatrix) || colChecker (1,BoardMatrix) || colChecker(2,BoardMatrix);
};

var checkBothDiags=function(BoardMatrix){
	if(BoardMatrix[0][0] +BoardMatrix[1][1]+BoardMatrix[2][2]===3 ){
		console.log("diags condition met");
		return true;
	} else if(BoardMatrix[0][2] +BoardMatrix[1][1]+BoardMatrix[2][0]===3){
		console.log("diags condition met");
		return true;
	} else{
		return false;
	}
};

var checkIfBoardIsWinner= function(BoardMatrix){
	return checkAllRow(BoardMatrix) || checkAllCol(BoardMatrix) || checkBothDiags(BoardMatrix);
};


var checkIfWinner=function(){
	if(checkIfBoardIsWinner(BoardMatrix_Player1)){
		console.log("Player1 Wins!!!");
		alert("Player 1 Wins!!! Press Reset To Play Again!!");
		var score=Number($('.player1').attr('value'))+1;
		$('.player1').text('Player 1 Score: '+score);
		$('.player1').attr('value',score);
		$('.boardPiece').off();
		return true;
	}
	if(checkIfBoardIsWinner(BoardMatrix_Player2)){
		console.log("Player2 Wins!!!");
		alert("Player 2 Wins!!! Press Reset To Play Again!!");
		var score=Number($('.player2').attr('value'))+1;
		$('.player2').text('Player 2 Score: '+score);
		$('.player2').attr('value',score);
		$('.boardPiece').off();
		return true;
	}
};


