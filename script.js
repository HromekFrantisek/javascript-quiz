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

function checkAnswer() {
    var correctAnswer = flagNames[whichFlag];
    var guessedAnswer = document.getElementById('userInput').value;
    if (correctAnswer != guessedAnswer) {
        wrongAnswersNumber++;
        document.getElementById("wrongAnswers").innerHTML = `${wrongAnswersNumber}`;
        document.body.style.backgroundColor = "#ff6347";
    } else if (correctAnswer == guessedAnswer) {
        document.body.style.backgroundColor = "#69a832";
        correctAnswersNumber++;
        document.getElementById("correctAnswers").innerHTML = `${correctAnswersNumber}`;
        document.getElementById('userInput').value = '';
        rollFlag();
    }
}

$(document).ready(function() {
    rollFlag();
    document.getElementsByClassName('correctAnswers').innerHTML = 'bruh';

    $('#roll').click(function() {
        rollFlag(1);
    });

    $('#check').click(function() {
        checkAnswer();
    });
});