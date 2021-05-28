class Form {
    constructor(){
         this.input = createInput("NAME")
         this.button = createButton ("PLAY")
         this.gretting = createElement('h3')
    }
    hide(){
        this.input.hide()
        this.button.hide()
        this.gretting.hide()        
    }

display(){
    var title = createElement ('h2')
    title.html("CAR RACING GAME")
    title.position(450 , 100 )
   this.input .position (450 , 260 )
    this.button.position (580 , 320 )
   

    this.button.mousePressed(()=>{
       this.input.hide()
       this. button.hide()
        player.name = this.input.value()
        playerCount+=1
        player.index = playerCount
       player.updateCount(playerCount)
       this.gretting.html("hello "+player.name)
        this.gretting.position(540 , 260 )
    })


}
}

