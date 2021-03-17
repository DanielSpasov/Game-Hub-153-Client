import Game from '../../../Common/Game/Game'
import Searchbar from '../Searchbar/Searchbar'

import './FollowGames.css'

function FollowGames({
    games
}) {
    return (
        <div className="games-section">

            <h1>Search Games to follow:</h1>

            <div className="games-nav-container" >

                <Searchbar />

            </div>

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