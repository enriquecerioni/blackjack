import _ from 'underscore';

/**
 * This function creates a new deck
 * @param {Array<String>} suits Example: ['C','D','H','S'];
 * @param {Array<String>} specials Example: ['A','J','Q','K'];
 * @returns {Array<String>} returns a new deck of cards
 */
export const createDeck = (suits, specials) => {

    if (!suits || suits.length === 0)
        throw new Error('suits is required as an array of strings');

    if (!specials || specials.length === 0)
        throw new Error('specials is required as an array of strings');


    let deck = [];

    for (let i = 2; i <= 10; i++) {
        for (let suit of suits) {
            deck.push( i + suit);
        }
    }

    for (let suit of suits) {
        for (let special of specials) {
            deck.push( special + suit);
        }
    }

    deck = _.shuffle( deck );
    return deck;
}