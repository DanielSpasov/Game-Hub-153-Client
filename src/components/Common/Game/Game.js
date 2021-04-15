import { Link } from 'react-router-dom'

import Image from '../Image/Image'

import './Game.css'

const Game = ({
    title,
    imageUrl,
    id
}) => {
    return (
        <div className="game-card">
            <Image id={id} title={title} imageUrl={imageUrl} type='games' />
            <Link to={'/games/' + id} className="game-title">{title}</Link>
        </div>
    )
}

export default Game