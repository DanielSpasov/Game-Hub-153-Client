import { useState, useEffect } from 'react'

import TopFive from './TopFive'

import gameService from '../../services/gameService'
import genreService from '../../services/genreService'
import devService from '../../services/devService'

import './HomePage.css'


const HomePage = () => {

    const [games, setGames] = useState(null)
    const [genres, setGenres] = useState(null)
    const [devs, setDevs] = useState(null)

    useEffect(() => {
        gameService.getTopFive().then(items => setGames(items))
        genreService.getTopFive().then(items => setGenres(items))
        devService.getTopFive().then(items => setDevs(items))
    }, [])

    return (
        <div className="home-container">

            <h1 className="home-page-title">Welcome to Game Hub</h1>
            <h3 className="home-page-description">The best place for game info, ratings, and discussion</h3>

            <TopFive category="games" items={games} />
            <TopFive category="genres" items={genres} />
            <TopFive category="devs" items={devs} />

        </div>
    )
}

export default HomePage