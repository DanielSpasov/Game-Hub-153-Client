import { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import './Body.css'

// Services
import genreService from '../../services/genreService'
import devsService from '../../services/devsService'


// Components
import HomePage from './HomePage/HomePage.js'

import Games from './Games/Games'
import FollowGames from './Games/FollowGames/FollowGames'
import AddGames from './Games/AddGames/AddGames'

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

                    <Route path="/games" component={Games} exact />
                    <Route path="/games/follow" component={FollowGames} exact />
                    <Route path="/games/add" component={AddGames} exact />

                    <Route path="/genres" render={() => <Genres genres={this.state.genres} />} exact />

                    <Route path="/devs" render={() => <Devs devs={this.state.devs} />} exact />


                    <Route path="/login" component={Login} exact />
                    <Route path="/register" component={Register} exact />
                    
                </Switch>

            </main>
        )
    }
}

export default Body