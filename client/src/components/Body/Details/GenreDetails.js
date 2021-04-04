const GenreDetails = ({
    genre
}) => {
    return (
        <div>
            <div>
                <img src={genre?.imageUrl} alt={genre?.title} height="500px" width="380px" />
            </div>
            <div>
                <h2>Games in this genre:</h2>
                <p>{genre?.games}</p>
            </div>
        </div>
    )
}

export default GenreDetails