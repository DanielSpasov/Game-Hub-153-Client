import { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

import gamesService from '../../../../services/gamesService'

import 'react-toastify/dist/ReactToastify.css';
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

        let imageUrlIsHttp = this.state.imageUrl.slice(0, 7) === 'http://'
        let imageUrlIsHttps = this.state.imageUrl.slice(0, 8) === 'https://'

        if (this.state.title === '') return toast.error('You have to provide a game title.')
        if (!imageUrlIsHttp) if(!imageUrlIsHttps) return toast.error('Invalid image Url.')
        if (this.state.title.length > 25) return toast.error('The title is too long.')

        gamesService.addGame(this.state)
        this.props.history.push('/games')
    }

    render() {
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

                        <button className="add-game-button" onClick={this.handleSubmit}>Add Game</button>

                    </form>
                </div>
                <ToastContainer />
            </div>
        )
    }
}

export default withRouter(AddGames)