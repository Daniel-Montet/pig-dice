//var player1=prompt("Enter player 1 name")
//var player2=prompt("Enter player 2 name")

var maxscore=100
var scoreboard= 0
var currentscore=0
var turnscore=0
//var hold=true
//var rollingorhold=[rollPlayer1(),rollPlayer2()]


function rollPlayer1(){
    turnscore=Math.floor(Math.random()*6)+1;
    if(turnscore!=1){
        currentscore+=turnscore
    }
    else{
        currentscore-=currentscore
    }
    console.log(currentscore)
}

function rollPlayer2(){
    turnscore=Math.floor(Math.random()*6)+1;
    if(turnscore!=1){
        currentscore+=turnscore
    }
    else{
        currentscore-=currentscore
    }
    console.log(currentscore)
}
