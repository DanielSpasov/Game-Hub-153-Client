import './TopFiveGames.css'

import Game from '../../../Reuseables/Game/Game'


function TopFiveGames({
    games
}) {
    return (
        <div className="top-five-games">
            <h2>Top 5 Most Upvoted Games</h2>
            {games.map(x =>
                <Game key={x._id} title={x.title} imageUrl={x.imageUrl} />
            )}
        </div>
    )
}

export default TopFiveGames


