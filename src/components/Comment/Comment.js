import './Comment.css'



const Comment = ({ author, content }) => {
    return (
        <div className="comment">
            <p><b>{author}</b></p>
            <p>{content}</p>
        </div>
    )
}

export default Comment