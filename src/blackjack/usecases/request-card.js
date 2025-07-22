/**
 * This function draws a card from the deck
 * @param {Array<String>} deck an array of strings
 * @returns {string} returns a card
 */
export const drawCard = (deck) => {

    if (deck.length === 0) {
        throw new Error('There are no cards in the deck');
    }
    const card = deck.pop();
    return card;
}