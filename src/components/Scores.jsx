
function Scores ({players}) {
    return(
        <section>
        <h2>Score:</h2>
        <p>Player1:<span> {players.p1.score} </span> - Player2: <span> {players.p2.score} </span></p>
        </section>
    )
}

export default Scores