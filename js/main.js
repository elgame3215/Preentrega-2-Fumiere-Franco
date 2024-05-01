alert( 'BlackJack: todos los jugadores juegan entre ellos, quien obtenga el mejor puntaje, gana. \nTodos comienzan con una carta' )
const players = [];
let numOfPlayers;

defineNumOfPlayers();

for ( let i = 0 ; i < numOfPlayers ; i++ ) {
	createNewPlayer();
}

players.forEach( player => {
	playTurnFor(player)
} )

showWinner()
showScores()