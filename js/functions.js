function defineNumOfPlayers() {
	let validation;
	do {
		numOfPlayers = prompt('Ingresar numero de jugadores (hasta 4)');
		validation = 1 < numOfPlayers && numOfPlayers < 5;
		if (!validation) {
			alert('Ingrese un numero entre 2 y 4');
			continue
		}
	} while ( !validation );
}

function createNewPlayer() {
	const newPlayer = new Player( players.length + 1, [] );
	players.push(newPlayer);
}

function playTurnFor(player) {
	player.takeCard();
	let playerStands = false;
	do {
		const playerTakesCard = confirm( `Jugador ${ player.id } va a pedir carta? Puede pedir: ${( 4 - player.cards.length )}\nPUNTAJE: ${ player.score }` );

		if ( playerTakesCard ){
			player.takeCard();
			alert( `El jugador ${player.id} obtuvo un ${player.cards[player.cards.length - 1]}` )
		}
		else {
			playerStands = true;
		}
	} while ( !playerStands && player.cards.length < 4 && player.score < 21 );

	showPlayerResult(player)
}

function showPlayerResult(player) {
	if (player.score <= 21) {
		alert( `El jugador ${player.id} ha obtenido un puntaje de: ${player.score}` )
	} else {
		alert( `El jugador ${player.id} ha obtenido un puntaje de: ${player.score}, se pasó` )
	}
}

function showWinner() {
	players.sort( (prev, next) => next.score - prev.score )
	const winner = players.find( player => player.score <= 21 )
	if (winner == undefined) {
		alert( 'Todos se pasaron' )
	}
	alert(`ganador: jugador ${winner.id} con ${winner.score} puntos`)
}

function showScores() {
	const scoresArr = players.map( player => `Jugador ${player.id}: ${player.score} ${player.score > 21 ? '(se pasó)': ''}`)
	const scores = scoresArr.join('\n')
	alert(`PUNTAJES:\n${scores}`)
}