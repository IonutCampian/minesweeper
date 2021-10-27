const game = document.getElementById("gameBoard")
var buttonId = 1;
var seconds = 0;
var time = document.getElementById("timer")

createBoard();

function createBoard() {
    for(var i = 0; i < 20; ++i) {
        for(var j = 0; j < 20; ++j){
            var mineSweeper = document.createElement("button");
            mineSweeper.setAttribute("id", buttonId);
            game.appendChild(mineSweeper);
            ++buttonId;
        }
    }
}

function growSeconds() {
    ++seconds;
    time.innerText = seconds;
}

