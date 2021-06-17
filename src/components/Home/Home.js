import { useState, useEffect } from 'react'

import gameService from '../../services/gameService'
import genreService from '../../services/genreService'
import devService from '../../services/devService'

import errorHandler from '../../utils/errorHandler'

import Card from '../Card'



const Home = () => {

    const [games, setGames] = useState([])
    const [genres, setGenres] = useState([])
    const [devs, setDevs] = useState([])

    useEffect(() => {
        gameService.getTopFive().then(games => setGames(games)).catch(errorHandler)
        genreService.getTopFive().then(genres => setGenres(genres)).catch(errorHandler)
        devService.getTopFive().then(devs => setDevs(devs)).catch(errorHandler)
    }, [])

    return (
        <section>

            <header>
                <h1>Welcome to Game Hub</h1>
                <p>The place for game information</p>
            </header>

            <article>
                <h2>Top 5 most upvoted games</h2>
                <div>
                    {games ?
                        games.map(game => <Card upvotes={game.upvotes} id={game._id} key={game._id} title={game.title} image={game.image} type={'games'} />)
                        : null}
                </div>
            </article>

            <article>
                <h2>Top 5 most upvoted genres</h2>
                <div>
                    {genres ?
                        genres.map(genre => <Card upvotes={genre.upvotes} id={genre._id} key={genre._id} title={genre.title} image={genre.image} type={'genres'} />)
                        : null}
                </div>
            </article>

            <article>
                <h2>Top 5 most upvoted game developers</h2>
                <div>
                    {devs ?
                        devs.map(dev => <Card upvotes={dev.upvotes} id={dev._id} key={dev._id} title={dev.title} image={dev.image} type={'devs'} />)
                        : null}
                </div>
            </article>

        </section>
    )
}

export default Home