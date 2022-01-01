        const playerOneHp = document.getElementById("hpOne");
        const playerTwoHp = document.getElementById("hpTwo");
        const minusBtnP1 = document.getElementById("minusHpOne");
        const plusBtnP1 = document.getElementById("plusHpOne");
        const minusBtnP2 = document.getElementById("minusHpTwo");
        const plusBtnP2 = document.getElementById("plusHpTwo");
        const resetBtn = document.getElementById("resetGame");

        let lifePoint = 20;
        let newGame;

        //Life Point Tracker
        minusBtnP1.addEventListener("click", function() {
            lifePoint-= 1;
            playerOneHp.textContent = lifePoint;
        });

        minusBtnP2.addEventListener("click", function() {
            lifePoint-= 1;
            playerTwoHp.textContent = lifePoint;
        })

        plusBtnP1.addEventListener("click", function() {
            lifePoint+= 1;
            playerOneHp.textContent = lifePoint;
        })

        plusBtnP2.addEventListener("click", function() {
            lifePoint+= 1;
            playerTwoHp.textContent = lifePoint;
        })

        resetBtn.addEventListener("click", function() {
            reset();
        })

        //Reseting the Tracker
        function reset() {
            lifePoint = 20;
            playerOneHp.textContent = lifePoint;
            playerTwoHp.textContent = lifePoint;

        }

        //Event log list
        const textLog = document.getElementById("textBox");
        const subBtn = document.getElementById("enterLog");
        const undoLog = document.getElementById("undoLog");
        const listEvent = document.getElementById("eventLog");
        

        subBtn.addEventListener("click", function() {
            let newLog = document.createElement("li");
            newLog.innerHTML = textLog.value;
            listEvent.appendChild(newLog);
        })

        textLog.addEventListener("keyup", function(enter){
            if (enter.keyCode === 13) {
            let newLog = document.createElement("li");
            newLog.innerHTML = textLog.value;
            listEvent.appendChild(newLog);
            }
        })

        