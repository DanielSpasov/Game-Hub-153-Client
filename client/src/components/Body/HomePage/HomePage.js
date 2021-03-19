import { Component } from 'react'

import gameService from '../../../services/gamesService'
import genresService from '../../../services/genresService'
import devsService from '../../../services/devsService'

import TopFiveGames from './TopFiveGames/TopFiveGames'
import TopFiveGenres from './TopFiveGenres/TopFiveGenres'
import TopFiveDevs from './TopFiveDevs/TopFiveDevs'

import './HomePage.css'


class HomePage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            games: [],
            genres: [],
            devs: [],
        }
    }

    componentDidMount() {
        gameService.getTopFive()
            .then(games => this.setState({ games }))
            .catch(err => console.log(err))
        genresService.getTopFive()
            .then(genres => this.setState({ genres }))
            .catch(err => console.log(err))
        devsService.getTopFive()
            .then(devs => this.setState({ devs }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="home-container">

                <h1 className="home-page-title">Welcome to Game Hub</h1>
                <h3 className="home-page-description">The best place for game info, ratings, and discussion</h3>

                <TopFiveGames games={this.state.games} />
                <TopFiveGenres genres={this.state.genres} />
                <TopFiveDevs devs={this.state.devs} />

            </div>
        )
    }
}

export default HomePage