import { Link } from 'react-router-dom'

import Game from '../../Common/Game/Game'
import Searchbar from './Searchbar/Searchbar'

import './Games.css'

function Games({
    games
}) {
    return (
        <div className="games-section">

            <h1>Search Games:</h1>

            <div className="games-nav-container" >

                <div className="games-button-div">
                    <Link to="/games/follow" className="games-redirect-link">Follow Games</Link>
                </div>

                <Searchbar />

                <div className="games-button-div">
                    <Link to="/games/add" className="games-redirect-link">Add Games</Link>
                </div>

            </div>


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
