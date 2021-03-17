import './FollowGames.css'

import Game from '../../Common/Game/Game'
import SearchBox from '../../Common/SearchBox/SearchBox'

function FollowGames({
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
                        page='followGames'
                    />
                )}
            </div>

        </div>
    )
}

export default FollowGames