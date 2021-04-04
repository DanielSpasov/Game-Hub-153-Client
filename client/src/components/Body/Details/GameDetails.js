const GameDetails = ({
    game
}) => {

    let video = game?.videoUrl ?
        <div>
            <h3>Trailer of the game:</h3>
            <iframe
                width="720"
                height="405"
                src={`https://www.youtube.com/embed/${game?.videoUrl.slice(32, game?.videoUrl.length)}`}
                title={game?.title}
                frameBorder="0"
            />
        </div> : null
    let moreInfo = game?.moreInfo ?
        <div>
            <h3>More information about the game:</h3>
            <p>{game?.moreInfo}</p>
        </div> : null
    let intro = game?.intro ?
        <div>
            <h3>Intro:</h3>
            <p>{game?.intro}</p>
        </div> : null

    return (
        <div>
            <div>
                <img src={game?.imageUrl} alt={game?.title} height="500px" width="380px" />
            </div>
            {intro}
            {moreInfo}
            {video}
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