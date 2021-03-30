import Genre from '../../../Common/Genre/Genre'


function TopFiveGenres({
    genres
}) {
    return (
        <div>

            <h2>Our top 5 most followed genres</h2>

            <div>
                {genres?.map(x =>
                    <Genre key={x._id} name={x.name} imageUrl={x.imageUrl} />
                )}
            </div>
        </div>
    )
}

export default TopFiveGenres