function check(){
	var playerOne=prompt("Player one input");
	var playerTwo=prompt("Player two input");
	
	if(playerOne=="Rock"){
		if(playerTwo=="Rock"){
			document.getElementById("result").innerHTML="It's a draw!";
		}
		else if(playerTwo=="Scissors"){
			document.getElementById("result").innerHTML="Rocks beats scissors, Player one wins!!";
		}
		else if(playerTwo=="Paper"){
			document.getElementById("result").innerHTML="Paper beats rock, Player two wins!!";
		}
	}
	else if(playerOne=="Scissors"){
		if(playerTwo=="Rock"){
			document.getElementById("result").innerHTML="Rocks beats scissors, Player two wins!!";
		}
		else if(playerTwo=="Paper"){
			document.getElementById("result").innerHTML="Scissors beats papers, Player one wins!!";
		}
		else if(playerTwo=="Scissors"){
			document.getElementById("result").innerHTML="It's a draw!";
		}
	}
	else if(playerOne=="Paper"){
		if(playerTwo=="Paper"){
			document.getElementById("result").innerHTML="It's a draw!";
		}
		else if(playerTwo=="Rock"){
			document.getElementById("result").innerHTML="Paper beats rock, Player one wins!!";
		}
		else if(playerTwo=="Scissors"){
			document.getElementById("result").innerHTML="Scissors beats papers, Player two wins!!"
		}
	}
	else{
		document.getElementById("result").innerHTML="Invalid input, please try again";
	}
}