
import {useState} from 'react'

const boardObj = { 1:0,
    2:0,
    3:0,
    4:0,
    5:0,
    6:0,
    7:0,
    8:0,
    9:0 }

function Board({players, setPlayers}) {
    const [gameBoard, setGameBoard] = useState({ 1:1,
        2:0,
        3:0,
        4:0,
        5:0,
        6:-1,
        7:0,
        8:0,
        9:0 })
    const [gameButton, setGameButton] = useState([1,2,3,4,5,6,7,8,9])  
    const [value, setValue] = useState(0)
    
    function setIcon(e){ 
        let value = 0
        const copyPlayers = {...players}
        if (players.p1.active) {
            setGameBoard((currBoard)=>{
                const newBoard = {...currBoard}
                newBoard[e.target.id] = 1
                return newBoard
            })
            value = 1
            setValue(value)
            copyPlayers.p1.active = false
            e.target.disabled = true
        } else { 
            setGameBoard((currBoard)=>{
                const newBoard = {...currBoard}
                newBoard[e.target.id] = -1
                return newBoard
            })
            copyPlayers.p1.active = true
            value = -1
            setValue(value)
            e.target.disabled = true
        }
        console.log(e.target.value)
        checkWinner(e.target.id, value)
    return copyPlayers
    }

    function checkWinner(id, value){
        boardObj[id] = value
        console.log(boardObj
            )
        if((boardObj[1] + boardObj[2] + boardObj[3] === 3) ||
           (boardObj[4] + boardObj[5] + boardObj[6] === 3) || 
           (boardObj[7] + boardObj[8] + boardObj[9] === 3) || 
           (boardObj[1] + boardObj[4] + boardObj[7] === 3) || 
           (boardObj[2] + boardObj[5] + boardObj[8] === 3) || 
           (boardObj[3] + boardObj[6] + boardObj[9] === 3) || 
           (boardObj[4] + boardObj[5] + boardObj[6] === 3) || 
           (boardObj[1] + boardObj[5] + boardObj[9] === 3) || 
           (boardObj[3] + boardObj[5] + boardObj[7] === 3)) {
            setGameButton((currButton) => {
                const newButtons = [...currButton]
                return newButtons.map((button)=> {
                    return button.innerText = ""
                })
            })
            setPlayers((currPlayers)=>{
                let copyPlayers = {...currPlayers}
                copyPlayers.p1.winner = true
                copyPlayers.p1.score++
                return copyPlayers
            })
        } else if ((boardObj[1] + boardObj[2] + boardObj[3] === -3) ||
                    (boardObj[4] + boardObj[5] + boardObj[6] === -3) || 
                    (boardObj[7] + boardObj[8] + boardObj[9] === -3) || 
                    (boardObj[1] + boardObj[4] + boardObj[7] === -3) || 
                    (boardObj[2] + boardObj[5] + boardObj[8] === -3) || 
                    (boardObj[3] + boardObj[6] + boardObj[9] === -3) || 
                    (boardObj[4] + boardObj[5] + boardObj[6] === -3) || 
                    (boardObj[1] + boardObj[5] + boardObj[9] === -3) || 
                    (boardObj[3] + boardObj[5] + boardObj[7] === -3)) {
                setGameButton((currButton) => {
                    const newButtons = [...currButton]
                    return newButtons.map((button)=> {
                        return button.innerText = ""
                    })
                })
                setPlayers((currPlayers)=>{
                let copyPlayers = {...currPlayers}
                copyPlayers.p2.winner = true
                copyPlayers.p2.score++
             return copyPlayers
            })
        } 
    console.log(players)          
    } 

        

    return(
        <section>
        {gameButton.map((button) => {
            return <button key={button} onClick={setIcon} value={value} className="game-button" id={button}>{gameBoard[button] === 1 ? "X": gameBoard[button] === -1 ? "O" : ""}</button>
        })
    }
        </section>
    )
}

export default Board

/* <button onClick={setIcon} value={value} className="game-button" id="1"></button>
<button onClick={setIcon} value={value}  className="game-button" id="2"></button>
<button onClick={setIcon} value={value}  className="game-button" id="3"></button><br></br>
<button onClick={setIcon} value={value}  className="game-button" id="4"></button>
<button onClick={setIcon} value={value}  className="game-button" id="5"></button>
<button onClick={setIcon} value={value}  className="game-button" id="6"></button><br></br>
<button onClick={setIcon} value={value}  className="game-button" id="7"></button>
<button onClick={setIcon} value={value}  className="game-button" id="8"></button>
<button onClick={setIcon} value={value}  className="game-button" id="9"></button><br></br> */