import { useState, useEffect } from 'react'

import Game from '../Common/Game/Game'
import Genre from '../Common/Genre/Genre'
import Dev from '../Common/Dev/Dev'

import gameService from '../../services/gameService'
import genreService from '../../services/genreService'
import devService from '../../services/devService'

import './HomePage.css'


const HomePage = () => {

    const [games, setGames] = useState([])
    const [genres, setGenres] = useState([])
    const [devs, setDevs] = useState([])

    useEffect(() => {
        gameService.getTopFive().then(games => setGames(games))
        genreService.getTopFive().then(genres => setGenres(genres))
        devService.getTopFive().then(devs => setDevs(devs))
    }, [])

    return (
        <div className="home-container">

            <h1 className="home-page-title">Welcome to Game Hub</h1>
            <h3 className="home-page-description">The best place for game information</h3>

            <div>
                <h2>Our top 5 most upvoted games</h2>
                <div>
                    {games.map(x => <Game id={x.id} key={x.id} title={x.title} imageUrl={x.imageUrl} />)}
                </div>
            </div>

            <div>
                <h2>Our top 5 most upvoted genres</h2>
                <div>
                    {genres.map(x => <Genre id={x.id} key={x.id} name={x.name} imageUrl={x.imageUrl} />)}
                </div>
            </div>

            <div>
                <h2>Our top 5 most upvoted game developers</h2>
                <div>
                    {devs.map(x => <Dev id={x.id} key={x.id} orgName={x.orgName} imageUrl={x.imageUrl} />)}
                </div>
            </div>

        </div>
    )
}

export default HomePage