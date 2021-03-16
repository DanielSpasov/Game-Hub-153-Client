import './TopFiveGenres.css'

import Genre from '../../../Common/Genre/Genre'


function TopFiveGenres({
    genres
}) {
    return (
        <div className="top-five-genres">

            <h2>Our top 5 most played genres</h2>

            <div className="genres-container">
                {genres.map(x =>
                    <Genre key={x._id} name={x.name} imageUrl={x.imageUrl} />
                )}
            </div>
        </div>
    )
}

export default TopFiveGenres