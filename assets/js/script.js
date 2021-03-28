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

let grid = document.querySelector('.grid');
let result = document.getElementById('result');
let lostCards = document.querySelectorAll("div.player-panel-background > div");

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

// store points
let points = 0;
let pointsDisplayed = points.toString();
result.textContent = pointsDisplayed;


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


    // ----------------- Display Points -----------------

function displayPoints() {
    pointsDisplayed = points.toString();
    result.textContent = pointsDisplayed;
};


    // ----------------- Select Cards -----------------

function selectCard() {
    var cardId = this.getAttribute('data-id');
    cardsSelectedName.push(cardArray[cardId].name);
    cardsSelectedColour.push(cardArray[cardId].colour);
    cardsSelectedId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
        if (cardsSelectedName.length === 2) {
        setTimeout(compareCards, 1750);

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
            points--
            displayPoints();

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
        lostRedRock++  // add lost card
        console.log(lostRedRock);
        lostCards[8 + lostRedRock].classList.add('transparent');
        points += 3
        displayPoints();
    } else {
        lostGreenRock++  // add lost card
        console.log(lostGreenRock);
        lostCards[lostGreenRock - 1].classList.add('transparent');
        points -= 2
        displayPoints();
    }
    checkForWin();
};

function storeLostScissors(scissors) {
    if (scissors === 'green') {
        lostRedScissors++  // add lost card
        console.log(lostRedScissors);
        lostCards[14 + lostRedScissors].classList.add('transparent');
        points += 3
        displayPoints();

    } else {
        lostGreenScissors++  // add lost card
        console.log(lostGreenScissors);
        lostCards[5 + lostGreenScissors].classList.add('transparent');
        points -= 2
        displayPoints();
    }
    checkForWin();
};

function storeLostPaper(paper) {
    if (paper === 'green') {
        lostRedPaper++  // add lost card
        console.log(lostRedPaper);
        lostCards[11 + lostRedPaper].classList.add('transparent');
        points += 3
        displayPoints();
    } else {
        lostGreenPaper++   // add lost card
        console.log(lostGreenPaper);
        lostCards[2 + lostGreenPaper].classList.add('transparent');
        points -= 2
        displayPoints();
    }
    checkForWin();
};

// ----------------- Check for Winning Condition -----------------

function checkForWin() {
    if (lostRedRock + lostRedPaper === 6 ||
        lostRedRock + lostRedScissors === 6 ||
        lostRedPaper + lostRedScissors === 6) {
        document.getElementById('win-message').style.visibility='visible';
        document.getElementById('points-win').innerHTML = pointsDisplayed;
    } else if
        (lostGreenRock + lostGreenPaper === 6 ||
        lostGreenRock + lostGreenScissors === 6 ||
        lostGreenPaper + lostGreenScissors === 6) {
        document.getElementById('lose-message').style.visibility='visible';
        document.getElementById('points-lose').innerHTML = pointsDisplayed;
        }
};


displayCards();

});

