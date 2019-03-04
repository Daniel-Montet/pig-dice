$(document).ready(function(){
  var name1=''
  var name2=''
  var hold1=''
  var hold2=''
  $('#avatar1btn').click(function(event){
    name1=$('#avatar1name').val();
    getname1(name1);
  })

  $('#avatar2btn').click(function(){
    name2=$('#avatar2name').val();
    getname2(name2)
  })

  $("#hold1").click(function(){
    hold1=true
    console.log("Its players two turn")
  })

  $("#avatar1roll").click(function(){
    console.log(name1+" " + hold1)

    rollPlayer1(name1,hold1,name2,hold2)

  })
  $("#avatar2roll").click(function(){
    console.log(name2+" " + hold2)
    rollPlayer2(name1,hold1,name2,hold2)


  })
  $("#hold2").click(function(){
    console.log("Its players one turn")
    hold2=true
  })

})

function getname1(name1){//CAPTURE PLAYER ONE NAME
    player1= new Avatar1(name1)
    $('#player1name').text("This is your corner " + player1.avatar1)
    return player1
}

function getname2(name2){///CAPTURE PLAYER 2 NAME
    var player2= new Avatar2(name2)
    $('#player2name').text("This is your corner " + player2.avatar2)
    return player2
}



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
  //      this.avatar2=avatar2
    }
    avatar1(){
        return this.avatar1
    }
  //  avatar2(){
  //      return this.avatar2
    //}

}
class Avatar2 extends Player{//DESCRIBE PROPERTIES OF AVATAR 2

    constructor(avatar2){
        super(name)
    //    this.avatar1=avatar1
       this.avatar2=avatar2
   }
  //  avatar1(){
  //      return this.avatar1
    //}
    avatar2(){
        return this.avatar2
    }

}


///console.log(avatar1.avatar1())
//console.log(avatar2.avatar2())
//var av=new Avatar("brian","kennedy")
//var player1=(av.avatar1)
//var player2=(av.avatar2)
var maxscore=100
var scoreboard1= 0
var currentscore1=0
var turnscore1=0
var scoreboard2= 0
var currentscore2=0
var turnscore2=0

function rollPlayer1(name1,hold1,name2,hold2){//CALCULATE ROLL FUNCTIONALITY FOR AVATARS
    this.name=name1
    this.hold=false
    this.currentscore=0
    this.turnscore=turnscore1
    this.scoreboard=scoreboard1

    turnscore1=Math.floor(Math.random()*6)+1;
    console.log("Player1 turnscore = " +turnscore1)
    if(currentscore1<maxscore && hold1===true){
        scoreboard1+=currentscore1
        currentscore1-=currentscore1
        console.log("its players 2 turn and the currentscore is "+currentscore1)
       // return hold1=false
       // rollPlayer2(name2,hold2)
       console.log("player1 scoreboard score " + this.scoreboard1)
        


    }
    if(turnscore1!=1){
        currentscore1+=turnscore1
        console.log("Player1 current round score "+currentscore1)
             
    }
    if(turnscore1==1){
        currentscore1-=currentscore1
        console.log("Player1 hit a 1 and current round score is "+currentscore1)
             
    } 
    if(scoreboard1===maxscore){////display win
        console.log("you win")
        return
    }
    
    
}


function rollPlayer2(name1,hold1,name2,hold2){//CALCULATE ROLL FUNCTIONALITY FOR AVATARS
    this.name=name2
    this.hold=false
    this.currentscore=currentscore2
    this.turnscore=turnscore2

    turnscore2=Math.floor(Math.random()*6)+1;
    console.log("Player2 turnscore = " +turnscore2)
    if(currentscore2<maxscore && hold2===true){
        scoreboard2+=currentscore2
        currentscore2-=currentscore2
        console.log("its players 1 turn and the currentscore is "+currentscore2)
       console.log("player2 scoreboard score " + this.scoreboard2)
        


    }
    if(turnscore2!=1){
        currentscore2+=turnscore2
        console.log("Player2 current round score "+currentscore2)
             
    }
    if(turnscore2==1){
        currentscore2-=currentscore2
        console.log("Player2 hit a 1 and current round score is "+currentscore2)
             
    } 
    if(scoreboard2===maxscore){////display win
        console.log("you win")
        return
    }
}
