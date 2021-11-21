 //Point tracker
 const p1Button = document.querySelector("#p1Button");
 const p2Button = document.querySelector("#p2Button");
 const p1Display = document.querySelector("#p1Display");
 const p2Display = document.querySelector("#p2Display");
 const resetButton = document.querySelector("#reset");
 const winningScoreSelect = document.querySelector("#playto");

 let p1Score = 0;
 let p2Score = 0;
 let resetScore = 0;
 let winningScore = 3;
 let isGameOver = false;


 p1Button.addEventListener("click", function() {
     if (!isGameOver) {
         p1Score += 1;
     if (p1Score === winningScore) {
         isGameOver = true;
         p1Display.classList.add("winner");
         p2Display.classList.add("loser");
     } p1Display.textContent = p1Score;

 }
 });

 p2Button.addEventListener("click", function() {
     if (!isGameOver) {
         p2Score += 1;
     if (p2Score === winningScore) {
         isGameOver = true;
         p2Display.classList.add("winner");
         p1Display.classList.add("loser");
     } p2Display.textContent = p2Score;
 }
 });

 winningScoreSelect.addEventListener("change", function() {
     winningScore = parseInt(this.value);
     reset();
 })

 /*resetButton.addEventListener("click", function() {
     p1Display.textContent = resetScore;
     p2Display.textContent = resetScore;
     winningScoreSelect = ;
 }); */

 resetButton.addEventListener("click", reset)

 function reset() {
     isGameOver = false;
     p1Score = 0;
     p2Score = 0;
     p1Display.textContent = 0;
     p2Display.textContent = 0;
     p1Display.classList.remove("winner", "loser");
     p2Display.classList.remove("winner", "loser");           
 };

 //Text Log

 const textButton = document.getElementById("textButton");
 const textBox = document.getElementById("textBox");
 const listEvent = document.getElementById("eventLog");
 const undoLog = document.getElementById("remove");
 
 function textLog() {
    const newLog = document.createElement("li");
    newLog.innerHTML = textbox.value;
    listEvent.appendChild(newLog);
 }

 function previousLog() {
     const prevLog = document.querySelector("li");
     listEvent.removeChild(prevLog);
 }
