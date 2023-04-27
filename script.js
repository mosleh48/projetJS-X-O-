let turn = "x";

function winnername(){
const winner = document.getElementById("winner");
let gagnant;
var element1 = "le gagnant est ";
var element2 = "<br>";
if( turn == "x" ){
gagnant = `
<svg height="100" width="100">
<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="black" />
</svg> `;
}
else if(turn == "o") {
    gagnant = `
    <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <line x1="0" y1="100" x2="100" y2="0" stroke-width="3" stroke="black"/>
      <line x1="0" y1="0" x2="100" y2="100" stroke-width="3" stroke="black"/>
    </svg>`;
}
var element3 = gagnant;

winner.innerHTML = element1 + element2 + element3;

} 

function winner(){
    var position=[0,1,2,3,4,5,6,7,8];
    position[0] = document.getElementById("square1").innerHTML;
    position[1] = document.getElementById("square2").innerHTML;
    position[2] = document.getElementById("square3").innerHTML;
    position[3] = document.getElementById("square4").innerHTML;
    position[4] = document.getElementById("square5").innerHTML;
    position[5] = document.getElementById("square6").innerHTML;
    position[6] = document.getElementById("square7").innerHTML;
    position[7] = document.getElementById("square8").innerHTML;
    position[8] = document.getElementById("square9").innerHTML;

    if( position[0] == position[1] && position[1] == position[2] && position[0] != '' )
    {
       winnername();
    }
    else if( position[3] == position[4] && position[4] == position[5] && position[3] != '' )
    {
        winnername();
    }
    else if( position[6] == position[7] && position[7] == position[8] && position[6] != '' )
    {
        winnername();
    } 
    else if( position[0] == position[3] && position[3] == position[6] && position[0] != '' )
    {
        winnername();
    }
    else if( position[1] == position[4] && position[4] == position[7] && position[1] != '' )
    {
        winnername();
    }
    else if( position[2] == position[5] && position[5] == position[8] && position[2] != '' )
    {
        winnername();
    }
    else if( position[0] == position[4] && position[4] == position[8] && position[0] != '' )
    {
        winnername();
    }
    else if( position[2] == position[4] && position[4] == position[6] && position[2] != '' )
    {
        winnername();
    }
}

function startGame(id)
{
    let square = document.getElementById(id);
    if( turn == 'x' && square.innerHTML == '')
    {
       square.innerHTML = `
       <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
         <line x1="0" y1="100" x2="100" y2="0" stroke-width="5" stroke="white"/>
         <line x1="0" y1="0" x2="100" y2="100" stroke-width="5" stroke="white"/>
       </svg>`;
        turn = "o";
      
    }
    else if( turn == 'o' && square.innerHTML == '')
    {
        square.innerHTML = `
        
<svg height="100" width="100" >
<circle cx="50" cy="50" r="40" stroke="white" stroke-width="5" fill="white" />
</svg> `;
        turn = "x";
       
    }
   winner();
}

function replay(){
    var position=[0,1,2,3,4,5,6,7,8];
    position[0] = document.getElementById("square1");
    position[1] = document.getElementById("square2");
    position[2] = document.getElementById("square3");
    position[3] = document.getElementById("square4");
    position[4] = document.getElementById("square5");
    position[5] = document.getElementById("square6");
    position[6] = document.getElementById("square7");
    position[7] = document.getElementById("square8");
    position[8] = document.getElementById("square9");

    for(let i=0;i<9;i++){
        position[i].innerHTML="";
    }

    const winner = document.getElementById("winner");
    winner.innerHTML = "";
}