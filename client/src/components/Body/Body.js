import { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import './Body.css'

import gamesService from '../../services/gamesService'
import genreService from '../../services/genreService'

import HomePage from './HomePage/HomePage.js'

import Games from './Games/Games'
import Genres from './Genres/Genres'


class Body extends Component {

    constructor(props) {
        super(props)

        this.state = {
            games: []
        }
    }

    componentDidMount() {
        gamesService.getAll()
            .then(data => this.setState({ games: data }))
            .catch(err => console.log(err))
        genreService.getAll()
            .then(data => this.setState({ genres: data }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <main className="main-container">

                <Switch>
                    <Route path="/" render={() => <HomePage />} exact />
                    <Route path="/games" render={() => <Games games={this.state.games} />} exact />
                    <Route path="/genres" render={() => <Genres genres={this.state.genres} />} exact />

                    <Route path="/games/:game" render={() => <Games games={this.state.games} />} exact />
                </Switch>

            </main>
        )
    }
}

export default Body