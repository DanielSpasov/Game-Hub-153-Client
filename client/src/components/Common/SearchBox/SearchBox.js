import { Component } from 'react'

import './SearchBox.css'

class SearchBox extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="search-box" >
                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleChange}
                        className="search-field"
                        placeholder="Search"
                        type="text"
                        name="search"
                    />
                </form>
            </div>
        )
    }
}

export default SearchBox