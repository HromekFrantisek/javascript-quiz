var flags = new Array();

flags[0] = 'cz.png'
flags[1] = 'sk.png'
flags[2] = 'fr.png'



function rollFlag() {
    let flag = $('.flag');
    var numberOfFlags = flags.length;
    var whichFlag = Math.floor(Math.random() * numberOfFlags);
    var currentFlag = flags[whichFlag];

    flag.attr('src', `/img/flags/${currentFlag}`) //How to add the generated path ?
    console.log(currentFlag);
}

$(document).ready(function() {
    $('.roll').click(function() {
        rollFlag();
    });
});