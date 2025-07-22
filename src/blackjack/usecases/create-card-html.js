/**
 * 
 * @param {String} card
 * @returns {HTMLImageElement} returns the card image element
 */
export const createCardHTML = (card) => {

    if (!card) throw new Error('Card is a required argument.');

    const imgCard = document.createElement('img');
    imgCard.src = `assets/cartas/${card}.png`; // 3H, JD
    imgCard.classList.add('cards');

    return imgCard;
}