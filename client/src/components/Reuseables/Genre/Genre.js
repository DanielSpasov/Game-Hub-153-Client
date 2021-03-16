import { Link } from 'react-router-dom'

import './Genre.css'

function Genre({
    name
}) {
    return (
        <div className="genre-card">
            <Link to={'/wiki/genre/' + name} className="genre-link">{name}</Link>
        </div>
    )
}

export default Genre