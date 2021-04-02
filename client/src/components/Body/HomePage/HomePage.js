import { Component } from 'react'

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