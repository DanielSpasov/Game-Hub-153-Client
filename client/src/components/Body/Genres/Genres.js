import { Component } from 'react'
import { Link } from 'react-router-dom'

import genresService from '../../../services/genresService'

import Genre from '../../Common/Genre/Genre'

import './Genres.css'

class Genres extends Component {

    constructor(props) {
        super(props)

        this.state = {
            genres: [],
            value: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        genresService.getAll('')
            .then(genres => this.setState({ genres }))
            .catch(err => console.log(err))
    }

    handleChange(e) {
        this.setState({ value: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault()
        genresService.getAll(this.state.value)
            .then(genres => this.setState({ genres }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="genres-section">

                <h1>Search Genres:</h1>

                <div className="genres-nav-container" >

                    <div className="genres-button-div">
                        <Link to="/genres/follow" className="genres-redirect-link">Follow Genres</Link>
                    </div>

                    <div className="genres-search-form">
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

                    <div className="genres-button-div">
                        <Link to="/genres/add" className="genres-redirect-link">Add Genres</Link>
                    </div>

                </div>

                <div className="genres-container">
                    {this.state.genres.map(x =>
                        <Genre
                            key={x._id}
                            name={x.name}
                            imageUrl={x.imageUrl}
                        />
                    )}
                </div>

            </div>
        )
    }
}

export default Genres