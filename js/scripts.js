
$(document).ready(function(event){
  $('#avatar1btn').click(function(){
    var name1=$('#avatar1').val();
    getname1(name1);
  })
  $('#avatar2btn').click(function(){
    var name2=$('#avatar2').val();
    getname2(name2)
  })
})

function getname1(name1){//CAPTURE PLAYER ONE NAME
    var player1= new Avatar1(name1)
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
var scoreboard= 0
var currentscore=0
var turnscore=0

function rollPlayer(){//CALCULATE ROLL FUNCTIONALITY FOR AVATARS
    turnscore=Math.floor(Math.random()*6)+1;
    if(turnscore!=1){
        currentscore+=turnscore
        if(currentscore===maxscore){
            scoreboard+=currentscore
            console.log("you win")
            return
        }
       // else if(currentscore<maxscore && hold==true){
        //    scoreboard+=currentscore
            //RUN FUNCTION
       // }
    }
    else{
        currentscore-=currentscore
    }
    console.log(currentscore)
}
