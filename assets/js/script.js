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
// const cards = document.querySelectorAll("img");

// console.log(cards);

let cardsSelectedName =[];
let cardsSelectedColour = [];
let cardsSelectedId = [];


let firstCardColour;
let firstCardName;
let firstCardId;

let secondCardColour;
let secondCardName;
let secondCardId;


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
    var cards = document.querySelectorAll("div.grid > img");
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
            } else {
                cards[secondCardId].setAttribute('src', 'assets/images/card-back.png');
                cards[firstCardId].setAttribute('src', 'assets/images/card-empty.png'); // perhaps also switch off Event listener  
            }

    // comparing cards - rock beats scissors    
    } else if (firstCardName === 'rock' && secondCardName === 'scissors' ||
        firstCardName === 'scissors' && secondCardName === 'rock') {
        outcomeRockScissors();
    } else if (firstCardName === 'scissors' && secondCardName === 'paper' ||
        firstCardName === 'paper' && secondCardName === 'scissors') {
        outcomePaperScissors();
    } else {
    // remove consolelog error when sure that all conditions work
    console.log('error');
    }

    cardsSelectedName =[];
    cardsSelectedColour = [];
    cardsSelectedId = [];
};






displayCards();

console.log(cardArray);


});

