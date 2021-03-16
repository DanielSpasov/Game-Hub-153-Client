import { Link } from 'react-router-dom'

import './Image.css'

function Image({
    title,
    imageUrl
}) {
    return (
        <div className="image-box">
            <Link to={'/wiki/games/' + title}>
                <img className="game-image" src={imageUrl} alt={title} width="200px" height="280px" />
            </Link>
        </div>
    )
}

export default Image