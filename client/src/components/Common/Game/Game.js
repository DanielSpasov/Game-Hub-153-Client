import { Link } from 'react-router-dom'

import Image from '../Image/Image'

import './Game.css'

const Game = ({
    title,
    imageUrl,
    page
}) => {

    const button = page === 'followGames' ?
        <div className="follow-div">
            <Link to={`/games/follow/${title}`} className="follow-link">Follow</Link>
        </div>
        : null

    return (
        <div className="game-card">
            <Image title={title} imageUrl={imageUrl} type='games' />
            <Link to={'/games/' + title} className="game-title">{title}</Link>
            {button}
        </div>
    )
}

export default Game