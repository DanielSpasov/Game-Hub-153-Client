import { Link } from 'react-router-dom'

import Image from '../Image/Image'
import './Game.css'


function Game({
    title,
    imageUrl,
}) {
    return (
        <div className="game-card">
            <Image title={title} imageUrl={imageUrl} type='games' />
            <Link to={'/games/' + title} className="game-title">{title}</Link>
        </div>
    )
}

export default Game