import { Link } from 'react-router-dom'

import './Card.css'



const Card = ({ title, image, type, id, upvotes }) => {

    const height = type === 'devs' ? '200px' : '280px'
    
    let bgColor
    if (type === 'games') bgColor = 'rgb(190, 25, 250)'
    if (type === 'genres') bgColor = 'rgb(250, 240, 30)'
    if (type === 'devs') bgColor = 'rgb(45, 135, 234)'

    return (
        <div className="card">

            {upvotes !== undefined ? <p>Upvotes: <b>{upvotes}</b></p> : null}

            <div className="image-box" style={{ backgroundColor: bgColor }}>
                <Link to={`/${type}/${id}`}>
                    <img
                        className="card-image"
                        width="200px"
                        height={height}
                        src={image}
                        alt={title}
                    />
                </Link>
            </div>

            <Link to={`/${type}/${id}`}>{title}</Link>

        </div>
    )
}

export default Card