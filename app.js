
var scores, roundScore, activePlayer, dice, gamePlaying;

init();

var lastDice;

document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {

        var dice1 = Math.floor(Math.random() * 6) + 1;//Rondomize number 1-6 for dice.
        var dice2 = Math.floor(Math.random() * 6) + 1;//Rondomize number 1-6 for dice.

        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-1').src = 'dice-' + dice2 + '.png';

        if (dice1 !== 1 || dice1 !== 1) {
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }

        /*
                if (dice == 6 && lastDice == 6) {
                    scores[activePlayer] = 0;
                    document.querySelector('#score-' + activePlayer).textContent = '0';
                    document.querySelector('#current-' + activePlayer).textContent = '0';
                    nextPlayer();
                } else if (dice !== 1) {
                    roundScore += dice;
                    document.querySelector('#current-' + activePlayer).textContent = roundScore;
                } else {
                    nextPlayer();
                }
        lastDice = dice;
            */
    }

});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        scores[activePlayer] += roundScore;//add round score to main score 

        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        var input = document.querySelector('.final-score').value;
        //undefined,0,null or "" it will be null
        if (input) {
            var winningScore = input;
        } else {
            winningScore = 100
        }

        if (scores[activePlayer] >= winningScore) { //we have a winner
            document.querySelector('#name-' + activePlayer).textContent = 'Winner !'
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;//game finished.
        } else {
            nextPlayer();
        }
    }

});

document.querySelector('.btn-new').addEventListener('click', init);


/**
 * Initializing game
 */
function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;//game started.

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}

function nextPlayer() {

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
}

//hide dices

