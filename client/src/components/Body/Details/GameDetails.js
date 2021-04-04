const GameDetails = ({
    game
}) => {
    return (
        <div>
            <div>
                <img src={game?.imageUrl} alt={game?.title} height="500px" width="380px" />
            </div>
            <div>
                <h3>Intro:</h3>
                <p>{game?.intro}</p>
            </div>
            <div>
                <h3>More information about the game:</h3>
                <p>{game?.moreInfo}</p>
            </div>
            <div>
                <h3>Video with gameplay of the game:</h3>
                <p>{game?.videoUrl}</p>
            </div>
            <div>
                <h3>Genres this game falls into:</h3>
                <p></p>
            </div>
            <div>
                <h3>Developers who created the game:</h3>
                <p></p>
            </div>
        </div>
    )
}

export default GameDetails