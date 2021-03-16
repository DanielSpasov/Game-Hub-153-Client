import './TopFiveGenres.css'

import Genre from '../../../Reuseables/Genre/Genre'

function TopFiveGenres({
    genres
}) {
    return (
        <div className="top-five-genres">
            <h2>Top 5 Most Played Genres</h2>
            {genres.map(x =>
                <Genre key={x._id} name={x.name} />
            )}
        </div>
    )
}

export default TopFiveGenres