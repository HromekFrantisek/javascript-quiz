var flags = new Array();
var whichFlag;
flags[0] = 'cz.png'
flags[1] = 'sk.png'
flags[2] = 'fr.png'

var flagNames = new Array();
flagNames[0] = 'Czech Republic'
flagNames[1] = 'Slovakia'
flagNames[2] = 'France'

var correctAnswersNumber = 0;
var wrongAnswersNumber = 0;

function rollCountry() {
    var numberOfFlags = flags.length;
    whichFlag = Math.floor(Math.random() * numberOfFlags);
    return whichFlag;
}


function rollFlag(changeColor) {
    if (changeColor == 1) {
        document.body.style.backgroundColor = "white";
    }

    let flagImage = $('#flagImage');
    var currentFlag = flags[rollCountry()];
    flagImage.attr('src', `/img/flags/${currentFlag}`);
}

function rightAnwer() {
    document.body.style.backgroundColor = "#69a832";
    correctAnswersNumber++;
    document.getElementById("correctAnswers").innerHTML = `${correctAnswersNumber}`;
    document.getElementById('userInput').value = '';
    rollFlag();
}

function incorrectAnswer() {
    wrongAnswersNumber++;
    document.getElementById("wrongAnswers").innerHTML = `${wrongAnswersNumber}`;
    document.body.style.backgroundColor = "#ff6347";
    $("#flagImage").effect("shake");
}

function checkAnswer() {
    var correctAnswer = flagNames[whichFlag].toLowerCase();
    var guessedAnswer = document.getElementById('userInput').value.toLowerCase();

    if (correctAnswer != guessedAnswer) {
        incorrectAnswer()
    } else if (correctAnswer == guessedAnswer) {
        rightAnwer();
    }
}

$(document).ready(function() {
    rollFlag();

    $('#roll').click(function() {
        rollFlag(1);
    });

    $('#check').click(function() {
        checkAnswer();
    });

    $(document).on('keypress', function(e) {
        if (e.which == 13) {
            checkAnswer();
        }
    });
});