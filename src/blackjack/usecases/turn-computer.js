import { createCardHTML, drawCard, cardValue } from "./";

/**
 * 
 * @param {Number} minPoints Minimum points the computer needs to win
 * @param {HTMLElement} pointsHTML HTML element to display the points
 * @param {HTMLElement} divComputerCards HTML element to display the computer's cards
 * @param {Array<String>} deck 
 */
export const computerTurn = (minPoints, pointsHTML, divComputerCards, deck = []) => {

    if (!minPoints) throw new Error('minPoints is required');
    if (!pointsHTML) throw new Error('pointsHTML argument is required');

    let computerPoints = 0;

    do {
        const card = drawCard(deck);

        computerPoints = computerPoints + cardValue(card);
        pointsHTML.innerText = computerPoints;
        
        const imgCard = createCardHTML(card);
        divComputerCards.append(imgCard);

        if (minPoints > 21) {
            break;
        }

    } while ((computerPoints < minPoints) && (minPoints <= 21));

    setTimeout(() => {
        if (computerPoints === minPoints) {
            alert('Nobody wins :(');
        } else if (minPoints > 21) {
            alert('Computer wins');
        } else if (computerPoints > 21) {
            alert('Player wins');
        } else {
            alert('Computer wins');
        }
    }, 100);
}
