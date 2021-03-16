import './Game.css'

import Title from './Title/Title'
import Image from './Image/Image'

function Game({
    title,
    imageUrl,
}) {
    return (
        <div className="game-card">
            <Image title={title} imageUrl={imageUrl} />
            <Title title={title} />
        </div>
    )
}

export default Game