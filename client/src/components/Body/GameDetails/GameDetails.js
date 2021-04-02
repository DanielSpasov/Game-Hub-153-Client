import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { useRouteMatch } from 'react-router-dom'
import { Link } from 'react-router-dom';

import { getOne, upvote } from '../../../services/gameService'

import './GameDetails.css'

const GameDetails = ({
    email,
    isAuth
}) => {

    const match = useRouteMatch()
    const [game, setGame] = useState(null)

    useEffect(() => {
        getOne(match.params.gameId).then(item => setGame(item))
    }, [])

    const handleUpvote = () => {
        upvote(match.params.gameId, email)
    }

    let upvoteBtn = isAuth ? <button onClick={handleUpvote}>Upvote</button> : null
    let additionalInfoBtn = isAuth ? <Link to={`/games/${game?.id}/addInfo`}>Add Additional Info</Link> : null

    return (
        <div>

            <div className="header-div">
                {upvoteBtn}
                <h1>{game?.title}</h1>
                {additionalInfoBtn}
            </div>

            <div>
                <img src={game?.imageUrl} alt={game?.title} height="500px" width="380px" />
            </div>

            <div>
                <h2>Intro</h2>
                <p>{game?.intro}</p>
            </div>

            <div>
                <h2>Genres</h2>
                <p></p>
            </div>

            <div>
                <h2>Developers</h2>
                <p></p>
            </div>
            <ToastContainer />
        </div>
    )
}

export default GameDetails