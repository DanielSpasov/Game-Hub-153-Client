import { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import './Body.css'

import gamesService from '../../services/gamesService'

import Games from './Games/Games'
import HomePage from './HomePage/HomePage.js'


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
    }

    render() {
        return (
            <main className="main-container">

                <Switch>
                    <Route path="/" render={() => <HomePage />} exact/>
                    <Route path="/games" render={() => <Games games={this.state.games} />} exact/>
                    <Route path="/games/:game" render={() => <Games games={this.state.games} />} exact/>
                </Switch>

            </main>
        )
    }
}

export default Body