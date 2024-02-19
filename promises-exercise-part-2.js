
let baseURL = 'https://deckofcardsapi.com/api/deck';

// 1.
$.getJSON(`${baseURL}/new/shuffle/?deck_count=1`)
    .then(data => {
    return $.getJSON(`${baseURL}/${data.deck_id}/draw/?count=1`);
    })
    .then(card => {
        console.log(`${card.cards[0].value} of ${card.cards[0].suit}`);
        return card;
    })
    ;

    // 2.

$.getJSON(`${baseURL}/new/shuffle/?deck_count=1`)
    .then(data => {
    return $.getJSON(`${baseURL}/${data.deck_id}/draw/?count=1`);
    })
    .then(firstCard => {
        console.log(`${firstCard.cards[0].value} of ${firstCard.cards[0].suit}`);
        return $.getJSON(`${baseURL}/${firstCard.deck_id}/draw/?count=1`);
    })
    .then(secondCard => {
        console.log(`${secondCard.cards[0].value} of ${secondCard.cards[0].suit}`);
    });

3.  