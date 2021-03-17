import './Genres.css'

import Genre from '../../Common/Genre/Genre'
import SearchBox from '../../Common/SearchBox/SearchBox'

function Genres({
    genres
}) {
    return (
        <div className="genres-section">

            <h1 className="genres-section-title">Search Genres:</h1>

            <SearchBox />

            <div className="genres-container">
                {genres?.map(x =>
                    <Genre
                        key={x._id}
                        name={x.name}
                        imageUrl={x.imageUrl}
                    />
                )}
            </div>

        </div>
    )
}

export default Genres