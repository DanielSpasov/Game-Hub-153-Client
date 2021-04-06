import { useState, useEffect } from 'react'

import genreService from '../../services/genreService'
import devService from '../../services/devService'

import errorHandler from '../../utils/errorHandler'

import Genre from '../Common/Genre/Genre'
import Dev from '../Common/Dev/Dev'

const GameDetails = ({
    game
}) => {

    const [genre, setGenre] = useState(null)
    const [dev, setDev] = useState(null)

    useEffect(() => {
        genreService.getOne(game?.genre).then(res => setGenre(res)).catch(errorHandler)
        devService.getOne(game?.dev).then(res => setDev(res)).catch(errorHandler)
    }, [game?.genre, game?.dev])

    let embedVideoUrl = `https://www.youtube.com/embed/${game?.videoUrl?.slice(32, game?.videoUrl.length)}`
    let video = game?.videoUrl ? <div><h3>Trailer of the game:</h3><iframe width="920" height="520" src={embedVideoUrl} title={game?.title} frameBorder="0" /></div> : null
    let moreInfo = game?.moreInfo ? <div><h3>More information about the game:</h3><p>{game?.moreInfo}</p></div> : null
    let intro = game?.intro ? <div><h3>Intro:</h3><p>{game?.intro}</p></div> : null
    let genres = game?.genre ? <div><h3>Game genre:</h3><Genre name={genre?.name} imageUrl={genre?.imageUrl} id={genre?.id} /></div> : null
    let devs = game?.dev ? <div><h3>Game developers:</h3><Dev orgName={dev?.orgName} imageUrl={dev?.imageUrl} id={dev?.id} /></div> : null



    return (
        <div>
            <div>
                <img src={game?.imageUrl} alt={game?.title} height="500px" width="380px" />
            </div>

            {intro}
            {moreInfo}
            {video}
            {genres}
            {devs}
        </div>
    )
}

export default GameDetails