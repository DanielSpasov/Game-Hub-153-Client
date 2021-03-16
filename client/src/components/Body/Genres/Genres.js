import { Component } from 'react'

import Genre from '../../Common/Genre/Genre'
import SearchBox from '../../Common/SearchBox/SearchBox'

import genreService from '../../../services/genreService'
import './Genres.css'


class Genres extends Component {

    constructor(props) {
        super(props)

        this.state = {
            genres: []
        }
    }

    componentDidMount() {
        genreService.getAll()
            .then(data => this.setState({ genres: data }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="genres-section">

                <h1 className="genres-section-title">Search Genres:</h1>

                <SearchBox />

                <div className="genres-container">
                    {this.state.genres?.map(x =>
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