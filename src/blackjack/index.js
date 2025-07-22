import _ from 'underscore';
import { createDeck, drawCard, cardValue, computerTurn, createCardHTML } from './usecases';

/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck = [];
const suits = ['C', 'D', 'H', 'S'];
const specials = ['A', 'J', 'Q', 'K'];

let playerPoints = 0,
    computerPoints = 0;

// HTML References
const btnDraw   = document.querySelector('#btnDraw');
const btnStop   = document.querySelector('#btnStop');
const btnNew    = document.querySelector('#btnNew');

const divPlayerCards     = document.querySelector('#player-cards');
const divComputerCards   = document.querySelector('#computer-cards');

const pointsHTML = document.querySelectorAll('small');

deck = createDeck(suits, specials);

// Events
btnDraw.addEventListener('click', () => {

    const card = drawCard(deck);

    playerPoints = playerPoints + cardValue(card);
    pointsHTML[0].innerText = playerPoints;

    const imgCard = createCardHTML(card);
    divPlayerCards.append(imgCard);

    if (playerPoints > 21) {
        console.warn('Sorry, you lost');
        btnDraw.disabled = true;
        btnStop.disabled = true;
        computerTurn(playerPoints, pointsHTML[1], divComputerCards, deck);

    } else if (playerPoints === 21) {
        console.warn('21, great!');
        btnDraw.disabled = true;
        btnStop.disabled = true;
        computerTurn(playerPoints, pointsHTML[1], divComputerCards, deck);
    }

});

btnStop.addEventListener('click', () => {
    btnDraw.disabled   = true;
    btnStop.disabled = true;

    computerTurn(playerPoints, pointsHTML[1], divComputerCards, deck);
});

btnNew.addEventListener('click', () => {

    console.clear();
    deck = [];
    deck = createDeck(suits, specials);

    playerPoints = 0;
    computerPoints = 0;

    pointsHTML[0].innerText = 0;
    pointsHTML[1].innerText = 0;

    divComputerCards.innerHTML = '';
    divPlayerCards.innerHTML = '';

    btnDraw.disabled   = false;
    btnStop.disabled = false;

});
