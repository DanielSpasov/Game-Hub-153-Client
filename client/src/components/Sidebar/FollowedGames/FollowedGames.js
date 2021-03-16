// import { Link } from 'react-router-dom'

import './FollowedGames.css'

function FollowedGames() {
    return (
        <div className="followed-games-container">
            <ul className="followed-games-list">
                <h3>Followed games</h3>
                <a href="#/"><li>The Witcher 3</li></a>
                <a href="#/"><li>Overwatch</li></a>
                <a href="#/"><li>VALORANT</li></a>
            </ul>
        </div>
    )
}

export default FollowedGames