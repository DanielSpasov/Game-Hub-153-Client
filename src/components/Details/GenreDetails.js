import { useState, useEffect } from 'react'

import Game from '../Common/Game/Game'

import errorHandler from '../../utils/errorHandler'

import genreService from '../../services/genreService'


const GenreDetails = ({ genre }) => {

    const [games, setGames] = useState(null)

    useEffect(() => {
        genreService.getGames(genre?.id)
            .then(res => setGames(res))
            .catch(errorHandler)
    }, [genre?.id])

    let items = games?.map(x => <Game key={x.id} title={x.title} imageUrl={x.imageUrl} id={x.id} />)
    let gamesInGenre = games?.length > 0 ?
        <div><h3>Games in this genre:</h3>{items}</div> : 
        <div><h3>There is no games in this genre</h3></div>
        

    return (
        <div>
            <div>
                <img src={genre?.imageUrl} alt={genre?.title} height="500px" width="380px" />
            </div>
            {gamesInGenre}
        </div>
    )
}

export default GenreDetails