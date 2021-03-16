import './TopFiveGames.css'

import Game from '../../../Common/Game/Game'


function TopFiveGames({
    games
}) {
    return (
        <div className="top-five-games">

            <h2>Our top 5 most upvoted games</h2>

            <div className="game-container">
                {games.map(x =>
                    <Game key={x._id} title={x.title} imageUrl={x.imageUrl} />
                )}
            </div>
        </div>
    )
}

export default TopFiveGames


