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

let cardsSelectedName =[];
let cardsSelectedColour = [];
let cardsSelectedId = [];


let firstCardColour = [];
let firstCardName = [];

let secondCardColour = [];
let secondCardName = [];


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
        setTimeout(compareCards, 1000);

        // need to add removeEventListener here
    }
};

// ----------------- Compare Cards -----------------

function compareCards() {
    console.log(cardsSelectedName);
    console.log(cardsSelectedColour);
    console.log(cardsSelectedId);

    firstCardColour.push(cardsSelectedColour[0]);
    firstCardName.push(cardsSelectedName[0]);

    secondCardColour.push(cardsSelectedColour[1]);
    secondCardName.push(cardsSelectedName[1]);

    console.log(firstCardColour);
    console.log(firstCardName);
    console.log(secondCardColour);
    console.log(secondCardName);

    // comparing cards draw condition
    if (firstCardColour[0] === secondCardColour[0] ||
        firstCardName[0] === secondCardName[0] ||
        firstCardName[0] === 'x' ||
        secondCardName[0] === 'x') {
            console.log('draw');
        } else if (firstCardName[0] === 'rock' && secondCardName[0] === 'paper' ||
            firstCardName[0] === 'paper' && secondCardName[0] === 'rock') {
            console.log('paper beats rock');
        } else if (firstCardName[0] === 'rock' && secondCardName[0] === 'scissors' ||
            firstCardName[0] === 'scissors' && secondCardName[0] === 'rock') {
            console.log('rock beats scissors');
        } else if (firstCardName[0] === 'scissors' && secondCardName[0] === 'paper' ||
            firstCardName[0] === 'paper' && secondCardName[0] === 'scissors') {
            console.log('scissors beat paper');
        } else {
        console.log('error');
        }

    firstCardColour = [];
    firstCardName = [];

    secondCardColour = [];
    secondCardName = [];
    
    cardsSelectedName =[];
    cardsSelectedColour = [];
    cardsSelectedId = [];
};



// ----------------- Outcome Draw -----------------

/*
function outcomeDraw() {
    console.log('draw');
}
*/












displayCards();

console.log(cardArray);



});

