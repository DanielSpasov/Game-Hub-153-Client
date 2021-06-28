import { Link } from 'react-router-dom'

import './Comment.css'



const Comment = ({ username, content }) => {
    return (
        <div className="comment">
            <Link to={`/profile/${username}`}><b>{username}</b></Link>
            <p>{content}</p>
        </div>
    )
}

export default Comment