import { Component } from 'react'
import { Link } from 'react-router-dom'

import Dev from '../../../Common/Dev/Dev'
import devsService from '../../../../services/devsService'


class FollowDevs extends Component {

    constructor(props) {
        super(props)

        this.state = {
            devs: [],
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
        devsService.getAll(this.state.value)
            .then(devs => this.setState({ devs }))
            .catch(err => console.log(err))
    }

    componentDidMount() {
        devsService.getAll('')
            .then(devs => this.setState({ devs }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="devs-section">

                <h1>Search Game Developers to follow:</h1>

                <div className="devs-nav-container" >

                    <div className="devs-button-div">
                        <Link to="/devs" className="devs-redirect-link">Developers</Link>
                    </div>

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

                    <div className="devs-button-div">
                        <Link to="/devs/add" className="devs-redirect-link">Add Developers</Link>
                    </div>

                </div>

                <div className="devs-container">
                    {this.state.devs.map(x =>
                        <Dev
                            key={x._id}
                            orgName={x.orgName}
                            imageUrl={x.imageUrl}
                            page='followDevs'
                        />
                    )}
                </div>

            </div>
        )
    }
}

export default FollowDevs