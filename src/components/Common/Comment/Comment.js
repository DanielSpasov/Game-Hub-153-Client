import './Comment.css'

const Comment = ({ user, content }) => {
    return (
        <div className="comment">
            <span>{user}</span>
            <p>{content}</p>
        </div>
    )
}

export default Comment