import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { useRouteMatch } from 'react-router-dom'
import { Link } from 'react-router-dom';

import gameService from '../../../services/gameService'
import genreService from '../../../services/genreService'
import devService from '../../../services/devService'

import './Details.css'

const Details = ({
    email,
    isAuth,
    category
}) => {

    const match = useRouteMatch()
    const [game, setGame] = useState(null)
    const [genre, setGenre] = useState(null)
    const [dev, setDev] = useState(null)

    useEffect(() => {
        gameService.getOne(match.params.gameId).then(item => setGame(item))
        genreService.getOne(match.params.genreId).then(item => setGenre(item))
        devService.getOne(match.params.devId).then(item => setDev(item))
    }, [match.params.gameId, match.params.genreId, match.params.devId])

    const handleUpvote = () => {
        if (category === 'game') gameService.upvote(match.params.gameId, email)
        if (category === 'genre') genreService.upvote(match.params.genreId, email)
        if (category === 'dev') devService.upvote(match.params.devId, email)
    }

    let title
    let image

    let intro
    let interstingInfo
    let gameplayVideo
    let gameGenres
    let gameDevelopers
    if (category === 'game') {
        title = <h1>{game?.title}</h1>
        interstingInfo = <div><h2>Interesting information about the game:</h2><p></p></div>
        gameplayVideo = <div><h2>Video with gameplay of the game:</h2><p></p></div>
        gameGenres = <div><h2>Genres this game falls into:</h2><p></p></div>
        gameDevelopers = <div><h2>Developers who created the game:</h2><p></p></div>
        intro = <div><h2>Intro:</h2><p>{game?.intro}</p></div>
        image = <div><img src={game?.imageUrl} alt={game?.title} height="500px" width="380px" /></div>
    }

    let gamesInGenre
    if (category === 'genre') {
        title = <h1>{genre?.name}</h1>
        gamesInGenre = <div><h2>Games in this genre:</h2><p></p></div>
        image = <div><img src={genre?.imageUrl} alt={genre?.title} height="500px" width="380px" /></div>
    }

    let createdGames
    if (category === 'dev') {
        title = <h1>{dev?.orgName}</h1>
        createdGames = <div><h2>Games this Developers have created:</h2><p></p></div>
        image = <div><img src={dev?.imageUrl} alt={dev?.title} height="400px" width="400px" /></div>
    }



    let upvoteBtn = isAuth ? <button onClick={handleUpvote}>Upvote</button> : null
    let additionalInfoBtn = isAuth ? <Link to={`/games/${game?.id}/addInfo`}>Add Additional Info</Link> : null

    return (
        <div>

            <div className="header-div">
                {upvoteBtn}
                {title}
                {additionalInfoBtn}
            </div>


            {image}

            {intro}
            {interstingInfo}
            {gameplayVideo}
            {gameGenres}
            {gameDevelopers}

            {gamesInGenre}

            {createdGames}

            <ToastContainer />
        </div>
    )
}

export default Details