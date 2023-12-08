var player1 = "Player 1"
var player2 = "player 2"


window.onload = (event) => {
  refreshdicee()
  };


function refreshdicee() {
    setTimeout(function() {
        var randomnumberforone = Math.floor(Math.random()*6 + 1);
        var randomnumberfortwo = Math.floor(Math.random()*6 + 1);
        console.log(randomnumberforone)
        console.log(randomnumberfortwo)  

        document.querySelector(".img1").setAttribute("src","images/dice" + randomnumberforone +".png");
        document.querySelector(".img2").setAttribute("src","images/dice" + randomnumberfortwo +".png");

        if (randomnumberforone === randomnumberfortwo)
        {
            document.querySelector("h1").innerHTML = "draw";
        }
        else if (randomnumberforone < randomnumberfortwo)
        {
            document.querySelector("h1").innerHTML = (player2+"wins")
        }
        else
        {
            document.querySelector("h1").innerHTML = (player1+"wins")
        }
    })
}

// refreshdicee()
