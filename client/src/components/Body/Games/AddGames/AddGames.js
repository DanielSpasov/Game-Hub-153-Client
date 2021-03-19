import { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import gamesService from '../../../../services/gamesService'

import './AddGames.css'

class AddGames extends Component {

    constructor(props) {
        super(props)

        this.state = {
            title: '',
            imageUrl: ''
        }

        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleImageUrlChange = this.handleImageUrlChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleTitleChange(e) {
        this.setState({ title: e.target.value })
    }

    handleImageUrlChange(e) {
        this.setState({ imageUrl: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault()
        gamesService.addGame(this.state)
        this.props.history.push('/games')
    }

    render() {

        let addGameButton
        let imageUrlIsHttp = this.state.imageUrl.slice(0, 7) === 'http://'
        let imageUrlIsHttps = this.state.imageUrl.slice(0, 8) === 'https://'

        if (this.state.title !== '' && (imageUrlIsHttp || imageUrlIsHttps)) {
            addGameButton = <button className="add-game-button" onClick={this.handleSubmit}>Add Game</button>
        }

        return (
            <div className="games-section">

                <div className="games-nav-container" >

                    <div className="games-button-div">
                        <Link to="/games/follow" className="games-redirect-link">Follow Games</Link>
                    </div>

                    <div className="games-search-form">
                        <h1>Add Game</h1>
                    </div>

                    <div className="games-button-div">
                        <Link to="/games" className="games-redirect-link">Games</Link>
                    </div>

                </div>

                <div className="games-container">
                    <form onSubmit={this.handleSubmit}>

                        <input className="add-game-field" type="text" placeholder="Title" value={this.state.title} onChange={this.handleTitleChange} />
                        <input className="add-game-field" type="text" placeholder="Image Url" value={this.state.imageUrl} onChange={this.handleImageUrlChange} /><br></br>

                        {addGameButton}

                    </form>
                </div>

            </div>
        )
    }
}

export default withRouter(AddGames)