class Player {
	constructor( id ) {
		this.id = id;
		this.cards = [Math.ceil( Math.random() * 11 )]; // el array de cartas se inicializa ya con una carta
	}
	takeCard() {
		const playerNewCard = Math.ceil( Math.random() * 11 );
		this.cards.push( playerNewCard )
	}
	score() {
		return this.cards.reduce( ( prev, next ) => prev + next )
	}
}
