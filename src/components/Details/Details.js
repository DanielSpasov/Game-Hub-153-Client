import { useContext, useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { useRouteMatch, useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';

import UserContext from '../../contexts/UserContext'

import gameService from '../../services/gameService'
import genreService from '../../services/genreService'
import devService from '../../services/devService'

import GameDetails from './GameDetails'
import GenreDetails from './GenreDetails'
import DevDetails from './DevDetails'

import './Details.css'

const Details = () => {

    const match = useRouteMatch()
    const location = useLocation().pathname.split('/')[1]

    const { email } = useContext(UserContext)

    const [game, setGame] = useState(null)
    const [genre, setGenre] = useState(null)
    const [dev, setDev] = useState(null)

    useEffect(() => {
        gameService.getOne(match.params.gameId).then(item => setGame(item))
        genreService.getOne(match.params.genreId).then(item => setGenre(item))
        devService.getOne(match.params.devId).then(item => setDev(item))
    }, [match.params.gameId, match.params.genreId, match.params.devId])

    const handleUpvote = () => {
        if (location === 'games') gameService.upvote(match.params.gameId, email)
        if (location === 'genres') genreService.upvote(match.params.genreId, email)
        if (location === 'devs') devService.upvote(match.params.devId, email)
    }

    let additionalInfoBtn
    let commentBtn
    let title
    let info

    switch (location) {
        case 'games':
            title = <h1>{game?.title}</h1>
            additionalInfoBtn = <Link to={`/games/${game?.id}/addInfo`}><img src="/white-pencil.png" alt="Edit Info"/></Link>
            commentBtn = <Link to={`/games/${game?.id}/comment`}><img src="/white-comment.png" alt="Comment"/></Link>
            info = <GameDetails game={game} />
            break
        case 'genres':
            title = <h1>{genre?.name}</h1>
            additionalInfoBtn = <Link to={`/genres/${genre?.id}/addInfo`}><img src="/white-pencil.png" alt="Edit Info"/></Link>
            commentBtn = <Link to={`/genres/${genre?.id}/comment`}><img src="/white-comment.png" alt="Comment"/></Link>
            info = <GenreDetails genre={genre} />
            break
        case 'devs':
            additionalInfoBtn = <Link to={`/devs/${dev?.id}/addInfo`}><img src="/white-pencil.png" alt="Edit Info"/></Link>
            title = <h1>{dev?.orgName}</h1>
            commentBtn = <Link to={`/devs/${dev?.id}/comment`}><img src="/white-comment.png" alt="Comment"/></Link>
            info = <DevDetails dev={dev} />
            break
        default:
            break
    }

    return (
        <div className="details-section">

            <div className="header-div">
                {title}
            </div>

            <div className="header-div">
                <button onClick={handleUpvote}><img src="/white-upvote.png" alt="Upvote" /></button>
                {commentBtn}
                {additionalInfoBtn}
            </div>

            {info}

            <ToastContainer />
        </div>
    )
}

export default Details