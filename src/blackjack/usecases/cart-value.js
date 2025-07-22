/**
 * This function evaluates the value of a card
 * @param {String} card 
 * @returns {Number} returns the score of the card
 */
export const cardValue = (card) => {
    
    const value = card.substring(0, card.length - 1);
    return (isNaN(value)) ? 
            (value === 'A') ? 11 : 10
            : value * 1;
}