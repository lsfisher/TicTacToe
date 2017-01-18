//Lucas Fisher
var BoardMatrix=createEmptyMatrix();

var BoardMatrix_Player1=createEmptyMatrix();

var BoardMatrix_Player2=createEmptyMatrix();


var $container=$('#container');

for(var i=0;i<3;i++){
	for(var j=0;j<3;j++){
		let $newDiv=$('<div></div>');
		let row=i;
		let col=j;
		//$newDiv.text('BoardPiece');
		$newDiv.addClass('boardPiece');
		$newDiv.appendTo($container);

		$newDiv.on('click', function(){
			//$newDiv.css('background-color','red');

			BoardMatrix[row][col]=1;
			if(Player=="Player1"){
				BoardMatrix_Player1[row][col]=1;
				//$newDiv.css('background-color','red');
				$newDiv.css('background-image','url(\'images/X.png\')');
				$newDiv.css('background-size','cover');
			}
			if(Player=="Player2"){
				BoardMatrix_Player2[row][col]=1;
				//$newDiv.css('background-color','green');
				$newDiv.css('background-image','url(\'images/O.png\')');
				$newDiv.css('background-size','cover');
			}

			displayBoard();
			console.log( checkIfWinner() );
			switchPlayer();
			console.log(Player);
			$(this).off();
		});
	}
	$('<br>').appendTo($container);
}

var Player="Player1";
var $Player=$('<div><div>');
$Player.text("Player1");
$Player.addClass('player');
$Player.prependTo($container);
console.log(Player);

$('#resetButton').on('click', function(){
$('#container').html('');



BoardMatrix=createEmptyMatrix();

BoardMatrix_Player1=createEmptyMatrix();

BoardMatrix_Player2=createEmptyMatrix();


for(var i=0;i<3;i++){
	for(var j=0;j<3;j++){
		let $newDiv=$('<div></div>');
		let row=i;
		let col=j;
		//$newDiv.text('BoardPiece');
		$newDiv.addClass('boardPiece');
		$newDiv.appendTo($container);

		$newDiv.on('click', function(){
			//$newDiv.css('background-color','red');

			BoardMatrix[row][col]=1;
			if(Player=="Player1"){
				BoardMatrix_Player1[row][col]=1;
				//$newDiv.css('background-color','red');
				$newDiv.css('background-image','url(\'images/X.png\')');
				$newDiv.css('background-size','cover');
			}
			if(Player=="Player2"){
				BoardMatrix_Player2[row][col]=1;
				//$newDiv.css('background-color','green');
				$newDiv.css('background-image','url(\'images/O.png\')');
				$newDiv.css('background-size','cover');
			}
			displayBoard();
			console.log( checkIfWinner() );
			switchPlayer();
			console.log(Player);
			$(this).off();
		});
	}
	$('<br>').appendTo($container);
}

Player="Player1";
var $Player=$('<div><div>');
$Player.text("Player 1");
$Player.addClass('player');
$Player.prependTo($container);
});







