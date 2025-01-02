const cells=document.querySelectorAll('.container > div');
let current_player='X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6], 
];
let gameOver=false;
cells.forEach((cell,index)=>{
    cell.addEventListener('click',()=>{
        // if(cell.textContent===''){
            if (gameOver || cell.textContent !== '') return;
            cell.textContent=current_player;
            gameBoard[index]=current_player;
            if(win(current_player)){
                alert(`Congratulations ${current_player} Wins!`);
                // resetgame();
                gameOver=true;
                resetGame();
                return;
            }
            if (gameBoard.every(cell => cell !== '')) {
                alert("It's a draw!");
                
                gameOver = false;
                resetGame();
                return;
            }


            current_player=current_player=='X'?'O':'X';
        // }
    });
});
function win(player){
    return winningCombinations.some(combination => {
        return combination.every(index => gameBoard[index] === player);
    });
}

function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    cells.forEach(cell => {
        cell.textContent = ''; 
    });
    
    currentPlayer = 'X'; 
    gameOver = false;
}
