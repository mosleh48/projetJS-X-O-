let turn = "x";


function winner(){
    var position=[0,1,2,3,4,5,6,7,8];
    position[0] = document.getElementById(square1).innerHTML;
    position[1] = document.getElementById(square2).innerHTML;
    position[2] = document.getElementById(square3).innerHTML;
    position[3] = document.getElementById(square4).innerHTML;
    position[4] = document.getElementById(square5).innerHTML;
    position[5] = document.getElementById(square6).innerHTML;
    position[6] = document.getElementById(square7).innerHTML;
    position[7] = document.getElementById(square8).innerHTML;
    position[8] = document.getElementById(square9).innerHTML;

    if( position[1] == position[2] && position[2] == position[3] && position[1] != '' )
    {
        console.log("winner");
    }


}

function startGame(id)
{
    let square = document.getElementById(id);
    if( turn == 'x' && square.innerHTML == '')
    {
        square.innerHTML = 'x';
        turn = "o";
      
    }
    else if( turn == 'o' && square.innerHTML == '')
    {
        square.innerHTML = 'o';
        turn = "x";
       
    }
   
}