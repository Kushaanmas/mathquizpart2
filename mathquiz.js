player1_name = localStorage.getItem("player1");
player2_name = localStorage.getItem("player2");

player1_score = 0;
player2_score = 0;

document.getElementById("player1name").innerHTML = player1_name + ":";
document.getElementById("player2name").innerHTML = player2_name + ":";

document.getElementById("player1score").innerHTML = player1_score;
document.getElementById("player2score").innerHTML = player2_score;

console.log(player1_score);

answer_turn = "player1";





    
