import { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

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

        let imageUrlIsHttp = this.state.imageUrl.slice(0, 7) === 'http://'
        let imageUrlIsHttps = this.state.imageUrl.slice(0, 8) === 'https://'

        if (this.state.name === '') return toast.error('You have to provide a genre name.')
        if (!imageUrlIsHttp) if(!imageUrlIsHttps) return toast.error('Invalid image Url.')
        if (this.state.name.length > 25) return toast.error('The name is too long.')

        genresService.addGenre(this.state)
        this.props.history.push('/genres')
    }

    render() {
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
                    
                        <button className="add-genre-button" onClick={this.handleSubmit}>Add Genre</button>

                    </form>
                </div>
                <ToastContainer />
            </div>
        )
    }
}

export default withRouter(AddGenres)