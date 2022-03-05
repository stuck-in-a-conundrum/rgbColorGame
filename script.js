var color;
var easy=1;
var win;
var pos;var nt;
var stat=document.getElementById("status")
var banner=document.getElementById("top-banner")
var rgbval=document.getElementById("rgb")
var game=document.getElementById("game")
var easym=document.getElementById("easy");
var hardm=document.getElementById("hard");

function getColor(){
    r=Math.floor(Math.random()*255)
    g=Math.floor(Math.random()*255)
    b=Math.floor(Math.random()*255)
    return `rgb(${r}, ${g}, ${b})`
}

function tileClicked(event){
    console.log(event.target.id)
    if(!win)
    {
        var tiles=document.getElementsByClassName("tile")
      //  console.log(nt)

        if(event.target.id=="ans")
        {   banner.style.backgroundColor=color
            for(i=0;i<nt;i++){
                
                tiles[i].style.backgroundColor=color
            }
            stat.textContent="You Won!"
            win=1;
        }
        else{
            stat.textContent="Try Again"
            event.target.style.backgroundColor="black"
        }
    }
}

function mode(event){
    if(event.target.className=="inactive"){
    event.target.classList.remove("inactive")
    easy=!easy
    if(event.target.id=="easy") document.getElementById("hard").classList.add("inactive")
    else document.getElementById("easy").classList.add("inactive")
    //console.log(document.getElementById("easy").className)
    newGame()
    }
}

function buildTiles(){
    n=nt
    game.innerHTML=""
    pos=Math.floor(Math.random()*n+1)
    for (i=1;i<=nt/3;i++){
        var row=document.createElement("div")
        row.classList.add("row")
        for(j=1;j<=3;j++){
            var tile=document.createElement("div")
            tile.classList.add("tile")
            tile.style.transition=
            cond=n==pos
            tile.style.backgroundColor=cond?color:getColor();
            //console.log(pos)
            if(cond) 
                tile.id="ans"
            row.appendChild(tile)
            tile.addEventListener("click",tileClicked)
            n--;
        }
        game.appendChild(row)
    } 
}
function newGame(){
    win=0;
    nt=easy?3:6
    stat.textContent=""
    color=getColor()
    inactive=document.getElementsByClassName("inactive")
    rgbval.textContent=color
    stat.style.color="darkBlue"
    banner.style.backgroundColor="rgb(255,188,2)"
    buildTiles()
}
document.getElementById("new").addEventListener("click",newGame)
easym.addEventListener("click",mode)
hardm.addEventListener("click",mode)
newGame();

//
