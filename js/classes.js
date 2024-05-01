class Player {
    constructor( id, cards ) {
        this.id = id;
        this.cards = cards;
    }
    takeCard() {
        const playerNewCard = Math.ceil( Math.random() * 11 );
        this.cards.push( playerNewCard )
        this.score = this.cards.reduce( ( prev, next ) => prev + next );
    }
}
