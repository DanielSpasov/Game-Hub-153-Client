import { Component } from 'react'

import './Body.css'

import gamesService from '../../services/gamesService'

import Games from './Games/Games'


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

                <Games games={this.state.games} />

            </main>
        )
    }
}

export default Body