import { Link } from 'react-router-dom'

import Image from '../Image/Image'
import './Genre.css'

function Genre({
    name,
    imageUrl
}) {
    return (
        <div className="genre-card">
            <Image title={name} imageUrl={imageUrl} type='genres' />
            <Link to={'/genres/' + name} className="genre-title">{name}</Link>
        </div>
    )
}

export default Genre