import { Component } from 'react'

import gameService from '../../../services/gamesService'

import TopFiveGames from './TopFiveGames/TopFiveGames'
import './HomePage.css'

class HomePage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            games: []
        }
    }

    componentDidMount() {
        gameService.getTopFive()
            .then(games => this.setState({ games }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="home-container">
                <h1>Welcome to Game Hub</h1>

                <TopFiveGames games={this.state.games} />

                <div className="top-five-genres">
                    <h2>Top 5 Most Played Genres</h2>

                </div>

                <div className="top-five-developers">
                    <h2>Top 5 Most Loved Developers</h2>

                </div>

            </div>
        )
    }
}

export default HomePage