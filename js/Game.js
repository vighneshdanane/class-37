class Game {
    constructor(){}
getState(){
    var gamereff = database.ref('gameState')
    gamereff.on("value",function(data){
        gameState = data.val()
    })
}
update(state){
    database.ref('/').update({
        gameState:state
    })
}
async start(){
    if(gameState===0){
     player = new Player()
        var playerref = await database.ref('playerCount').once("value")
        if(playerref.exists()){
        playerCount=playerref.val()
        player.getCount();

        }
        form = new Form()
        form.display()
    }
}
play(){
    form.hide()
    textSize(30)
    text("GAME START" ,120 , 100)

}

}