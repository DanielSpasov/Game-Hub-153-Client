import { Component } from 'react'
import { Link } from 'react-router-dom';

import gamesService from '../../../../services/gamesService'

import './GameDetails.css'

class GameDetails extends Component {

    constructor(props) {
        super(props)

        this.state = {
            game: []
        }
    }

    componentDidMount() {
        gamesService.getOne(this.props.match.params.gameId)
            .then(game => this.setState({ game }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>

                <div className="header-div">
                    <Link to={`/games/${this.state.game._id}/follow`}>Follow</Link>
                    <h1>{this.state.game.title}</h1>
                    <Link to={`/games/${this.state.game._id}/addInfo`}>Add Additional Info</Link>
                </div>

                <img src={this.state.game.imageUrl} alt={this.state.game.title} height="500px" width="400px" />

                <p>Intro to the game</p>

                <p>Genre</p>
                
                <p>Developers</p>

            </div>
        )
    }
}

export default GameDetails