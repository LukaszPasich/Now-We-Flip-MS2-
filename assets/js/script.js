document.addEventListener('DOMContentLoaded', () => {

const cardArray = [
    // green cards
    {
        colour: 'green',
        name: 'rock',
        img: 'assets/images/card-green-rock.png'
    },
    {
        colour: 'green',
        name: 'rock',
        img: 'assets/images/card-green-rock.png'
    },
    {
        colour: 'green',
        name: 'rock',
        img: 'assets/images/card-green-rock.png'
    },

    {
        colour: 'green',
        name: 'paper',
        img: 'assets/images/card-green-paper.png'
    },
    {
        colour: 'green',
        name: 'paper',
        img: 'assets/images/card-green-paper.png'
    },
    {
        colour: 'green',
        name: 'paper',
        img: 'assets/images/card-green-paper.png'
    },

    {
        colour: 'green',
        name: 'scissors',
        img: 'assets/images/card-green-scissors.png'
    },
     {
        colour: 'green',
        name: 'scissors',
        img: 'assets/images/card-green-scissors.png'
    },
     {
        colour: 'green',
        name: 'scissors',
        img: 'assets/images/card-green-scissors.png'
    },

     {
        colour: 'green',
        name: 'x',
        img: 'assets/images/card-green-x.png'
    },

    // red cards

    {
        colour: 'red',
        name: 'rock',
        img: 'assets/images/card-red-rock.png'
    },
    {
        colour: 'red',
        name: 'rock',
        img: 'assets/images/card-red-rock.png'
    },
    {
        colour: 'red',
        name: 'rock',
        img: 'assets/images/card-red-rock.png'
    },

    {
        colour: 'red',
        name: 'paper',
        img: 'assets/images/card-red-paper.png'
    },
    {
        colour: 'red',
        name: 'paper',
        img: 'assets/images/card-red-paper.png'
    },
    {
        colour: 'red',
        name: 'paper',
        img: 'assets/images/card-red-paper.png'
    },

    {
        colour: 'red',
        name: 'scissors',
        img: 'assets/images/card-red-scissors.png'
    },
     {
        colour: 'red',
        name: 'scissors',
        img: 'assets/images/card-red-scissors.png'
    },
     {
        colour: 'red',
        name: 'scissors',
        img: 'assets/images/card-red-scissors.png'
    },

     {
        colour: 'red',
        name: 'x',
        img: 'assets/images/card-red-x.png'
    },
];

    // ----------------- Shuffle Cards -----------------

    cardArray.sort(() => 0.5 - Math.random());

    // ----------------- Variables -----------------

const grid = document.querySelector('.grid');
const lostCards = document.querySelectorAll("div.player-panel-background > div");

console.log(lostCards);

// record selected cards
let cardsSelectedName =[];
let cardsSelectedColour = [];
let cardsSelectedId = [];

// split recorded card values to individual card values
let firstCardColour;
let firstCardName;
let firstCardId;

let secondCardColour;
let secondCardName;
let secondCardId;

// store lost cards for winning condition
let lostGreenRock = 0;
let lostRedRock = 0;
let lostGreenPaper = 0;
let lostRedPaper = 0;
let lostGreenScissors = 0;
let lostRedScissors = 0;


    // ----------------- Display Cards (plug event listeners, display cards) -----------------

function displayCards() {
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img');
        card.setAttribute('src', 'assets/images/card-back.png');
        card.setAttribute('data-id', i);
        card.classList.add('js-card');
        card.addEventListener('click', selectCard);
        grid.appendChild(card);
    }
};

    // ----------------- Select Cards -----------------

function selectCard() {
    var cardId = this.getAttribute('data-id');
    cardsSelectedName.push(cardArray[cardId].name);
    cardsSelectedColour.push(cardArray[cardId].colour);
    cardsSelectedId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
        if (cardsSelectedName.length === 2) {
        setTimeout(compareCards, 2000);

        // need to add removeEventListener here
    }
};

// ----------------- Compare Cards -----------------

function compareCards() {
    let cards = document.querySelectorAll("div.grid > img");
    console.log(cards);

    for (var i = 0; i < cardsSelectedName.length; i++) {
        firstCardName = cardsSelectedName[0];
        secondCardName = cardsSelectedName[1];
    }

    for (var i = 0; i < cardsSelectedColour.length; i++) {
        firstCardColour = cardsSelectedColour[0];
        secondCardColour = cardsSelectedColour[1];
    }

    for (var i = 0; i < cardsSelectedId.length; i++) {
        firstCardId = cardsSelectedId[0];
        secondCardId = cardsSelectedId[1];
    }

    console.log(firstCardColour);
    console.log(firstCardName);
    console.log(firstCardId);
    console.log(secondCardColour);
    console.log(secondCardName);
    console.log(secondCardId);



    // comparing cards - draw
    if (firstCardColour[0] === secondCardColour[0] ||
        firstCardName[0] === secondCardName[0] ||
        firstCardName[0] === 'x' ||
        secondCardName[0] === 'x') {
            cards[firstCardId].setAttribute('src', 'assets/images/card-back.png');
            cards[secondCardId].setAttribute('src', 'assets/images/card-back.png');

    // comparing cards - paper beats rock
    } else if (firstCardName === 'rock' && secondCardName === 'paper' ||
        firstCardName === 'paper' && secondCardName === 'rock') {
            if (firstCardName === 'paper') {
                cards[firstCardId].setAttribute('src', 'assets/images/card-back.png');
                cards[secondCardId].setAttribute('src', 'assets/images/card-empty.png'); // perhaps also switch off Event listener
                storeLostRock(firstCardColour);
            } else {
                cards[secondCardId].setAttribute('src', 'assets/images/card-back.png');
                cards[firstCardId].setAttribute('src', 'assets/images/card-empty.png'); // perhaps also switch off Event listener
                storeLostRock(secondCardColour); 
            }

    // comparing cards - rock beats scissors    
    } else if (firstCardName === 'rock' && secondCardName === 'scissors' ||
        firstCardName === 'scissors' && secondCardName === 'rock') {
            if (firstCardName === 'rock') {
                cards[firstCardId].setAttribute('src', 'assets/images/card-back.png');
                cards[secondCardId].setAttribute('src', 'assets/images/card-empty.png'); // perhaps also switch off Event listener
                storeLostScissors(firstCardColour);
            } else {
                cards[secondCardId].setAttribute('src', 'assets/images/card-back.png');
                cards[firstCardId].setAttribute('src', 'assets/images/card-empty.png'); // perhaps also switch off Event listener
                storeLostScissors(secondCardColour);
            }
    // comparing cards - scissors beat paper
    } else if (firstCardName === 'scissors' && secondCardName === 'paper' ||
        firstCardName === 'paper' && secondCardName === 'scissors') {
        if (firstCardName === 'scissors') {
                cards[firstCardId].setAttribute('src', 'assets/images/card-back.png');
                cards[secondCardId].setAttribute('src', 'assets/images/card-empty.png'); // perhaps also switch off Event listener
                storeLostPaper(firstCardColour);
            } else {
                cards[secondCardId].setAttribute('src', 'assets/images/card-back.png');
                cards[firstCardId].setAttribute('src', 'assets/images/card-empty.png'); // perhaps also switch off Event listener
                storeLostPaper(secondCardColour);
            }
    } else {
    // remove consolelog error when sure that all conditions work
    // remove eventListeners from lost cards
    console.log('error');
    }

    cardsSelectedName =[];
    cardsSelectedColour = [];
    cardsSelectedId = [];
};


// ----------------- Count & Display Lost Cards -----------------

function storeLostRock(rock) {
    if (rock === 'green') {
        lostRedRock++
        console.log(lostRedRock);
        lostCards[8 + lostRedRock].classList.add('transparent');
    } else {
        lostGreenRock++
        console.log(lostGreenRock);
        lostCards[lostGreenRock - 1].classList.add('transparent');
    }
};

function storeLostScissors(scissors) {
    if (scissors === 'green') {
        lostRedScissors++
        console.log(lostRedScissors);
        lostCards[14 + lostRedScissors].classList.add('transparent');

    } else {
        lostGreenScissors++
        console.log(lostGreenScissors);
        lostCards[5 + lostGreenScissors].classList.add('transparent');
    }
};

function storeLostPaper(paper) {
    if (paper === 'green') {
        lostRedPaper++
        console.log(lostRedPaper);
        lostCards[11 + lostRedPaper].classList.add('transparent');
    } else {
        lostGreenPaper++
        console.log(lostGreenPaper);
        lostCards[2 + lostGreenPaper].classList.add('transparent');
    }
};

/*
function displayLostRock() {
    if (lostGreenRock === 1) {
        lostCards[0].classList.add('transparent');
    } else if (lostGreenRock === 2) {
        lostCards[1].classList.add('transparent');
    } else if (lostGreenRock === 3) {
        lostCards[2].classList.add('transparent');
    } else if (lostRedRock === 1) {
        lostCards[9].classList.add('transparent');
    } else if (lostRedRock === 2) {
        lostCards[10].classList.add('transparent');
    } else if (lostRedRock === 3) {
        lostCards[11].classList.add('transparent');
    }
};

function displayLostScissors() {
    if (lostGreenScissors === 1) {
        lostCards[6].classList.add('transparent');
    } else if (lostGreenScissors === 2) {
        lostCards[7].classList.add('transparent');
    } else if (lostGreenScissors === 3) {
        lostCards[8].classList.add('transparent');
    } else if (lostRedRock === 1) {
        lostCards[9].classList.add('transparent');
    } else if (lostRedRock === 2) {
        lostCards[10].classList.add('transparent');
    } else if (lostRedRock === 3) {
        lostCards[11].classList.add('transparent');
    }
};



/* ----------------- Display Lost Cards -----------------

function displayLostCards() {
    let lostCards = document.querySelectorAll("div.player-panel-background > div");

    for (let i = 0; i < lostCards.length; i++) {
        if (lostGreenRock === 1) {
            lostCards[0].classList.add('transparent');
        } else if (lostGreenRock === 2) {
            lostCards[1].classList.add('transparent');
        } else if (lostGreenRock === 3) {
            lostCards[2].classList.add('transparent');
        } else if (lostGreenPaper === 1) {
            lostCards[3].classList.add('transparent');
        } else if (lostGreenPaper === 2) {
            lostCards[4].classList.add('transparent');
        } else if (lostGreenPaper === 3) {
            lostCards[5].classList.add('transparent');
        } else if (lostGreenScissors === 1) {
            lostCards[6].classList.add('transparent');
        } else if (lostGreenScissors === 2) {
            lostCards[7].classList.add('transparent');
        } else if (lostGreenScissors === 3) {
            lostCards[8].classList.add('transparent');
        } else if (lostRedRock === 1) {
            lostCards[9].classList.add('transparent');
        } else if (lostRedRock === 2) {
            lostCards[10].classList.add('transparent');
        } else if (lostRedRock === 3) {
            lostCards[11].classList.add('transparent');
        } else if (lostRedPaper === 1) {
            lostCards[12].classList.add('transparent');
        } else if (lostRedPaper === 2) {
            lostCards[13].classList.add('transparent');
        } else if (lostRedPaper === 3) {
            lostCards[14].classList.add('transparent');
        } else if (lostRedScissors === 1) {
            lostCards[15].classList.add('transparent');
        } else if (lostRedScissors === 2) {
            lostCards[16].classList.add('transparent');
        } else if (lostRedScissors === 3) {
            lostCards[17].classList.add('transparent');
        } else {
        console.log(lostCards);
        }
    }
};
*/



displayCards();

console.log(cardArray);


});

