import './Image.css'

function Image({
    title,
    imageUrl
}) {
    return (
        <div className="image-box">
            <a href="#/imageRedirect">
                <img className="game-image" src={imageUrl} alt={title} width="200px" height="280px" />
            </a>
        </div>
    )
}

export default Image