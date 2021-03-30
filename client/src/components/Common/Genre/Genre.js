import { Link } from 'react-router-dom'

import Image from '../Image/Image'

import './Genre.css'

const Genre = ({
    name,
    imageUrl,
    id
}) => {
    return (
        <div className="genre-card">
            <Image id={id} title={name} imageUrl={imageUrl} type='genres' />
            <Link to={'/genres/' + id} className="genre-title">{name}</Link>
        </div>
    )
}

export default Genre