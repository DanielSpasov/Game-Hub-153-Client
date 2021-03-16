import Game from '../../../Common/Game/Game'


function TopFiveGames({
    games
}) {
    return (
        <div>

            <h2>Our top 5 most upvoted games</h2>

            <div>
                {games.map(x =>
                    <Game key={x._id} title={x.title} imageUrl={x.imageUrl} />
                )}
            </div>
        </div>
    )
}

export default TopFiveGames


