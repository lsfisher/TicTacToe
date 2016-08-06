var displayBoard= function(){
	console.log('*************');
	console.log('Whole Board');
	BoardMatrix.forEach(function(row){
	console.log(String(row));
	console.log('\n');
	});
	console.log('*************');
	console.log('*************');
	console.log('Player1');
	BoardMatrix_Player1.forEach(function(row){
	console.log(String(row));
	console.log('\n');
	});
	console.log('*************');
	console.log('*************');
	console.log('Player2');
	BoardMatrix_Player2.forEach(function(row){
	console.log(String(row));
	console.log('\n');
	});
	console.log('*************');
};

var switchPlayer=function(){
	if(Player==="Player1"){
		Player="Player2";
	} else{
		Player="Player1";
	}
	$('.player').text(Player);
};