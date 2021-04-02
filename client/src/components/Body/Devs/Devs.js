import { Component } from 'react'

import Dev from '../../Common/Dev/Dev'

import './Devs.css'

class Devs extends Component {

    constructor(props) {
        super(props)

        this.state = {
            devs: [],
            value: '',
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({ value: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault()
    }

    render() {
        return (
            <div className="devs-section">

                <h1>Search Game Developers:</h1>

                <div className="devs-nav-container" >
                    <div className="devs-search-form">
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

                <div className="devs-container">
                    {this.state.devs?.map(x =>
                        <Dev
                            key={x._id}
                            orgName={x.orgName}
                            imageUrl={x.imageUrl}
                            id={x._id}
                        />
                    )}
                </div>

            </div>
        )
    }
}

export default Devs