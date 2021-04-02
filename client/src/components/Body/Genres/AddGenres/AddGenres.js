import { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import './AddGenres.css'

class AddGenres extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            imageUrl: ''
        }
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