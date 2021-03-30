import { Component } from 'react'

import genresService from '../../../services/genresService'
import devsService from '../../../services/devsService'
import gamesService from '../../../services/gamesService'

import TopFive from './TopFive'

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
        gamesService.getTopFive()
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

                <TopFive category="games" items={this.state.games} />
                <TopFive category="genres" items={this.state.genres} />
                <TopFive category="devs" items={this.state.devs} />

            </div>
        )
    }
}

export default HomePage