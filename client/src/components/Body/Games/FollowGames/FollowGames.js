import { Component } from 'react'

import Game from '../../../Common/Game/Game'
import gamesService from '../../../../services/gamesService'

import './FollowGames.css'

class FollowGames extends Component {

    constructor(props) {
        super(props)

        this.state = {
            games: [],
            value: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({ value: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault()
        gamesService.getAll(this.state.value)
            .then(games => this.setState({ games }))
            .catch(err => console.log(err))
    }

    componentDidMount() {
        gamesService.getAll('')
            .then(games => this.setState({ games }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="games-section">

                <h1>Search Games to follow:</h1>

                <div className="games-nav-container" >
                    <div className="games-search-form">
                        <form onSubmit={this.handleSubmit}>
                            <input
                                className="search-field"
                                placeholder="Search"
                                type="text"
                                value={this.state.value}
                                onChange={this.handleChange}
                            />
                        </form>
                    </div>
                </div>

                <div className="games-container">
                    {this.state.games.map(x =>
                        <Game
                            key={x._id}
                            title={x.title}
                            imageUrl={x.imageUrl}
                            page='followGames'
                        />
                    )}
                </div>

            </div>
        )
    }
}

export default FollowGames