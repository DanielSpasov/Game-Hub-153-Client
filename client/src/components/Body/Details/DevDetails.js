const DevDetails = ({
    dev
}) => {
    return (
        <div>
            <div>
                <img src={dev?.imageUrl} alt={dev?.title} height="400px" width="400px" />
            </div>
            <div>
                <h2>Games this Developers have created:</h2>
                <p></p>
            </div>
        </div>
    )
}

export default DevDetails