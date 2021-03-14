import './Games.css'

import Game from './Game/Game'

function Games({
    games
}) {
    return (
        <div className="games-section">

            <h1>Featured Games:</h1>

            <div className="games-container">
                {games?.map(x =>
                    <Game
                        key={x._id}
                        title={x.title}
                        imageUrl={x.imageUrl}
                    />
                )}
            </div>

        </div>
    )
}

export default Games
