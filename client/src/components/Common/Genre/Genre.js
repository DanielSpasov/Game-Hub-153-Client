import { Link } from 'react-router-dom'

import Image from '../Image/Image'

import './Genre.css'

const Genre = ({
    name,
    imageUrl,
    page
}) => {

    const button = page === 'followGenres' ?
        <div className="follow-div">
            <Link to={`/genres/follow/${name}`} className="follow-link">Follow</Link>
        </div>
        : null

    return (
        <div className="genre-card">
            <Image title={name} imageUrl={imageUrl} type='genres' />
            <Link to={'/genres/' + name} className="genre-title">{name}</Link>
            {button}
        </div>
    )
}

export default Genre