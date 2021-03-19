import { Component } from 'react'
import { Link } from 'react-router-dom'

import devsService from '../../../../services/devsService'

import './AddDevs.css'

class AddDevs extends Component {

    constructor(props) {
        super(props)

        this.state = {
            orgName: '',
            imageUrl: ''
        }

        this.handleOrgNameChange = this.handleOrgNameChange.bind(this)
        this.handleImageUrlChange = this.handleImageUrlChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleOrgNameChange(e) {
        this.setState({ orgName: e.target.value })
    }

    handleImageUrlChange(e) {
        this.setState({ imageUrl: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault()
        devsService.addDev(this.state)
    }

    render() {
        return (
            <div className="devs-section">

                <div className="devs-nav-container" >

                    <div className="devs-button-div">
                        <Link to="/devs/follow" className="devs-redirect-link">Follow Game Developers</Link>
                    </div>

                    <div className="devs-search-form">
                        <h1>Add Developer</h1>
                    </div>

                    <div className="devs-button-div">
                        <Link to="/devs" className="devs-redirect-link">Developers</Link>
                    </div>

                </div>

                <div className="devs-container">
                    <form onSubmit={this.handleSubmit}>
                        <input className="add-game-field" type="text" placeholder="Org Name" value={this.state.orgName} onChange={this.handleOrgNameChange} />
                        <input className="add-game-field" type="text" placeholder="Image Url" value={this.state.imageUrl} onChange={this.handleImageUrlChange} /><br></br>
                        <button type="submit" className="submit-button">Add Developers</button>
                    </form>
                </div>

            </div>
        )
    }
}

export default AddDevs