var randomArray = [];
var index = idValue = 0;
var level = 4;
var strikes = 0;

drawTable();

function drawTable() {
    var elements = document.getElementsByTagName('table');
    var table = elements[0];

    for (var k = 0; k < 10; k++){
        var tr = document.createElement('tr');

        for (var l = 0; l < 10; l++){
            var th = document.createElement('th');
            th.className = 'box';
            th.id = idValue;
            tr.appendChild(th);
            idValue++;
        }

        table.appendChild(tr);
    }

    $(".box").text("");
}

setABox();

$("#StartButton").click(function () { 
    randomArray = [];
    setABox();
    playSequence();
    $("#StartButton").prop('disabled', true);
});

$('#main').on('click', '.box', function(){
    var currentID = $(this).attr('id');

    if (currentID != randomArray[index]) {
        strikes++;
        if (strikes === 3) {
            alert("🤕 Perdu ! Fautes: " + strikes);
            resetGame();
        } else {
            alert("😓 Oups! Fautes: " + strikes);
            index = 0;
            playSequence();
        }
    } else {
        $('#' + currentID).css("background-color", "white");
        index++;

        if (index === randomArray.length) {
            level++;
            alert("😁 Pas mal ! Niveau: " + level);
            index = 0;
            playSequence();
        }
    }
});

function setABox(){
    for(var i = 1; i <= 10; i++){
        fillTheBox(i);
    }
}

function fillTheBox(value){
    var random = Math.floor(Math.random() * 100);  
    var isItInArray = randomArray.includes(random);
  
    if(isItInArray){
        fillTheBox(value);
    }
    else{
        randomArray.push(random);
        $("#" + random).text(value);
    }
  
    if(randomArray.length === level){
        return;
    }
}

function playSequence() {
    randomArray.forEach(element => {
        $('#' + element).css("background-color", "black");
        $('#' + element).addClass("number");
        $('#' + element).text("");
    });

    setTimeout(function () {
        randomArray.forEach(element => {
            $('#' + element).css("background-color", "white");
            $('#' + element).removeClass("number");
            $('#' + element).text(element);
        });
    }, 2000);
}

function resetGame() {
    randomArray = [];
    index = 0;
    level = 4;
    strikes = 0;
    $(".box").text("");
    $("#StartButton").prop('disabled', false);
}
