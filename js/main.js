alert( `BlackJack: simula una partida de BlackJack entre 2-4 jugadores. Todos los jugadores juegan entre ellos, quien obtenga el mejor puntaje, gana.
Todos comienzan con una carta` )
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