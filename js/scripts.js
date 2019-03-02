class Player{
    constructor(name){
        this.name=name
    }
//INSTANCE METHODS
    name(){
        return this.name
    }

}

class Switch extends Player{//DESCRIBE PROPERTIES OF DIFFERENT AVATARS
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



var maxscore=100
var scoreboard= 0
var currentscore=0
var turnscore=0

function rollPlayer(player){//CALCULATE ROLL FUNCTIONALITY FOR AVATARS
    turnscore=Math.floor(Math.random()*6)+1;
    if(turnscore!=1){
        currentscore+=turnscore
    }
    else{
        currentscore-=currentscore
    }
    console.log(currentscore)
}

