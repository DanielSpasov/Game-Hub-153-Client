import { Component } from 'react'

import './Body.css'

import gamesService from '../../services/gamesService'

import Games from './Games/Games'
import Footer from './Footer/Footer'


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

                <Footer />

            </main>
        )
    }
}

export default Body