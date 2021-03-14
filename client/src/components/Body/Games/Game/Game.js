import './Game.css'

function Game({
    title,
    imageUrl,
}) {
    return (
        <div className="game-container">
            <img src={imageUrl} width="200px" height="280px" alt={title}></img>
            <h2>{title}</h2>
        </div>
    )
}

export default Game