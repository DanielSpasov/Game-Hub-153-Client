import './Games.css'

import Game from './Game/Game'
import SearchBox from './SearchBox/SearchBox'

function Games({
    games
}) {
    return (
        <div className="games-section">

            <h1 className="games-section-title">Search Games:</h1>
        
            <SearchBox />

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
