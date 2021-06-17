const ImageBox = ({ image, title }) => {
    return (
        <div>
            <img className="blockbuster-image" src={image} alt={title} />
        </div>
    )
}

export default ImageBox