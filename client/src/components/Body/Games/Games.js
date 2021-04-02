import { useEffect, useState } from 'react'

import Game from '../../Common/Game/Game'
import { getAll } from '../../../services/gameService'

import './Games.css'

const Games = () => {

    const [games, setGames] = useState(null)

    useEffect(() => {
        getAll().then(items => setGames(items))
    }, [])

    return (
        <div className="games-section">

            <h1>Search Games:</h1>

            <div className="games-nav-container" >
                <div className="games-search-form">
                    <form>
                        <input
                            className="search-field"
                            placeholder="Search"
                            type="text"
                        />
                    </form>
                </div>
            </div>

            <div className="games-container">
                {games?.map(x =>
                    <Game
                        key={x.id}
                        title={x.title}
                        imageUrl={x.imageUrl}
                        id={x.id}
                    />
                )}
            </div>

        </div>
    )
}

export default Games