import { Link } from 'react-router-dom'

import './Title.css'

function Title({
    title
}) {
    return (
        <Link to={'/wiki/games/' + title} className="game-title">{title}</Link>
    )
}

export default Title