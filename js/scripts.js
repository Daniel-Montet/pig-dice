//UI LOGIC
var maxscore=100
var scoreboard1= 0
var currentscore1=0
var turnscore1=0
var scoreboard2= 0
var currentscore2=0
var turnscore2=0
$(document).ready(function(){
  var name1=''
  var name2=''
  var hold1=''
  var hold2=''
 // alert(hold1)
  $('#avatar1btn').click(function(){
    name1=$('#avatar1name').val();
    getname1(name1);

  })

  $('#avatar2btn').click(function(){
    name2=$('#avatar2name').val();
    getname2(name2)
  })

  $("#hold1").click(function(){
    $('#avatar1roll').hide();
    $('#avatar2roll').show();
    $("#turn").text("Its "+name2+ "'s turn")
    hold1=true
    rollPlayer1(name1,hold1)

  })

  $("#avatar1roll").click(function(){
  //  console.log(name1+" " + hold1)

    rollPlayer1(name1,hold1)

  })
  $("#avatar2roll").click(function(){
    //console.log(name2+" " + hold2)
    rollPlayer2(name2,hold2)


  })
  $("#hold2").click(function(){
    $('#avatar2roll').hide();
    $('#avatar1roll').show();
    $("#turn").text("Its "+name1+ "'s turn")
     hold2=true
     rollPlayer2(name2,hold2)
  })
  $("#next").click(function(){
    $("#page2").show()
    $("#page1").hide()
  })

})

function getname1(name1){//CAPTURE PLAYER ONE NAME
    player1= new Avatar1(name1)
    $('#player1name').text(player1.avatar1)
    return player1
}

function getname2(name2){///CAPTURE PLAYER 2 NAME
    var player2= new Avatar2(name2)
    $('#player2name').text(player2.avatar2)
    return player2
}




function rollPlayer1(name1,hold1){//CALCULATE ROLL FUNCTIONALITY FOR AVATARS
    this.name=name1
    this.hold=hold1
    this.currentscore=0
    this.turnscore=turnscore1
    this.scoreboard=scoreboard1

    turnscore1=Math.floor(Math.random()*6)+1;
    $('#player1rollscore').text(turnscore1)
    if(scoreboard1===maxscore){////display win
        $('#player1scoreboard').text("You win, you hit " + this.scoreboard1)
        return
    }
    if(currentscore1<maxscore && this.hold===true){
      this.hold=false
      $('#avatar2roll').show();
        scoreboard1+=currentscore1
  //      alert(scoreboard1)
        currentscore1-=currentscore1
        $('#player1currentscore').text("its players 2 turn and the current round score is "+currentscore1)
       $('#player1scoreboard').text("player1 scoreboard score " + scoreboard1)



    }
    if(turnscore1!=1){
        currentscore1+=turnscore1

        $('#player1currentscore').text("Player1 current round score "+currentscore1)

    }
    if(turnscore1==1){

      $("#turn").text("Its player2's turn")
      $('#avatar1roll').hide();
      $('#avatar2roll').show();
        currentscore1-=currentscore1
        $('#player1currentscore').text("Player1 hit a 1 and current round score is "+currentscore1)

    }



}


function rollPlayer2(name2,hold2){//CALCULATE ROLL FUNCTIONALITY FOR AVATARS
    this.name=name2
    this.hold=hold2
    this.currentscore=currentscore2
    this.turnscore=turnscore2
    this.scoreboard=scoreboard2

    turnscore2=Math.floor(Math.random()*6)+1;
    $('#player2rollscore').text("Player2 rollscore = " +turnscore2)
    if(scoreboard2===maxscore){////display win
        $('#player2scoreboard').text("You win, you hit " + this.scoreboard2)
        return
    }
    if(currentscore2<maxscore && this.hold===true){
      this.hold=false
      $('#avatar1roll').show();
        scoreboard2+=currentscore2
        currentscore2-=currentscore2
        $('#player2currentscore').text("its players 1 turn and the current round score is "+currentscore2)
       $('#player2scoreboard').text("player2 scoreboard score " + this.scoreboard2)



    }
    if(turnscore2!=1){
        currentscore2+=turnscore2
        $('#player2currentscore').text("Player2 current round score "+currentscore2)

    }
    if(turnscore2==1){
      $('#avatar2roll').hide();
      $("#turn").text("Its player1's turn")
      $('#avatar1roll').show();
        currentscore2-=currentscore2
        $('#player2currentscore').text("Player2 hit a 1 and current round score is "+currentscore2)

    }

}

//BUSINESS LOGIC

class Player{
    constructor(name){
        this.name=name
    }
//INSTANCE METHODS
    name(){
        return this.name
    }

}

class Avatar1 extends Player{//DESCRIBE PROPERTIES OF AVATAR 1

    constructor(avatar1){
        super(name)
        this.avatar1=avatar1
    }
    avatar1(){
        return this.avatar1
    }


}
class Avatar2 extends Player{//DESCRIBE PROPERTIES OF AVATAR 2

    constructor(avatar2){
        super(name)
       this.avatar2=avatar2
   }

    avatar2(){
        return this.avatar2
    }

}
