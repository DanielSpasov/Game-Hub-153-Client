import { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import genresService from '../../../../services/genresService'

import './AddGenres.css'

class AddGenres extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            imageUrl: ''
        }

        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleImageUrlChange = this.handleImageUrlChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleNameChange(e) {
        this.setState({ name: e.target.value })
    }

    handleImageUrlChange(e) {
        this.setState({ imageUrl: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault()
        genresService.addGenre(this.state)
        this.props.history.push('/genres')
    }

    render() {

        let addGenreButton
        let imageUrlIsHttp = this.state.imageUrl.slice(0, 7) === 'http://'
        let imageUrlIsHttps = this.state.imageUrl.slice(0, 8) === 'https://'

        if (this.state.name !== '' && (imageUrlIsHttp || imageUrlIsHttps)) {
            addGenreButton = <button className="add-genre-button" onClick={this.handleSubmit}>Add Genre</button>
        }

        return (
            <div className="genres-section">

                <div className="genres-nav-container" >

                    <div className="genres-button-div">
                        <Link to="/genres/follow" className="genres-redirect-link">Follow Genres</Link>
                    </div>

                    <div className="genres-search-form">
                        <h1>Add Genre</h1>
                    </div>

                    <div className="genres-button-div">
                        <Link to="/genres" className="genres-redirect-link">Genres</Link>
                    </div>

                </div>

                <div className="genres-container">
                    <form onSubmit={this.handleSubmit}>
                        <input className="add-genre-field" type="text" placeholder="Name" value={this.state.name} onChange={this.handleNameChange} />
                        <input className="add-genre-field" type="text" placeholder="Image Url" value={this.state.imageUrl} onChange={this.handleImageUrlChange} /><br></br>
                    
                        {addGenreButton}

                    </form>
                </div>

            </div>
        )
    }
}

export default withRouter(AddGenres)