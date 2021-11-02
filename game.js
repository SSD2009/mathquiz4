player1name = localStorage.getItem("player1name");
player2name = localStorage.getItem("player2name");

player1score = 0;
player2score = 0;

qturn = "player1";
answerturn = "player2";

document.getElementById("player_1name").innerHTML = player1name + " : ";
document.getElementById("player_2name").innerHTML = player2name + " : ";

document.getElementById("player_1score").innerHTML = player1score;
document.getElementById("player_2score").innerHTML = player2score;

document.getElementById("playerq").innerHTML = "Question turn- " + player1name;
document.getElementById("playerans").innerHTML = "Answer turn- " + player2name;

function send() {
   getno1 = document.getElementById("no1").value;
   getno2 = document.getElementById("no2").value;
   ans = getno1 * getno2;
   q = getno1 + "X" + getno2;
   console.log("first no. - " + getno1 + " ,second no. - " + getno2);

   que = "<h4 id='worddisplay'>Q. " + q + "</h4>";
   input = "<br>Answer : <input type='text' id='checkbox'>";
   checkbutton = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
   row = que + input + checkbutton;
   document.getElementById("output").innerHTML = row;
   document.getElementById("no1").value = "";
   document.getElementById("no2").value = "";
}

function check() {
   getans = document.getElementById("checkbox").value;
   if (getans == ans) {
      if (answerturn == "player1") {
         player1score = player1score + 1;
         document.getElementById("player_1score").innerHTML = player1name + " : " + player1score;
         answerturn = "player2"
      } else {
         player2score = player2score + 1;
         document.getElementById("player_2score").innerHTML = player2name + " : " + player2score;
         answerturn = "player1"
      }
   }

   if (qturn == "player1") {
      qturn = "player2"
      document.getElementById("playerq").innerHTML = "Question Turn - " + player2name;
   } else {
      qturn = "player1"
      document.getElementById("playerq").innerHTML = "Question Turn - " + player1name;
   }
}