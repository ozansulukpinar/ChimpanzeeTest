var random;
var randomArray = [];
var index = idValue = 0;
var niveau = 1;

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
    randomArray.forEach(element => {
      $('#' + element).css("background-color", "black")
      $('#' + element).addClass("number")
      $('#' + element).text("")
    });
    
    $('#main').on('click', '.number', function(){
        var currentID = $(this).attr('id');

        if (currentID != randomArray[index]) {
            alert("Ooops! Try again!");
            location.reload();
        }
        else {
            $('#' + currentID).css("background-color", "white");
            index++;
        }

        if (index == 10) {
            alert("Good memory! Congrulations!");
            niveau++;
            location.reload();
        }
    });
    
    $("#StartButton").prop('disabled', true);
});

function setABox(){
    for(var i = 1; i <= niveau; i++){
    fillTheBox(i);
    }
}

function fillTheBox(value){
  random = Math.floor(Math.random() * 99);  
  var isItInArray = randomArray.includes(random);
  
  if(isItInArray){
    fillTheBox(value);
  }
  else{
    randomArray.push(random);
    $("#" + random).text(value);
  }
  
  if(randomArray.length == 10){
    return;
  }
}
