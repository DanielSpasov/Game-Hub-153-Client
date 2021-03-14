import './Games.css'

import Game from './Game/Game'

function Games({
    games
}) {
    return (
        <div className="games-container">

            {games.map(x => 
                <Game
                    key={x._id}
                    title={x.title}
                    imageUrl={x.imageUrl}
                />
            )}

        </div>
    )
}

export default Games
