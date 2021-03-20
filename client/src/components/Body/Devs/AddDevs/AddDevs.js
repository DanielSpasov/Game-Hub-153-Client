import { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

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
        this.props.history.push('/devs')
    }

    render() {

        let addDevButton
        let imageUrlIsHttp = this.state.imageUrl.slice(0, 7) === 'http://'
        let imageUrlIsHttps = this.state.imageUrl.slice(0, 8) === 'https://'

        if (this.state.orgName !== '' && (imageUrlIsHttp || imageUrlIsHttps)) {
            addDevButton = <button className="add-dev-button" onClick={this.handleSubmit}>Add Developer</button>
        }

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

                        {addDevButton}

                    </form>
                </div>

            </div>
        )
    }
}

export default withRouter(AddDevs)