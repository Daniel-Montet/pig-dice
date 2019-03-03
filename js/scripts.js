

class Player{
    constructor(name){
        this.name=name
    }
//INSTANCE METHODS
    name(){
        return this.name
    }

}

class Avatar extends Player{//DESCRIBE PROPERTIES OF DIFFERENT AVATARS

    constructor(avatar1,avatar2){
        super(name)
        this.avatar1=avatar1
        this.avatar2=avatar2
    }
    avatar1(){
        return this.avatar1
    }
    avatar2(){
        return this.avatar2
    }

}




var av=new Avatar("brian","kennedy")
var player1=(av.avatar1)
var player2=(av.avatar2)
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
