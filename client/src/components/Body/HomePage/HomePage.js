import { Component } from 'react'

import gameService from '../../../services/gamesService'
import genreService from '../../../services/genreService'

import TopFiveGames from './TopFiveGames/TopFiveGames'
import TopFiveGenres from './TopFiveGenres/TopFiveGenres'

import './HomePage.css'


class HomePage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            games: [],
            genres: [],
        }
    }

    componentDidMount() {
        gameService.getTopFive()
            .then(games => this.setState({ games }))
            .catch(err => console.log(err))


        genreService.getTopFive()
            .then(genres => this.setState({ genres }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="home-container">
                <h1>Welcome to Game Hub</h1>

                <TopFiveGames games={this.state.games} />
                <TopFiveGenres genres={this.state.genres} />



                <div className="top-five-developers">
                    <h2>Top 5 Most Loved Developers</h2>

                </div>

            </div>
        )
    }
}

export default HomePage