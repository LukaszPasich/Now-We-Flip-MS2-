document.addEventListener('DOMContentLoaded', () => {

const cardArray = [
    {
        name: 'grock',
        img: 'assets/images/card-green-rock.png'
    },
    {
        name: 'grock',
        img: 'assets/images/card-green-rock.png'
    },
    {
        name: 'grock',
        img: 'assets/images/card-green-rock.png'
    },

    {
        name: 'gpaper',
        img: 'assets/images/card-green-paper.png'
    },
    {
        name: 'gpaper',
        img: 'assets/images/card-green-paper.png'
    },
    {
        name: 'gpaper',
        img: 'assets/images/card-green-paper.png'
    },

    {
        name: 'gscissors',
        img: 'assets/images/card-green-scissors.png'
    },
    {
        name: 'gscissors',
        img: 'assets/images/card-green-scissors.png'
    },
    {
        name: 'gscissors',
        img: 'assets/images/card-green-scissors.png'
    },

    {
        name: 'gx',
        img: 'assets/images/card-green-x.png'
    },

    {
        name: 'rrock',
        img: 'assets/images/card-red-rock.png'
    },
    {
        name: 'rrock',
        img: 'assets/images/card-red-rock.png'
    },
    {
        name: 'rrock',
        img: 'assets/images/card-red-rock.png'
    },

    {
        name: 'rpaper',
        img: 'assets/images/card-red-paper.png'
    },
    {
        name: 'rpaper',
        img: 'assets/images/card-red-paper.png'
    },
    {
        name: 'rpaper',
        img: 'assets/images/card-red-paper.png'
    },

    {
        name: 'rscissors',
        img: 'assets/images/card-red-scissors.png'
    },
    {
        name: 'rscissors',
        img: 'assets/images/card-red-scissors.png'
    },
    {
        name: 'rscissors',
        img: 'assets/images/card-red-scissors.png'
    },

    {
        name: 'rx',
        img: 'assets/images/card-red-x.png'
    }
];

let grid = document.querySelector('.grid');
let cardsSelected =[];
let cardsSelectedId = [];


    // ----------------- Display Cards (shuffle, plug event listeners, display cards) -----------------

function displayCards() {
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img');
        card.setAttribute('src', 'assets/images/card-back.png');
        card.setAttribute('data-id', i);
        card.classList.add('js-card');
        card.addEventListener('click', selectCard);
        grid.appendChild(card);
    }
}

    // ----------------- Select Cards -----------------

    function selectCard() {
        var cardId = this.getAttribute('data-id');
        cardsSelected.push(cardArray[cardId].name);
        cardsSelectedId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(compareCards, 1000)
        }
}


displayCards();



});









/*

console.log("hello js");

// 1. Start the Game //

// 2. Shuffle Cards On-Load & On-Play Again //

// 3. Plug Event Listeners //
function cardSelected() {
    console.log('card clicked');
}

let cards = document.getElementsByClassName("card");
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', cardSelected);
}


// 4. Select 2 Cards //

// 5. Compare 2 Cards //

// 6a. Display Neutral Pair Outcome > Switch Active Player //

/* 6b. Display Matching Pair Outcome
   scenario A - Green Rock v Red Paper
   scenario B - Green Rock v Red Scissors
   scenario C - Green Paper v Red Rock
   scenario D - Green Paper v Red Scissors
   scenario E - Green Scissors v Red Rock
   scenario F - Green Scissors v Red Paper
*/

// 7. Check Winning Condition //

// 8a. Winning Message //

// 8b. Mark Game Status > Switch Active Player //
