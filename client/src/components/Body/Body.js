import { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import './Body.css'

import gamesService from '../../services/gamesService'
import genreService from '../../services/genreService'
import devsService from '../../services/devsService'

import HomePage from './HomePage/HomePage.js'
import FollowGames from './Games/FollowGames/FollowGames'
import Games from './Games/Games'
import Genres from './Genres/Genres'
import Devs from './Devs/Devs'
import Login from './Login/Login'
import Register from './Register/Register'


class Body extends Component {

    constructor(props) {
        super(props)

        this.state = {
            games: [],
            genres: [],
            devs: [],
        }
    }

    componentDidMount() {
        gamesService.getAll()
            .then(data => this.setState({ games: data }))
            .catch(err => console.log(err))
        genreService.getAll()
            .then(data => this.setState({ genres: data }))
            .catch(err => console.log(err))
        devsService.getAll()
            .then(data => this.setState({ devs: data }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <main className="main-container">

                <Switch>

                    <Route path="/" component={HomePage} exact />
                    <Route path="/genres" render={() => <Genres genres={this.state.genres} />} exact />
                    <Route path="/games" render={() => <Games games={this.state.games} />} exact />
                    <Route path="/devs" render={() => <Devs devs={this.state.devs} />} exact />

                    <Route path="/games/follow" render={() => <FollowGames games={this.state.games} />} exact />

                    <Route path="/login" component={Login} exact />
                    <Route path="/register" component={Register} exact />
                    
                </Switch>

            </main>
        )
    }
}

export default Body